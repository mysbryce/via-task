import { PropsWithChildren } from 'react'
import NavMenu from './components/nav-menu'
import usePageStore, { pageNames } from './stores/page'
import LeftSidebar from './components/left-sidebar'
import useProjectDataStore from './stores/project-data'

export default function Template({ children }: PropsWithChildren) {
    const { page } = usePageStore()
    const { title } = useProjectDataStore()

    return (
        <main className="flex flex-col h-screen">
            <NavMenu />

            <div className="flex items-start flex-1 h-full">
                <LeftSidebar />

                <div className="flex flex-col w-[calc(100%-280px)] h-full">
                    <div className="flex items-center border-b-2 border-base-200 h-[70px] py-4 px-6">
                        <h1 className="text-xl">
                            {
                                pageNames.includes(page)
                                ? (
                                    <>
                                        {page[0].toUpperCase() + page.slice(1).toLowerCase()}
                                    </>
                                ) : (
                                    <>
                                        {title.length > 0 ? title[0].toUpperCase() + title.slice(1).toLowerCase() : 'No title'}
                                    </>
                                )
                            }
                        </h1>
                        
                        <div className="ml-auto flex gap-4 items-center"></div>
                    </div>

                    <div className="p-6 h-[calc(100%-70px)] overflow-y-scroll">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}