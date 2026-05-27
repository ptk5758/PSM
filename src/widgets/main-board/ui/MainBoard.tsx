import style from './MainBoard.module.css'
import { useWorkspace } from '@/app/hooks'
import { CharacterList } from '@/features/character'
import clsx from 'clsx'

function MainBoard() {
    const { storyId } = useWorkspace()

    if (!storyId) {
        return <main className={clsx(style.main_board, 'no-item')}>시나리오를 선택 해주세요</main>
    }

    return (
        <main className={style.main_board}>
            <div className={style.top}>
                <h1>React Native 위치 기반 메모 앱</h1>
                <h2>어쩌구 저쩌구 설명 입니다</h2>
            </div>
            <CharacterList className={style.character_list} storyId={storyId} />
            <div>StoryBoard</div>
            <form>StoryForm</form>
        </main>
    )
}
export default MainBoard
