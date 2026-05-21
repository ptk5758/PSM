// TODO : PK key 기반 Select 조회
import clsx from 'clsx'
import style from './StorySelect.module.css'

type StorySelectProps = {
    className?: string
}

function StorySelect({ className }: StorySelectProps) {
    return (
        <div className={clsx(style.story_select, className)}>
            <span>빈 공간 입니다</span>
            <ul>
                <li className="on">
                    <h4>엄청 커다란 모기가 내 발을 물었어</h4>
                    <p>3줄</p>
                </li>
                <li>
                    <h4>프롤로그</h4>
                    <p>3줄</p>
                </li>
                <li>
                    <h4>프롤로그</h4>
                    <p>3줄</p>
                </li>
                <li>
                    <h4>프롤로그</h4>
                    <p>3줄</p>
                </li>
                <li>
                    <h4>프롤로그</h4>
                    <p>3줄</p>
                </li>
                <li>
                    <h4>프롤로그</h4>
                    <p>3줄</p>
                </li>
            </ul>
        </div>
    )
}
export default StorySelect
