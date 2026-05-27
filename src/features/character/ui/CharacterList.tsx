import clsx from 'clsx'
import style from './CharacterList.module.css'
type CharacterListProps = {
    storyId: string
    className?: string
}
function CharacterList({ storyId, className }: CharacterListProps) {
    return <div className={clsx(style.character_list, className)}>Character List</div>
}
export default CharacterList
