import styles from './styles.module.scss';
import { PropTypes } from './PropTypes';

export const Card = ({ children }: PropTypes) => {
    return <div className={styles['background']}>{children}</div>;
};

export default Card;
