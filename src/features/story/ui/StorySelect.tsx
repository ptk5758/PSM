import clsx from 'clsx'
import style from './StorySelect.module.css'
import { StoryCard, type Story } from '@/entities/story'
import { useWorkspace } from '@/app/hooks'

type StorySelectProps = {
    className?: string
    list?: Story[]
}

function StorySelect({ className, list }: StorySelectProps) {
    const { storyId, setStoryId } = useWorkspace()
    const handleClick = (storyId: string) => setStoryId(storyId)
    return (
        <div className={clsx(style.story_select, className)}>
            {/* TODO : 활용 필요 */}
            <span>빈 공간 입니다</span>
            <ul>
                {list ? (
                    list.map(({ id, subject, description }) => {
                        return (
                            <StoryCard
                                key={id}
                                id={id}
                                subject={subject}
                                description={description}
                                onClick={handleClick}
                                isSelected={storyId === id}
                            />
                        )
                    })
                ) : (
                    // TODO : 문구 수정 필요
                    <li>로딩 중</li>
                )}
            </ul>
        </div>
    )
}
export default StorySelect
