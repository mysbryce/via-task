import { create } from 'zustand'

export const pageNames = ['dashboard']

export type PageNames = (typeof pageNames)[number] | string

export type Page = {
    page: PageNames
    setPage: (page: PageNames) => void
}

const usePageStore = create<Page>((set) => ({
    page: 'dashboard',
    setPage: (page: PageNames) => set(() => ({ page }))
}))

export default usePageStore