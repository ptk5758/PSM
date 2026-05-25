import style from './StoryAddModal.module.css'
import { Modal } from '@/shared/modal'

type StoryAddModalProps = {
    isOpen: boolean
    onClose: () => void
}
function StoryAddModal({ isOpen, onClose }: StoryAddModalProps) {
    return (
        <Modal isOpen={isOpen} title="새 스토리 추가" width={'400px'} height={'auto'} onClose={onClose} mainClassName={style.story_add_modal}>
            <form>
                <div className={style.item}>
                    <label>스토리 명</label>
                    <input type='text' name='story_name'/>
                </div>
                <div className={style.item}>
                    <label>설명</label>
                    <textarea name='story_description'></textarea>
                </div>
                <div className={style.action}>
                    <button className='btn-primary'>추가</button>
                </div>
            </form>
        </Modal>
    )
}
export default StoryAddModal
