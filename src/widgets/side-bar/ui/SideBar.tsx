import style from './SideBar.module.css'
import { StorySelect } from '@/features/story'

function SideBar() {
    return (
        <aside className={style.side_bar}>
            {/* TODO : 스토리 추가 버튼  */}
            <div className={style.top}>
                <p>스토리 목록</p>
                <button>새 스토리 추가</button>
            </div>
            <StorySelect className={style.list} />
            {/* TODO : 스토리 리스트 */}
        </aside>
    )
}
export default SideBar
