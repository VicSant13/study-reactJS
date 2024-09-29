import React from 'react'

type Product = {
  id:string,
  name:string
}
type Props = {
  products:Product[]
}

const index = ({products}: Props) => {
  return (
    <>
      <ul>
          {products.map((p)=>(<li key={p.id}>{p.name}-{p.id}</li>))}
      </ul>
    </>
  )
}

export default index