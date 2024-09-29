import React, { ReactNode } from 'react'
import styles from './Alert.module.css'

type Props = {
    children:ReactNode,
    status: boolean;
    onClick: () => void;
}

const index = ({children,status,onClick}: Props) => {
  return (
    <div 
        className={[styles.alert, status ? styles.alertPrimary : styles.alertSecondary].join(' ')}  
        onClick={onClick}
    >{children}</div>
  )
}

export default index