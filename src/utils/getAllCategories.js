
const getAllCategories = async() => {
   const res = await fetch("http://localhost:5000/category")
  //  const res = await fetch("http://localhost:5000/category",{
  //    next: {
  //     revalidate: 10
  //    }
  //  })
   return res.json()
};

export default getAllCategories;