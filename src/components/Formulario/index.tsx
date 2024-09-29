import React, { FormEvent, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { userSchema } from '../../schemas/user'

type Props = {}

function index({}: Props) {

    const nameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)

     const [user,setUser]= useState({name:'',lastName:''})


    /*const handleSubmit = (e:FormEvent)=>{
        e.preventDefault();
        //?. is named OptionalShame
        const user = {
            name:nameRef.current?.value,
            lastName:nameRef.current?.value
        }
        console.log('submitted with ',user)  ;
    }*/
       //const handleSubmit = (e:FormEvent)=>{
            //e.preventDefault();
            //?. is named OptionalShame
            /*const user = {
                name:nameRef.current?.value,
                lastName:nameRef.current?.value
            }*/
          //  console.log('submitted with ',user)  ;
        //}
    const onSubmit = (data:Form) => {
        try{
            const x = userSchema.parse(data)
            console.log(x)
        }catch(e){
            console.log(e)
        }
        console.log(data)
    };
    type Form = {
        name:string,
        lastName:string
    }

    const {register,handleSubmit,formState:{errors}} = useForm<Form>();

  return (
    <>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input                     
                    type="text" 
                    id="name" 
                    className="form-control"
                    {...register('name')}                    
                />
                
            </div>
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input   
                    type="text" 
                    id="lastName" 
                    className="form-control"
                    {...register('lastName')}                     
                />
            </div>
            <button className="btn btn-primary">Enviar</button>
        </form>





        {/*REACT HOOK PURO
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input                     
                    type="text" 
                    id="name" 
                    className="form-control"
                    {...register('name',{minLength:{value:3,message:'El largo minimo es 3'}})}                    
                />
                {errors?.name && <p>{errors?.name?.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input   
                    type="text" 
                    id="lastName" 
                    className="form-control"
                    {...register('lastName')}                     
                />
            </div>
            <button className="btn btn-primary">Enviar</button>
        </form>*/}


    {/*
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>*/}
            {/**  FORMULARIO NO CONTROLADO
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input ref={nameRef} type="text" id="name" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input  ref={lastNameRef} type="text" id="lastName" className="form-control" />
            </div>
            <button className="btn btn-primary">Enviar</button>
        </form>*/}
        {/** FORMULARIO CONTROLADO 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                    value={user.name}
                    type="text" 
                    id="name" 
                    className="form-control"
                    onChange={e=>setUser({...user,name:e.target.value})}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input   
                    value={user.lastName}
                    type="text" 
                    id="lastName" 
                    className="form-control" 
                    onChange={e=>setUser({...user,lastName:e.target.value})}
                />
            </div>
            <button className="btn btn-primary">Enviar</button>
        </form>*/}

      </>
  )
}

export default index