import { useEffect, useState } from 'react'
import type { Story } from '../model/types'
import { getStoryList } from '../api/api'

interface UseStory {
    storyList?: Story[]
}
export const useStory = (): UseStory => {
    const [storyList, setStoryList] = useState<Story[]>()

    useEffect(() => {
        getStoryList().then((response) => {
            setStoryList(response.data)
        })
    }, [])

    return { storyList }
}
