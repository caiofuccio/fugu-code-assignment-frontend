import { PropTypes } from './PropTypes';
import styles from './styles.module.scss';

export const Text = ({ label, text }: PropTypes) => {
    return (
        <div className={styles['container']}>
            <label>{label}</label>
            <p>{text}</p>
        </div>
    );
};

export default Text;
