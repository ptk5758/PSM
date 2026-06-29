import style from './SideBar.module.css'
import { StoryAddModal, StorySelect } from '@/features/story'
import { useState } from 'react'
import { useStory } from '@/entities/story'

function SideBar() {
    const { storyList } = useStory()
    const [isPopup, setIsPopup] = useState<boolean>(false)
    const handleStoryAdd = () => setIsPopup(true)
    const handlePopupClose = () => setIsPopup(false)
    return (
        <aside className={style.side_bar}>
            {/* TODO : 스토리 추가 버튼  */}
            <div className={style.top}>
                <p>스토리 목록</p>
                <button onClick={handleStoryAdd}>새 스토리 추가</button>
            </div>
            <StoryAddModal isOpen={isPopup} onClose={handlePopupClose} />
            <StorySelect className={style.list} list={storyList} />
            {/* TODO : 스토리 리스트 */}
        </aside>
    )
}
export default SideBar
