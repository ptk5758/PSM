import style from './MainBoard.module.css'
import { useWorkspace } from '@/app/hooks'
import { StoryHeader } from '@/entities/story'
import { CharacterList } from '@/features/character'
import clsx from 'clsx'

function MainBoard() {
    const { story } = useWorkspace()

    if (!story) {
        return <main className={clsx(style.main_board, 'no-item')}>시나리오를 선택 해주세요</main>
    }

    return (
        <main className={style.main_board}>
            <StoryHeader className={style.top} {...story} />
            <CharacterList className={style.character_list} storyId={story.id} />
            <div>StoryBoard</div>
            <form>StoryForm</form>
        </main>
    )
}
export default MainBoard
