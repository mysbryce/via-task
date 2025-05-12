export default function TaskCard({
    title,
    description,
    tag,
    authorAvatar,
    color
}: {
    title: string
    description: string
    tag: string
    authorAvatar: string
    color: string
}) {
    const spanCircleStyles = {
        backgroundColor: color ? `oklch(${color} / 0.2)` : undefined,
        borderColor: color ? `oklch(${color})` : undefined
    }

    const spanTagStyles = {
        color: color ? `oklch(${color})` : undefined
    }

    return (
        <div className="cursor-pointer flex flex-col bg-base-200 w-full p-6 rounded-2xl transition-all duration-75 hover:translate-y-[1px] hover:brightness-150">
            <div className="flex items-center gap-3">
                <span className="size-5 rounded-full border border-dashed" style={spanCircleStyles}></span>

                <h1 className="text-base">{title}</h1>

                <button onClick={() => {
                    (document.getElementById('modal_setting_task') as HTMLDialogElement).showModal()
                }} type="button" className="btn ml-auto" title="Setting Task">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 16 16">
                        <g fill="none" stroke="currentColor" strokeWidth="1">
                            <path d="m13.258 8.354l.904.805a.91.91 0 0 1 .196 1.169l-1.09 1.862a.94.94 0 0 1-.35.341a1 1 0 0 1-.478.125a1 1 0 0 1-.306-.046l-1.157-.382q-.304.195-.632.349l-.243 1.173a.93.93 0 0 1-.339.544a.97.97 0 0 1-.618.206H6.888a.97.97 0 0 1-.618-.206a.93.93 0 0 1-.338-.544l-.244-1.173a6 6 0 0 1-.627-.35L3.9 12.61a1 1 0 0 1-.306.046a1 1 0 0 1-.477-.125a.94.94 0 0 1-.35-.34l-1.129-1.863a.91.91 0 0 1 .196-1.187L2.737 8v-.354l-.904-.805a.91.91 0 0 1-.196-1.169L2.766 3.81a.94.94 0 0 1 .35-.341a1 1 0 0 1 .477-.125a1 1 0 0 1 .306.028l1.138.4q.305-.195.632-.349l.244-1.173a.93.93 0 0 1 .338-.544a.97.97 0 0 1 .618-.206h2.238a.97.97 0 0 1 .618.206c.175.137.295.33.338.544l.244 1.173q.325.155.627.35l1.162-.382a.98.98 0 0 1 .784.078c.145.082.265.2.35.34l1.128 1.863a.91.91 0 0 1-.182 1.187l-.918.782z" />
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" />
                        </g>
                    </svg>
                </button>
            </div>

            <p className="text-xs mt-4 text-base-content/60">
                {description}
            </p>

            <div className="flex items-center gap-2 text-base-content/50 mt-6 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24">
                    <g fill="none">
                        <path stroke="currentColor" strokeWidth="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z" />
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 4V2.5M17 4V2.5M2.5 9h19" />
                        <path fill="currentColor" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0" />
                    </g>
                </svg>

                <span>6, August</span>
            </div>

            <div className="flex items-end justify-between">
                <span className="inline-block mt-4 text-sm" style={spanTagStyles}>#{tag}</span>

                <div className="flex items-center gap-2">
                    <div className="avatar">
                        <div className="size-7 rounded-full">
                            <img title="Author's Avatar" src={authorAvatar} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}