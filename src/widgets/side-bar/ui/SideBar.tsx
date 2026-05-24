import { Modal } from '@/shared/modal'
import style from './SideBar.module.css'
import { StorySelect } from '@/features/story'
import { useState } from 'react'

function SideBar() {
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
            <Modal isOpen={isPopup} title="새 스토리 추가" width={'400px'} height={'280px'} onClose={handlePopupClose}>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
                <div>스토리 추가 양식</div>
            </Modal>
            <StorySelect className={style.list} />
            {/* TODO : 스토리 리스트 */}
        </aside>
    )
}
export default SideBar
