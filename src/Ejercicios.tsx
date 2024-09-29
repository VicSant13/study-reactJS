import { useState } from 'react'
import ProductDashboard from './components/ProductDashboard';
import ProductList from './components/ProductList';
import Button3 from './components/Button3';

type Props = {}

const Ejercicios = (props: Props) => {
    /*const [product,setProduct] = useState(
                                            {name:'Iphone',
                                            stock:25,
                                            address :{
                                                number:23,
                                                street:'Queen St.'
                                            }
                                            }
                                        );
    const handleClick = () => {
        //let newProduct = {...product,name:'Android',stock:45};
        //reemplaza la propiedad {number} del objeto address
        let newProduct = {...product,address:{...product.address,number:45}};
        setProduct(newProduct);
    };*/
    const [products,setProducts] = useState([
        {
            id:Math.random().toString(),
            name: 'Iphone'
        }
    ]);
    const addFinal = () =>{
        //agrega al final (equivale al push)
        /** agrega un elemento al final de un array */
       const newProduct = {id:Math.random().toString(),name:'OPPO'}
       const newProducts = [...products,newProduct]
       setProducts(newProducts)
        //agrega al comienzo
        /*const newProducts = [newProduct,...products]*/

        //modificar un producto dentro de un array
        /*const newProducts1 = products.map( (p) => 
            p.id == 1 ? {...p,name:'Windows'} : p
        );*/
        //eliminar un producto de un array
        /*const newProducts2 = products.filter((p)=> p.id != 1)
        setProducts(newProducts2)*/
    }
    const addComienzo = () =>{
        /** agrega un nuevo elemento al inicio de un array */
        const newProduct = {id:Math.random().toString(),name:'Android'}
        const newProducts = [newProduct,...products]
        setProducts(newProducts)
    }
    const removeItem=()=>{
        /** elimina el ultimo elemento de un array */
        const removedItem = products.slice(0,-1);
        setProducts(removedItem);
    }
    const cleanAll=()=>{
        setProducts([]);
    }

  return (
    <div>
        {/** solo necesitamos pasarle los datos que necesita el componente*/}
        <ProductDashboard amount={products.length}/>
        {/** actualiza =) */}
        <Button3 onClick={addComienzo}>Comienzo</Button3>
        <Button3 onClick={addFinal}>Final</Button3>
        <Button3 onClick={removeItem}>ELIMINAR</Button3>
        <Button3 onClick={cleanAll}>LIMPIAR LISTA</Button3>
        <ProductList products={products}/>
    </div>
  )
}

export default Ejercicios