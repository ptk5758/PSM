import clsx from 'clsx'
import type { Story } from '../model/types'

export type StoryCardProps = Omit<Story, "createAt" | "updateAt"> & {
    isSelected: boolean
    onClick?: (storyId: string) => void
}

function StoryCard({ subject, description, id, isSelected, onClick }: StoryCardProps) {
    return (
        <li className={clsx(isSelected && 'on')} onClick={() => onClick?.(id)}>
            <h4>{subject}</h4>
            {description && <p>{description}</p>}
        </li>
    )
}
export default StoryCard
