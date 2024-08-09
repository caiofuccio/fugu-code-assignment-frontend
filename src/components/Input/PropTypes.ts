import { ChangeEventHandler, ReactNode } from 'react';

export type PropTypes = {
    title: string;
    text: string;
    placeholder: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
};
