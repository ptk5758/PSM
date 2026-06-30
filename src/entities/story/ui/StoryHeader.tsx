import clsx from 'clsx'
import style from './StoryHeader.module.css'
import type { Story } from '../model/types'

type StoryHeaderProps = Pick<Story, 'subject' | 'description'> & {
    className?: string
}
const NO_DESCRIPTION_MESSAGE = "설명 없음"
function StoryHeader({ className, subject, description }: StoryHeaderProps) {
    return (
        <div className={clsx(className, style.container)}>
            <h1>{subject}</h1>
            <h2>{description ?? NO_DESCRIPTION_MESSAGE}</h2>
        </div>
    )
}
export default StoryHeader
