import {z} from 'zod'
export const userSchema = z.object({
    name:z.string({required_error:'Nombre es Requerido'}).min(3,{message:'Longitud mínima de 3.'}),

    lastName:z.string({required_error:'Apellido es Requerido'}).min(3,{message:'Longitud mínima de 3.'})
})