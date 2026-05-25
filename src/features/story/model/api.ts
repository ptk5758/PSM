import { type AddStory } from './dto'

export function addStory({ subject, description }: AddStory) {
    return fetch('/api/v1/story', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject, description }),
    })
}
