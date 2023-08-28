import React from 'react';
import styles from './MyInput.module.scss'

interface MyInputProps {
    placeholder?: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const MyInput: React.FC<MyInputProps> = ({ setValue ,...props }) => {
    return (
        <div className={styles.inputWrapper}>
            <img src="./icons/search.svg" alt="icon" className={styles.iconSearch}/>
            <input 
                type='text' 
                className={styles.input}
                {...props} 
            >
            </input>
            <img src="./icons/s1.svg" alt="icon" className={styles.s1} onClick={()=>setValue('')}/>
        </div>

    );
};

export default MyInput;