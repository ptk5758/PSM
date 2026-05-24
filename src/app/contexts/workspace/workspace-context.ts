import { createContext } from 'react'

interface Workspace {
    storyId?: string
    setStoryId: (id: string) => void
}

export const WorkspaceContext = createContext<Workspace>({ storyId: undefined, setStoryId: () => {} })
