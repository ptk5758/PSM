import { WorkspaceContext } from '@/app/contexts/workspace/workspace-context'
import { type Story } from '@/entities/story'
import { getStory } from '@/entities/story/api/api'
import { useCallback, useEffect, useMemo, useState, type PropsWithChildren } from 'react'

function WorkspaceProvider({ children }: PropsWithChildren) {
    
    const [storyId, setStoryId] = useState<string>()
    const [story, setStory] = useState<Story | null>(null)

    const value = useMemo(() => ({ storyId, setStoryId, story }), [storyId, setStoryId, story])

    const fetchStory = useCallback((_storyId?: string) => {
        if (!_storyId) {
            setStory(null)
            return
        }
        getStory(_storyId).then((item) => {
            const _story = item.data
            if (!_story) {
                // TODO : 예외 처리
                throw new Error('존재 하지 않는 시나리오 입니다.')
            }
            setStory(_story)
        })
    }, [])

    useEffect(() => fetchStory(storyId), [storyId])
    return <WorkspaceContext value={value}>{children}</WorkspaceContext>
}

export default WorkspaceProvider
