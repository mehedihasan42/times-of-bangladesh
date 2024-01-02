import getAllCategories from '@/utils/getAllCategories';
import React from 'react';
import SingleCategory from './singleCategory';

const Categories = async() => {
    const categories = await getAllCategories()
    return (
        <div className='flex lg:ml-24'>
            {
                categories.map(categorie=><SingleCategory categorie={categorie} key={categorie.id}/>)
            }
        </div>
    );
};

export default Categories;