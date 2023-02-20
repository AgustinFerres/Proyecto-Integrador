import React, { useEffect, useState } from 'react'
import Products from './Products'
import axios from 'axios'

const ProductsContainer = () => {

    const [products, setProducts] = useState();

    useEffect(() => {
        axios.get('products.json')
        .then(res => setProducts(res.data))
        .catch(err => console.log(err))
    },[])

    return <Products products={products} />
}

export default ProductsContainer