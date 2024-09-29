import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode,
    onClick:()=>void
}

function index({children,onClick}: Props) {
  return (
    <>
        <button
            onClick={onClick}
        >
            {children}
        </button>
    </>
  )
}

export default index