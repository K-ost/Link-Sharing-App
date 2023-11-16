import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface AuthState {
  auth: boolean
  setLogin: () => void
  setLogout: () => void
}

export const useAuth = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        auth: false,
        setLogin: () => set((state) => ({ auth: true })),
        setLogout: () => set((state) => ({ auth: false }))
      }),
      {
        name: 'auth'
      }
    )
  )
)
