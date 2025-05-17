import React from 'react'
import styles from './Input.module.scss'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  error?: string;
  className?: string;
}

const Input = (props: InputProps) => {
  return (
    <input className={`${styles.input} ${props.className}`} {...props}/>
  );
};

export default Input;