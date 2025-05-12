import { create } from 'zustand'

export type TaskStatus = 'backlog' | 'todo' | 'in-progress' | 'review-deploy'

export type Task = {
    id: string
    projectId: string
    color: string
    title: string
    description: string
    details: string
    status: TaskStatus
    deadline: typeof Date.now
}

export type ProjectData = {
    id: string
    title: string
    description: string
    members: string[]
    tasks: Task[]
    tag: string
    icon: string,

    setData: (data: any) => void
}

type ProjectDataInput = {
    id?: string
    title?: string
    description?: string
    members?: string[]
    tasks?: Task[]
    tag?: string
    icon?: string
}

const useProjectDataStore = create<ProjectData>((set) => ({
    id: '',
    title: '',
    description: '',
    members: [],
    tasks: [],
    tag: '',
    icon: '',

    setData: (data: ProjectDataInput) => set((prev) => ({ ...prev, ...data }))
}))

export default useProjectDataStore