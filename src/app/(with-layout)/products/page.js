import getAllProducts from "@/utils/getAllProducts";
import SingleProduct from "./SingleProduct";
import getAllCategories from "@/utils/getAllCategories";

const ProductPage = async({searchParams}) => {
    const categories = await getAllCategories();
    const productss = await getAllProducts(searchParams.category_id)
    return (
        <div>
            <h2>Products</h2>
            <div className="grid grid-cols-3 space-x-1">
            {
                productss.map((product)=>
                   ( <SingleProduct product={product} key={product.id}/>)
                )
            }
            </div>
        </div>
    );
};

export default ProductPage;