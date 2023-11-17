import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { LinkType } from '../types'

interface LinksState {
  links: LinkType[]
  setLinks: (data: LinkType[]) => void
  onDragEnd: (result: any, data: LinkType[]) => void
}

export const useLinks = create<LinksState>()(
  devtools(
    persist(
      (set) => ({
        links: [],
        setLinks: (data) => set(() => ({ links: data })),
        onDragEnd: (result, data) => {
          if (!result.destination) return
          const copy = Array.from(data)
          const [removed] = copy.splice(result.source.index, 1)
          copy.splice(result.destination.index, 0, removed)
          return set(() => ({ links: copy }))
        }
      }),
      {
        name: 'links'
      }
    )
  )
)
