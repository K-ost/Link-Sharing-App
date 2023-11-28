import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { LinkType, SignUpType, UserType, ResponseType } from '../types'
import { nanoid } from 'nanoid'

interface AuthState {
  auth: UserType | null
  response: ResponseType,
  users: UserType[],
  setLogout: () => void
  updateProfile: (data: UserType, userId: string) => void
  createUser: (data: SignUpType) => void
  loginUser: (data: SignUpType) => void
  updateLinks: (data: LinkType[], userId: string) => void
  setResponse: (data: ResponseType) => void
  clearResponse: () => void
}

export const useAuth = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        auth: null,
        profile: null,
        response: {
          message: '',
          show: false,
          icon: false
        },
        users: [],

        // Logout
        setLogout: () => set(() => ({ auth: null, response: { message: '', show: false, icon: false } })),

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
            if (userExists) return {
              users: [...state.users],
              response: { message: 'User with such e-mail already exists', show: true }
            }
            return {
              users: [...state.users, newUser],
              response: { message: `User ${data.email} has been created`, show: true }
            }
          })
        },

        // loginUser
        loginUser: (data) => {
          return set((state) => {
            const userExists = state.users.some(user => user.email === data.email)
            const foundUser = state.users.find(user => user.email === data.email)
            if (!userExists) return { response: { message: `User with such e-mail doesn't exist`, show: true } }
            if (foundUser?.password !== data.password) return { response: { message: `Wrong password`, show: true } }
            return { response: { message: 'User has been logged', show: true }, auth: foundUser }
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

        // setResponse
        setResponse: (data) => set(() => ({ response: data })),

        // clearResponse
        clearResponse: () => set(() => ({ response: { message: '', show: false, icon: false } }))
      }),
      {
        name: 'auth'
      }
    )
  )
)
