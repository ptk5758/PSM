import type { Story } from '../model/types'

const API_ENDPOINT_STORY = '/api/v1/story'

// TODO : Common Response Interface 필요
interface StoryListResponse {
    message: string
    data: Story[]
}

interface StoryResponse {
    message: string
    data: Story | null
}
export function getStoryList(): Promise<StoryListResponse> {
    return fetch(API_ENDPOINT_STORY, { method: 'GET' }).then((response) => response.json())
}

export function getStory(storyId: string): Promise<StoryResponse> {
    return fetch(API_ENDPOINT_STORY + `/${storyId}`, { method: 'GET' }).then((response) => response.json())
}
