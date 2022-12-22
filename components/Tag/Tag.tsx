import {TagProps} from "./Tag.props";
import styles from './Tag.module.css';
import cn from 'classnames';

export const  Tag = ({size = 's', children, color = 'ghost', href, className, ...props}: TagProps): JSX.Element => {

    return <p className={cn(styles.tag, {
       [styles.s]: size == 's',
       [styles.m]: size == 'm',
        [styles.ghost]: color == 'ghost',
        [styles.red]: color == 'red',
        [styles.green]: color == 'green',
        [styles.gray]: color == 'gray',
        [styles.primary]: color == 'primary',
    })}
    {...props}
    >
        {
            href ? <a href={href}></a> : <></>
        }
        {children}
    </p>;
};