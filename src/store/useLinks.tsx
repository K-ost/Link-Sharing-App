import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { LinkType } from '../types'

interface LinksState {
  links: LinkType[]
  setLink: (data: LinkType[]) => void
  removeLink: (id: string) => void
}

export const useLinks = create<LinksState>()(
  devtools(
    //persist(
      (set) => ({
        links: [],
        setLink: (data) => set((state) => {
          return { links: [ ...state.links, ...data ] }
        }),
        removeLink: (id) => console.log(id)
        //removeLink: () => set((state) => ({ auth: false }))
      }),
      // {
      //   name: 'links'
      // }
    //)
  )
)
