import React from 'react'

type Props = {
  amount:number
}

const index = ({amount}: Props) => {
  return (
    <div>EL TOTAL DE PRODUCTOS ES : {amount}</div>
  )
}

export default index