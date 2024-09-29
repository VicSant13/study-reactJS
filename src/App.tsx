import Card,{CardBody} from './components/Card'
import List from './components/List'
import Button from './components/Button'
import { useState } from 'react';
import Alert from './components/Alert'
import Button2 from './components/Button2'

function App(){


  const [list,setList] = useState([ 'isai','santana'])

  const handleSelect = (elemento:string)=>{
    console.log(`imprimiendo ${elemento}`)
  }
  const contenido = list.length !== 0 && (<List data={list} onSelect={handleSelect}/>)
  const [isActive,setisActive] = useState(true)

  const handleAgregarMinions = () =>{
    setList([...list,'Minion'])
    setisActive(false)
  }
  const handleQuitarMinions = () =>{
    setList(list.slice(0,-1))
  }

   const [status,setStatus] = useState(true)
   const handleChangeNotificationMessage = () => {
      setStatus(!status)
   }

   const [sent,setSent] = useState(false)
   const handleChangeStatusSentButton = () => {
    setSent(!sent)
   }

  return (
    //jsx
    <>
    <Alert
      status={status}
      onClick={handleChangeNotificationMessage}
    >NOTIFICACIÓN</Alert>

    <Button2
      onClick={handleChangeStatusSentButton}
      sent={sent}
    ></Button2>

      {/*EJERCICIO DE MINIONS
      
      <Button
        onSelect={handleAgregarMinions}
        isActive={isActive}      
      >
        Agregar Minion
      </Button>

      <Button
        onSelect={handleQuitarMinions}
        isActive={isActive}      
      >
        Quitar Minion
      </Button>

      <Card>
        <CardBody title={'ZONA DE MINIONS'} text={''}></CardBody>
        {contenido}
      </Card>*/}

    </>
  )
}
export default App