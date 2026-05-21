import clsx from 'clsx'

export type StoryCardItem = {
    storyId: string
    subject: string
    description?: string
}
export type StoryCardProps = StoryCardItem & {
    isSelected: boolean
    onClick?: (storyId: string) => void
}

function StoryCard({ subject, description, storyId, isSelected, onClick }: StoryCardProps) {
    return (
        <li className={clsx(isSelected && 'on')} onClick={() => onClick?.(storyId)}>
            <h4>{subject}</h4>
            {description && <p>{description}</p>}
        </li>
    )
}
export default StoryCard
