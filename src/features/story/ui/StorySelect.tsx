// TODO : PK key 기반 Select 조회
import clsx from 'clsx'
import style from './StorySelect.module.css'
import { StoryCard, type StoryCardItem } from '@/entities/story'
import { useState } from 'react'

type StorySelectProps = {
    className?: string
}

const SAMPLE_DATA: StoryCardItem[] = [
    {
        storyId: '550e8400-e29b-41d4-a716-446655440000',
        subject: 'React Native 위치 기반 메모 앱',
        description: 'GPS 기반으로 특정 위치에서 알림을 제공하는 메모 애플리케이션',
    },
    {
        storyId: '6f1a7b20-9c3d-4b4e-8f2a-12d93f9c1001',
        subject: 'VS Code Color Namer 확장 프로그램',
        description: 'HEX 및 RGB 색상 코드의 이름을 알려주는 VS Code Extension',
    },
    {
        storyId: '91c5d7f4-7c3a-4d4b-b7b0-6e9c8cfa2202',
        subject: 'FSD 아키텍처 학습',
        description: 'Feature-Sliced Design 구조와 계층 분리에 대한 실험 프로젝트',
    },
    {
        storyId: 'c4b1f3a1-0d8a-47d9-9d90-77ac3a5e3303',
        subject: 'Express MVC 백엔드',
        description: 'TypeScript 기반 service/repository 패턴을 적용한 서버',
    },

    {
        storyId: 'a8e3c2f9-61d5-4f0c-93f8-99de5ef15505',
        subject: '설명 없는 카드 예시',
    },
    {
        storyId: 'f2d9b8c7-5a14-4c1d-a2d3-889bc4df4404',
        subject: '라벨 프린트 생성기',
        description: 'QR 코드와 장비 정보를 포함한 라벨 이미지를 생성하는 도구',
    },
]
function StorySelect({ className }: StorySelectProps) {

    // TODO 전역 스토어
    // 편집기 쪽으로 이동 시켜야함 선택한 상태를
    const [selected, setSelected] = useState<string>()
    const handleClick = (storyId: string) => setSelected(storyId)

    return (
        <div className={clsx(style.story_select, className)}>
            <span>빈 공간 입니다</span>
            <ul>
                {SAMPLE_DATA.map(({ storyId, subject, description }) => {
                    return (
                        <StoryCard
                            key={storyId}
                            storyId={storyId}
                            subject={subject}
                            description={description}
                            onClick={handleClick}
                            isSelected={selected === storyId}
                        />
                    )
                })}
            </ul>
        </div>
    )
}
export default StorySelect
