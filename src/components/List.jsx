import React, { useState, useEffect } from 'react';
import { Product } from './Product';

export function List(){
    
    const [listProducts, setListProducts] = useState([])

    useEffect(() => {
        fetch('https://api.npoint.io/68bf5db20a3c236f68ed')
        .then((response)=>response.json())
        .then((data) => setListProducts(data))
    },[])
   
    
    return (
        <section className='row'>
        {listProducts.map((product) =>
        <div className='col-6'>
            <Product key={product.id} product={product} />
            </div>
        )}
        </section>
    );
    
    

    
}