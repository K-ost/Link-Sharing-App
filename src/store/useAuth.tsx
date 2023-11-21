import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { UserType } from '../types'

interface AuthState {
  auth: boolean
  profile: UserType | null
  setLogin: () => void
  setLogout: () => void
  updateProfile: (data: UserType) => void
}

export const useAuth = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        auth: false,
        profile: null,
        setLogin: () => set(() => ({ auth: true })),
        setLogout: () => set(() => ({ auth: false })),
        updateProfile: (data) => {
          const updatedProfile = { ...data, password: '1234567', photo: '' } as UserType
          return set(() => ({ profile: updatedProfile }))
        }
      }),
      {
        name: 'auth'
      }
    )
  )
)
