import { ReactNode } from "react";

/*
* Definición del objeto typeScript
 */
interface Props {
    children: ReactNode //ESTE TIPO PERMITE PASAR UN  COMPONENTE COMO HIJO
}
interface CardBodyProps{
    title: string,
    text?: string
}

export const Card = (Props:Props) => {
  const { children } = Props;
  return (
    <div className="card" style={{width:500}}>        
        <div className="card-body">
            {children}
        </div>
    </div>
  )
}
export function CardBody(props:CardBodyProps){
    const { title,text } = props;
    return (
        <>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>            
        </>
    )
}
export default Card;
