import { useNavigate } from 'react-router'
import usePageStore from './stores/page'
import { useState } from 'react'

export default function App() {
    const { setPage } = usePageStore()
    const navigate = useNavigate()
    const [users, setUsers] = useState<string[]>([])

    const navigateTo = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, target: string) => {
        if ((e.target as HTMLElement).closest('button')) {
            e.preventDefault()
            return
        }

        navigate(target)
        setPage(`task-${'id'}`)
    }

    const onAddUserKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const inputElm = (e.target as HTMLInputElement)
        const userName = inputElm.value

        if (e.code === 'Enter' && userName.length > 0) {
            setUsers(prev => [...prev, userName])
            inputElm.value = ''
        } else if (e.code === 'Backspace' && userName.length === 0) {
            setUsers(prev => prev.slice(0, -1))
            inputElm.value = ''
        }
    }

    const removeUserFromAddingToProject = (index: number) => {
        setUsers(prev => prev.filter((_, i) => i !== index))
    }

    return (
        <>
            <dialog id="modal_setting_project" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-base-200">
                    <h3 className="font-bold text-lg">Setting Project</h3>
                    <div className="mt-4">
                        <label className="input validator w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-base-content/50" viewBox="0 0 256 256">
                                <path fill="currentColor" d="M240.26 186.1L152.81 34.23a28.74 28.74 0 0 0-49.62 0L15.74 186.1a27.45 27.45 0 0 0 0 27.71A28.31 28.31 0 0 0 40.55 228h174.9a28.31 28.31 0 0 0 24.79-14.19a27.45 27.45 0 0 0 .02-27.71m-20.8 15.7a4.46 4.46 0 0 1-4 2.2H40.55a4.46 4.46 0 0 1-4-2.2a3.56 3.56 0 0 1 0-3.73L124 46.2a4.75 4.75 0 0 1 8 0l87.45 151.87a3.56 3.56 0 0 1 .01 3.73" />
                            </svg>
                            <input
                                type="text"
                                required
                                placeholder="Project Name"
                            />
                        </label>

                        <textarea className="textarea p-4 mt-2 w-full" rows={6} placeholder="Description"></textarea>

                        <label className="input validator w-full mt-2">
                            {
                                users.map((user, index) => (
                                    <div className="badge badge-soft group" key={index}>
                                        {user}

                                        <button onClick={() => removeUserFromAddingToProject(index)} type="button" className="cursor-pointer overflow-hidden duration-150 hidden opacity-30 hover:opacity-100 group-hover:block">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 24 24">
                                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
                                            </svg>
                                        </button>
                                    </div>
                                ))
                            }
                            <input
                                type="text"
                                placeholder="Add Users To Project"
                                onKeyDown={onAddUserKeyDown}
                            />
                        </label>

                        <hr className="my-6 opacity-10" />

                        <button type="button" role="button" className="btn btn-error btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
                            </svg>
                            Delete Project
                        </button>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button type="submit" className="btn">Close</button>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button type="submit">close</button>
                </form>
            </dialog>

            <div className="grid grid-cols-4 gap-4 w-full">
                <div onClick={(e) => navigateTo(e, '/task/id')} className="cursor-pointer flex flex-col bg-base-200 w-full p-6 rounded-2xl transition-all duration-75 hover:translate-y-[1px] hover:brightness-150">
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-6" viewBox="0 0 24 24">
                            <g fill="none">
                                <path d="M0 0h24v24H0z" />
                                <path fill="currentColor" d="M14.486 3.143a1 1 0 0 1 .692 1.233l-4.43 15.788a1 1 0 0 1-1.926-.54l4.43-15.788a1 1 0 0 1 1.234-.693M7.207 7.05a1 1 0 0 1 0 1.414L3.672 12l3.535 3.535a1 1 0 1 1-1.414 1.415L1.55 12.707a1 1 0 0 1 0-1.414L5.793 7.05a1 1 0 0 1 1.414 0m9.586 1.414a1 1 0 1 1 1.414-1.414l4.243 4.243a1 1 0 0 1 0 1.414l-4.243 4.243a1 1 0 0 1-1.414-1.415L20.328 12z" />
                            </g>
                        </svg>

                        <h1 className="text-base">Plugin Development</h1>

                        <button onClick={() => {
                            (document.getElementById('modal_setting_project') as HTMLDialogElement).showModal()
                        }} type="button" className="btn ml-auto" title="Setting Project">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 16 16">
                                <g fill="none" stroke="currentColor" strokeWidth="1">
                                    <path d="m13.258 8.354l.904.805a.91.91 0 0 1 .196 1.169l-1.09 1.862a.94.94 0 0 1-.35.341a1 1 0 0 1-.478.125a1 1 0 0 1-.306-.046l-1.157-.382q-.304.195-.632.349l-.243 1.173a.93.93 0 0 1-.339.544a.97.97 0 0 1-.618.206H6.888a.97.97 0 0 1-.618-.206a.93.93 0 0 1-.338-.544l-.244-1.173a6 6 0 0 1-.627-.35L3.9 12.61a1 1 0 0 1-.306.046a1 1 0 0 1-.477-.125a.94.94 0 0 1-.35-.34l-1.129-1.863a.91.91 0 0 1 .196-1.187L2.737 8v-.354l-.904-.805a.91.91 0 0 1-.196-1.169L2.766 3.81a.94.94 0 0 1 .35-.341a1 1 0 0 1 .477-.125a1 1 0 0 1 .306.028l1.138.4q.305-.195.632-.349l.244-1.173a.93.93 0 0 1 .338-.544a.97.97 0 0 1 .618-.206h2.238a.97.97 0 0 1 .618.206c.175.137.295.33.338.544l.244 1.173q.325.155.627.35l1.162-.382a.98.98 0 0 1 .784.078c.145.082.265.2.35.34l1.128 1.863a.91.91 0 0 1-.182 1.187l-.918.782z" />
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" />
                                </g>
                            </svg>
                        </button>
                    </div>

                    <p className="text-xs mt-4 text-base-content/60">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, cupiditate?
                    </p>

                    <div className="flex items-start flex-wrap gap-x-4 gap-y-2 mt-4">
                        <div className="flex items-center gap-2 text-xs uppercase">
                            <span className="block size-2 rounded-full bg-white/20"></span>
                            <span className="text-[10px]">Backlog 5</span>
                        </div>

                        <div className="flex items-center gap-2 text-xs uppercase">
                            <span className="block size-2 rounded-full bg-white/20"></span>
                            <span className="text-[10px]">TODO 5</span>
                        </div>

                        <div className="flex items-center gap-2 text-xs uppercase">
                            <span className="block size-2 rounded-full bg-white/20"></span>
                            <span className="text-[10px]">In Progress 5</span>
                        </div>

                        <div className="flex items-center gap-2 text-xs uppercase">
                            <span className="block size-2 rounded-full bg-white/20"></span>
                            <span className="text-[10px]">Review & Deploy 5</span>
                        </div>
                    </div>

                    <span className="inline-block mt-4 text-emerald-400 text-sm">#Coding</span>
                </div>
            </div>
        </>
    )
}