import { useActionState, useState } from 'react'
import style from './StoryAddModal.module.css'
import { Modal } from '@/shared/modal'
import { addStory } from '../model/api'

type StoryAddModalProps = {
    isOpen: boolean
    onClose: () => void
}
type State = {
    message: string
}
async function formReducer(state: State, formData: FormData) {
    const inputStoryName = formData.get('story_name')
    if (typeof inputStoryName !== 'string') {
        return { ...state, message: '스토리 명 을 입력 해주세요' }
    }
    const t = formData.get('story_description')
    const inputStoryDescription = typeof t === 'string' ? t : ''

    const response = await addStory({ subject: inputStoryName, description: inputStoryDescription })

    return { ...state, message: '추가 완료' }
}

function StoryAddModal({ isOpen, onClose }: StoryAddModalProps) {
    const [state, action, pending] = useActionState(formReducer, { message: '' })
    const [storyName, setStoryName] = useState<string>('')
    const [storyDescription, setStoryDescription] = useState<string>('')
    return (
        <Modal
            isOpen={isOpen}
            title="새 스토리 추가"
            width={'400px'}
            height={'auto'}
            onClose={onClose}
            mainClassName={style.story_add_modal}
        >
            <form action={action}>
                <div className={style.item}>
                    <label htmlFor="story_name">스토리 명</label>
                    <input
                        type="text"
                        id="story_name"
                        name="story_name"
                        value={storyName}
                        onChange={(e) => setStoryName(e.target.value)}
                    />
                </div>
                <div className={style.item}>
                    <label htmlFor="story_description">설명</label>
                    <textarea
                        id="story_description"
                        name="story_description"
                        onChange={(e) => setStoryDescription(e.target.value)}
                        value={storyDescription}
                    ></textarea>
                </div>
                <div className={style.action}>
                    <span>{pending ? <p>전송중</p> : state.message || <p>{state.message}</p>}</span>
                    <button className="btn-primary">추가</button>
                </div>
            </form>
        </Modal>
    )
}
export default StoryAddModal
