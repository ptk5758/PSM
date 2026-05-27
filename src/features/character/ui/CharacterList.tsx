import clsx from 'clsx'
import style from './CharacterList.module.css'
import type { CharacterListItemProps } from './CharacterListItem'
import CharacterListItem from './CharacterListItem'
import { PlusIcon } from '@/shared/icon'
type CharacterListProps = {
    storyId: string
    className?: string
}

const SAMPLE_DATA: Pick<CharacterListItemProps, 'uid' | 'name' | 'className' | 'imagePath'>[] = [
    {
        uid: '1',
        name: '홍길동',
    },
    {
        uid: '2',
        name: '이순신',
    },
    {
        uid: '3',
        name: '송강',
    },
    {
        uid: '4',
        name: '노지심',
    },
]
function CharacterList({ storyId, className }: CharacterListProps) {
    const handleCharacterClick = (uid: string) => {
        console.log(uid)
    }
    return (
        <div className={clsx(style.character_list, className)}>
            {SAMPLE_DATA.map((item) => {
                return (
                    <CharacterListItem
                        uid={item.uid}
                        key={item.uid}
                        name={item.name}
                        imagePath={item.imagePath}
                        onClick={handleCharacterClick}
                    />
                )
            })}
            <span className={style.item}>
                <PlusIcon />
                <p>추가</p>
            </span>
            
        </div>
    )
}

export default CharacterList
