import Link from 'next/link';

const SingleCategory = ({categorie}) => {
    const {id,name} = categorie
    return (
       
            <Link className='btn btn-outline btn-info mx-2' href={`/products?category_id=${id}`}>
            <h2>{name}</h2>
            </Link>
       
    );
};

export default SingleCategory;