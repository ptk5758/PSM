import { WorkspaceContext } from '@/app/contexts/workspace/workspace-context'
import { useMemo, useState, type PropsWithChildren } from 'react'

function WorkspaceProvider({ children }: PropsWithChildren) {
    const [storyId, setStoryId] = useState<string>()
    const value = useMemo(() => ({ storyId, setStoryId }), [storyId, setStoryId])
    return <WorkspaceContext value={value}>{children}</WorkspaceContext>
}
export default WorkspaceProvider
