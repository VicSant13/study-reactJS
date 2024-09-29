import {IoIosSend} from 'react-icons/io'
import { FaCheckDouble  } from "react-icons/fa6";
//se importan los modulos de CSS
import styles from './Button2.module.css'

type Props = {
    sent: boolean;
    onClick: () => void;
}

const index = ({sent,onClick}: Props) => {
  return (
    <>
        <button
            onClick={onClick}
            className={[styles.buttonBase, sent ? styles.sentButton : styles.normalButton ].join(' ')}
        >{sent ? 'ENVIADO':'ENVIAR'}{sent ? <FaCheckDouble /> :  <IoIosSend/>}</button>
    </>
  )
}

export default index