import { PropTypes } from './PropTypes';
import styles from './styles.module.scss';

export const Card = ({ children }: PropTypes) => {
    return <div className={styles['container']}>{children}</div>;
};

export default Card;
