import style from './Modal.module.css'
import type { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

type ModalProps = {
    isOpen: boolean
    title?: string
    onClose?: () => void
    width?: React.CSSProperties['width']
    height?: React.CSSProperties['height']
    mainClassName?: string
}

function Modal({ isOpen, children, onClose, title, width, height, mainClassName }: PropsWithChildren<ModalProps>) {
    return (
        isOpen &&
        createPortal(
            <div
                className={style.modal}
                role="dialog"
                aria-modal="true"
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        onClose?.()
                    }
                }}
            >
                <div className={style.content} style={{ width, height }}>
                    {title && (
                        <header className={style.header}>
                            <h2>{title}</h2>
                        </header>
                    )}
                    <main className={mainClassName}>{children}</main>
                </div>
            </div>,
            document.body,
        )
    )
}
export default Modal
