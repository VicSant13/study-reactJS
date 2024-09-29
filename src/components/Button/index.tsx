import { ReactNode } from "react";
import {FaRegThumbsUp} from 'react-icons/fa'
import styles from './Button.module.css'
import styled from 'styled-components'

/**
 * define el estilo como un elemento
 */
type BtnProps = {
  isLoading: boolean;
}
const Btn = styled.button<BtnProps>`
                          background-colord:${(props) => (props.isLoading ? 'gray' :'red')};
                          padding: 25px 30px;
                          `;

type Props = {
    children:ReactNode,
    isActive:Boolean,
    onSelect: ()=>void
}
/*const styles = {
  backgroundColor: 'red'
};*/

const Button = (props: Props) => {
  const {children,isActive,onSelect} = props
  const className = [
                      `btn btn-${isActive ? 'primary' : 'secondary'}`,
                      styles.button,
                    ].join(" ");
  return (
    <>
        <Btn
          
            type="button" 
            // multiple class className={[styles.button,styles.padded].join(' ')}
            // clasico className={ `btn btn-${isActive ? 'primary' : 'secondary'}` }
            className={className}
            onClick={onSelect}
            isLoading={isActive}
            ><FaRegThumbsUp color={'blue'}></FaRegThumbsUp>{children}</Btn>
    </>
  )
}
export default Button