import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { LinkType, SignUpType, UserType } from '../types'
import { nanoid } from 'nanoid'

interface AuthState {
  auth: UserType | null
  response: string,
  users: UserType[],
  setLogout: () => void
  updateProfile: (data: UserType, userId: string) => void
  createUser: (data: SignUpType) => void
  loginUser: (data: SignUpType) => void
  updateLinks: (data: LinkType[], userId: string) => void
  clearResponse: () => void
}

export const useAuth = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        auth: null,
        profile: null,
        response: '',
        users: [],

        // Logout
        setLogout: () => set(() => ({ auth: null, response: '' })),

        // updateProfile
        updateProfile: (data, userId) => set((state) => {
          const currentUser = state.users.find(el => el.id === userId)
          currentUser!.photo = data.photo
          currentUser!.firstname = data.firstname
          currentUser!.lastname = data.lastname
          currentUser!.email = data.email
          return { state, auth: currentUser }
        }),

        // createUser
        createUser: (data) => {
          const newUser: UserType = {
            id: nanoid(),
            firstname: '',
            lastname: '',
            email: data.email,
            password: data.password,
            links: []
          }
          return set((state) => {
            const userExists = state.users.some(user => user.email === data.email)
            if (userExists) return { users: [...state.users], response: 'User with such e-mail already exists' }
            return { users: [...state.users, newUser], response: `User ${data.email} has been created` }
          })
        },

        // loginUser
        loginUser: (data) => {
          return set((state) => {
            const userExists = state.users.some(user => user.email === data.email)
            const foundUser = state.users.find(user => user.email === data.email)
            if (!userExists) return { response: `User with such e-mail doesn't exist` }
            if (foundUser?.password !== data.password) return { response: `Wrong password` }
            return { response: 'User has been logged', auth: foundUser }
          })
        },

        // updateLinks
        updateLinks: (data, userId) => {
          return set((state) => {
            const foundUser = state.users.find(el => el.id === userId)
            foundUser!.links = data
            return { state, auth: foundUser }
          })
        },

        // clearResponse
        clearResponse: () => set(() => ({ response: '' }))
      }),
      {
        name: 'auth'
      }
    )
  )
)
