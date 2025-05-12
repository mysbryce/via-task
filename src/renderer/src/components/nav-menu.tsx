export default function NavMenu() {
    return (
        <nav className="flex items-center bg-base-200 title-bar">
            <span className="ml-4 text-sm uppercase font-bold">Via Task</span>

            <ul className="ml-auto menu menu-horizontal">
                <li>
                    <a className="clickable" onClick={window.api.windowManager.minimize}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 16 16">
                            <path fill="currentColor" d="M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a className="clickable" onClick={window.api.windowManager.maximize}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 32 32">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v3.5a.5.5 0 0 0 .5.5H7M3 11V7.5a.5.5 0 0 1 .5-.5H7m18 0h3.5a.5.5 0 0 1 .5.5V11m0 10v3.5a.5.5 0 0 1-.5.5H25" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a className="btn btn-soft btn-error btn-sm shadow-none clickable" onClick={window.api.windowManager.close}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 24 24">
                            <path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z" />
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    )
}