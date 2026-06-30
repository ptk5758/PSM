import type { Story } from '@/entities/story'
import { createContext } from 'react'

interface Workspace {
    storyId?: string
    setStoryId: (id: string) => void
    story: Story | null
}
const defaultContext: Workspace = {
    story: null,
    setStoryId: () => {},
}
export const WorkspaceContext = createContext<Workspace>(defaultContext)
