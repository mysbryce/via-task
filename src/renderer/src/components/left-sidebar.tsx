import usePageStore from '@renderer/stores/page'
import { Link } from 'react-router'

export default function LeftSidebar() {
    const { setPage } = usePageStore()

    return (
        <>
            <dialog id="modal_add_project" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-base-200">
                    <h3 className="font-bold text-lg">Add New Project</h3>
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
            
            <div className="flex flex-col w-[280px] border-r-2 border-base-200 h-full">
                <div className="flex items-center gap-2 p-4 border-b-2 border-base-200 h-[70px]">
                    <div className="flex items-center gap-2">
                        <div className="avatar avatar-online">
                            <div className="w-8 rounded-full">
                                <img src="https://gravatar.com/avatar/3acae9617d9187febf37da06e2616550?s=200&d=mp&r=x" title="Avatar" className="avatar size-10 rounded-full" />
                            </div>
                        </div>
                        <div className="dropdown dropdown-bottom">
                            <div tabIndex={0} role="button" className="flex items-center gap-2 p-1 font-medium cursor-pointer transition-all duration-75 active:translate-y-0.5">
                                <span>Kittichai Malain</span>

                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 10l-5 5l-5-5" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li>
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 32 32">
                                            <path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12c4.05 0 7.64-2.012 9.813-5.094l-1.625-1.156A9.99 9.99 0 0 1 16 26c-5.535 0-10-4.465-10-10S10.465 6 16 6a9.99 9.99 0 0 1 8.188 4.25l1.625-1.156A11.99 11.99 0 0 0 16 4m7.344 7.281l-1.438 1.438L24.188 15H12v2h12.188l-2.282 2.281l1.438 1.438l4-4L28.03 16l-.687-.719z" />
                                        </svg>

                                        <span>Sign out</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <button
                        title="Add New Project"
                        type="button"
                        role="button"
                        className="btn btn-sm btn-square rounded-xl shadow-none ml-auto"
                        onClick={() => (document.getElementById('modal_add_project') as HTMLDialogElement).showModal()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1" />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col gap-2 p-4">
                    <span className="text-xs text-base-content/40 uppercase font-medium">Main menu</span>
                    <ul className="menu bg-base-100 rounded-box w-56 p-0">
                        <li>
                            <Link onClick={() => setPage('dashboard')} to="/" className="text-base-content/60 hover:text-base-content">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 15 15">
                                    <path fill="currentColor" fillRule="evenodd" d="M2.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 1.04 2.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6A1.5 1.5 0 0 0 2.15 6.96c.174.04.37.04.6.04h2.5c.229 0 .426 0 .6-.041A1.5 1.5 0 0 0 6.96 5.85c.04-.174.04-.37.04-.6v-2.5c0-.229 0-.426-.041-.6A1.5 1.5 0 0 0 5.85 1.04C5.676 1 5.48 1 5.25 1zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.003.374-.014.417a.5.5 0 0 1-.37.37C5.575 5.996 5.509 6 5.2 6H2.8c-.308 0-.374-.003-.417-.014a.5.5 0 0 1-.37-.37C2.004 5.575 2 5.509 2 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37M9.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 8.04 2.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6A1.5 1.5 0 0 0 9.15 6.96c.174.04.37.04.6.04h2.5c.229 0 .426 0 .6-.041a1.5 1.5 0 0 0 1.11-1.109c.04-.174.04-.37.04-.6v-2.5c0-.229 0-.426-.041-.6a1.5 1.5 0 0 0-1.109-1.11c-.174-.04-.37-.04-.6-.04zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 0 1-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.003-.417-.014a.5.5 0 0 1-.37-.37C9.004 5.575 9 5.509 9 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37M2.75 8h2.5c.229 0 .426 0 .6.041A1.5 1.5 0 0 1 6.96 9.15c.04.174.04.37.04.6v2.5c0 .229 0 .426-.041.6a1.5 1.5 0 0 1-1.109 1.11c-.174.04-.37.04-.6.04h-2.5c-.229 0-.426 0-.6-.041a1.5 1.5 0 0 1-1.11-1.109c-.04-.174-.04-.37-.04-.6v-2.5c0-.229 0-.426.041-.6A1.5 1.5 0 0 1 2.15 8.04c.174-.04.37-.04.6-.04m.05 1c-.308 0-.374.003-.417.014a.5.5 0 0 0-.37.37C2.004 9.425 2 9.491 2 9.8v2.4c0 .308.003.374.014.417a.5.5 0 0 0 .37.37c.042.01.108.013.416.013h2.4c.308 0 .374-.004.417-.014a.5.5 0 0 0 .37-.37c.01-.042.013-.108.013-.416V9.8c0-.308-.003-.374-.014-.417a.5.5 0 0 0-.37-.37C5.575 9.004 5.509 9 5.2 9zm7-1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 8.04 9.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6a1.5 1.5 0 0 0 1.109 1.11c.174.041.371.041.6.041h2.5c.229 0 .426 0 .6-.041a1.5 1.5 0 0 0 1.109-1.109c.041-.174.041-.371.041-.6v-2.5c0-.229 0-.426-.041-.6A1.5 1.5 0 0 0 12.85 8.04c-.174-.04-.37-.04-.6-.04zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 0 1-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.004-.417-.014a.5.5 0 0 1-.37-.37C9.004 12.575 9 12.509 9 12.2V9.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37" clipRule="evenodd" />
                                </svg>

                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <details open>
                                <summary className="text-base-content/60 hover:text-base-content [details[open]>&]:text-base-content">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1.75 2.75v10.5h12.5v-8.5h-6l-1.5-2z" />
                                    </svg>

                                    <span>Projects</span>
                                </summary>
                                <ul>
                                    <li><a>Project A</a></li>
                                    <li><a>Project B</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className="text-base-content/60 hover:text-base-content [details[open]>&]:text-base-content">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="m12 2l3.104 6.728l7.358.873l-5.44 5.03l1.444 7.268L12 18.28L5.534 21.9l1.444-7.268L1.538 9.6l7.359-.873z" />
                                    </svg>

                                    <span>Favourite</span>
                                </summary>
                                <ul>
                                    <li><a>Project A</a></li>
                                    <li><a>Project B</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}