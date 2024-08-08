import { PropTypes } from './PropTypes';
import styles from './styles.module.scss';

export const Input = ({ title, text, placeholder, onChange }: PropTypes) => {
    return (
        <div className={styles['input']}>
            <span>{title}</span>
            <input type="text" value={text} placeholder={placeholder} onChange={onChange} />
        </div>
    );
};

export default Input;
