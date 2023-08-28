import React from 'react';
import styles from './Modal.module.css'

interface ModalProps {
    visible:boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
    children: any
}

const Modal: React.FC<ModalProps> = ({ visible, setVisible, children }) => {

    const rootStyle = [styles.main]
    const rootStyleContent = [styles.content]
    if ( visible ) {
        rootStyle.push(styles.mainActive)
        rootStyleContent.push(styles.contentActive)
    }

    return (
        <div className={rootStyle.join(' ')} onClick={()=>setVisible(false)}>
            <div className={rootStyleContent.join(' ')} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;