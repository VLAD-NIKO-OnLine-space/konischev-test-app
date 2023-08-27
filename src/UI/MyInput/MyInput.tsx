import React from 'react';
import styles from './MyInput.module.scss'

interface MyInputProps {
    placeholder?: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string
}

const MyInput: React.FC<MyInputProps> = ({ ...props }) => {

    return (
        <div className={styles.inputWrapper}>
            <img src="./icons/loupe.svg" alt="icon" className={styles.iconSearch}/>

            <input 
                type='text' 
                className={styles.input}
                {...props} 
            >
            </input>
        </div>

    );
};

export default MyInput;