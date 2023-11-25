import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { SignUpType, UserType } from '../types'
import { nanoid } from 'nanoid'

interface AuthState {
  auth: boolean
  profile: UserType | null
  response: string,
  users: UserType[],
  setLogin: () => void
  setLogout: () => void
  updateProfile: (data: UserType) => void
  createUser: (data: SignUpType) => void
  clearResponse: () => void
}

export const useAuth = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        auth: false,
        profile: null,
        response: '',
        users: [],
        setLogin: () => set(() => ({ auth: true })),
        setLogout: () => set(() => ({ auth: false })),
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
            const userExist = state.users.some(user => user.email === data.email)
            if (userExist) return { users: [...state.users], response: 'User with such e-mail already exists' }
            return { users: [...state.users, newUser], response: `User ${data.email} has been created` }
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
