import clsx from 'clsx'
import style from './CharacterList.module.css'
export type CharacterListItemProps = {
    uid: string
    name: string
    onClick: (uid: string) => void
    imagePath?: string
    className?: string
}
const DEFAULT_THUMBNAIL_PATH = '/images/default_character_thumbnail.jpg'
function CharacterListItem({ className, name, uid, imagePath, onClick }: CharacterListItemProps) {
    const handleClick = () => onClick(uid)
    const imageURL = imagePath ?? DEFAULT_THUMBNAIL_PATH
    return (
        <span className={clsx(style.item, className)} onClick={handleClick}>
            <img src={imageURL} />
            <p>{name}</p>
        </span>
    )
}

export default CharacterListItem
