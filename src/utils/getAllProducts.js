const getAllProducts = async(category_id) => {
    let url = "http://localhost:5000/product";
    if(category_id){
        url+= '?category_id=' + category_id; 
    }
    const res = await fetch(url,{
        cache: "no-cache"
    })
    return res.json()
};

export default getAllProducts;