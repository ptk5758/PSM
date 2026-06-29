import type { Story } from '../model/types'

const API_STORY_ENDPOINT = '/api/v1/story'

interface StoryListResponse {
    message: string
    data: Story[]
}
export function getStoryList(): Promise<StoryListResponse> {
    return fetch(API_STORY_ENDPOINT, { method: 'GET' }).then((response) => response.json())
}
