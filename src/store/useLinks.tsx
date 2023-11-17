import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { LinkType } from '../types'

interface LinksState {
  links: LinkType[]
  setLink: (data: LinkType[]) => void
}

export const useLinks = create<LinksState>()(
  devtools(
    persist(
      (set) => ({
        links: [],
        setLink: (data) => set((state) => ({ links: data }))
      }),
      {
        name: 'links'
      }
    )
  )
)
