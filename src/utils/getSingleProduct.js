import wait from "./wait";

const getSingleProduct = async(id) => {
   
    const res = await fetch(`http://localhost:5000/product/${id}`,{
        cache:"no-cache"
      })
      return res.json()
};

export default getSingleProduct;