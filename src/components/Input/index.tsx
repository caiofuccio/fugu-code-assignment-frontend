import { PropTypes } from './PropTypes';
import styles from './styles.module.scss';

export const Input = ({ title, text, placeholder, onChange }: PropTypes) => {
    return (
        <div className={styles['container']}>
            <span>{title}</span>
            <textarea value={text} placeholder={placeholder} onChange={onChange} />
        </div>
    );
};

export default Input;
