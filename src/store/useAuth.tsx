import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { SignUpType, UserType } from '../types'
import { nanoid } from 'nanoid'

interface AuthState {
  auth: UserType | null
  profile: UserType | null
  response: string,
  users: UserType[],
  setLogout: () => void
  updateProfile: (data: UserType) => void
  createUser: (data: SignUpType) => void
  loginUser: (data: SignUpType) => void
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
        setLogout: () => set(() => ({ auth: null, response: '' })),
        updateProfile: (data) => {
          const updatedProfile = { ...data, password: '' } as UserType
          return set(() => ({ profile: updatedProfile }))
        },
        createUser: (data) => {
          const newUser: UserType = {
            id: nanoid(),
            firstname: '',
            lastname: '',
            email: data.email,
            password: data.password
          }
          return set((state) => {
            const userExists = state.users.some(user => user.email === data.email)
            if (userExists) return { users: [...state.users], response: 'User with such e-mail already exists' }
            return { users: [...state.users, newUser], response: `User ${data.email} has been created` }
          })
        },
        loginUser: (data) => {
          return set((state) => {
            const userExists = state.users.some(user => user.email === data.email)
            const foundUser = state.users.find(user => user.email === data.email)
            if (!userExists) return { response: `User with such e-mail doesn't exist` }
            if (foundUser?.password !== data.password) return { response: `Wrong password` }
            return { response: 'User has been logged', auth: foundUser }
          })
        },
        clearResponse: () => set(() => ({ response: '' }))
      }),
      {
        name: 'auth'
      }
    )
  )
)
