import React from 'react';
import { PropTypes } from './PropTypes';
import styles from './styles.module.scss';

const Button = ({ onClick, title }: PropTypes) => {
    return (
        <button type="submit" className={styles['button']} onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;
