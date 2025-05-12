import TaskCard from '@renderer/components/task-card'
import useProjectDataStore from '@renderer/stores/project-data'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

export default function TaskPage() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(true)
    // @ts-ignore
    const { setData } = useProjectDataStore()
    const params = useParams<{ id: string }>()

    const navigateTo = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, target: string) => {
        if ((e.target as HTMLElement).closest('button')) {
            e.preventDefault()
            return
        }

        navigate(target)
    }

    useEffect(() => {
        if (loading) {
            setLoading(false)
        }
    }, [loading])

    if (loading) {
        return (
            <>
                Loading
            </>
        )
    }

    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-sm text-base-content/80">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 56 56">
                        <path fill="currentColor" d="M15.555 53.125h24.89c4.852 0 7.266-2.461 7.266-7.336V24.508c0-3.024-.328-4.336-2.203-6.258L32.57 5.102c-1.78-1.829-3.234-2.227-5.882-2.227H15.555c-4.828 0-7.266 2.484-7.266 7.36v35.554c0 4.898 2.438 7.336 7.266 7.336m.187-3.773c-2.414 0-3.68-1.29-3.68-3.633V10.305c0-2.32 1.266-3.657 3.704-3.657h10.406v13.618c0 2.953 1.5 4.406 4.406 4.406h13.36v21.047c0 2.343-1.243 3.633-3.68 3.633ZM31 21.132c-.914 0-1.29-.374-1.29-1.312V7.375l13.5 13.758Z" />
                    </svg>
                    <h1>
                        Todo
                    </h1>
                    <span className="badge badge-sm">5</span>

                    <div className="ml-auto flex items-center gap-1">
                        <button type="button" className="btn btn-xs">Sort</button>
                        <button type="button" className="btn btn-xs btn-ghost" title="Add New Task">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M11 13H6q-.425 0-.712-.288T5 12t.288-.712T6 11h5V6q0-.425.288-.712T12 5t.713.288T13 6v5h5q.425 0 .713.288T19 12t-.288.713T18 13h-5v5q0 .425-.288.713T12 19t-.712-.288T11 18z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-4">     
                    <TaskCard
                        title={'Fix Bug'}
                        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ut.'}
                        tag={'Coding'}
                        authorAvatar={'https://gravatar.com/avatar/3acae9617d9187febf37da06e2616550?s=200&d=mp&r=x'}
                        color={'69.6% .17 162.48'}
                    />
                </div>
            </div>
        </div>
    )
}