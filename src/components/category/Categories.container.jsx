import React, { useEffect, useState } from 'react'
import Categories from './Categories'
import axios from 'axios';

const CategoriesContainer = () => {

    const [categories, setCategories] = useState();

    useEffect(() => {
        axios.get('categories.json')
        .then(res => setCategories(res.data))
        .catch(err => console.log(err))
    },[])

    return <Categories categories={categories} />
}

export default CategoriesContainer