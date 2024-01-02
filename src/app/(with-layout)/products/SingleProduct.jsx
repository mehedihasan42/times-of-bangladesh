import Image from "next/image";
import Link from "next/link";

const SingleProduct = ({ product }) => {
  const {id,category,title,details,total_view} = product
  return (
       <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <p>{category}</p>
          <div className="card-actions justify-end">
            <p><small>{total_view}</small></p>
            <button className="btn btn-primary">
            <Link href={`products/${id}`}> {title}</Link>
            </button>
          </div>
        </div>
    </div>
  );
};

export default SingleProduct;
