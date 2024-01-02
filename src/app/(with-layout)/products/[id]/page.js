import getSingleProduct from "@/utils/getSingleProduct";

const SingleProductPage = async({params}) => {
    const product = await getSingleProduct(params.id)
    const {category,title,details,total_view} = product
    return (
        <div className="card card-compact w-3/4 mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <p>{category}</p>
          <div className="card-actions justify-end">
            <p><small>{total_view}</small></p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default SingleProductPage;