import loadData from "@/utils/loadData";
import loadSingleBlogsData from "@/utils/loadSingleBlogsData";

export const generateMetadata = async({params})=>{
  const {id,title,body} = await loadSingleBlogsData(params.id)
  return{
      title: title
  }
}

export const generateStaticParams = async() =>{
  const blogs = await loadData()
  return blogs.map(({id})=>({
    id: id.toString()
  }))
}

const SinglePage = async({ params }) => {
  const {id,title,body} = await loadSingleBlogsData(params.id)
 
  return (
    <div key={id} className="border border-blue-400 py-2 my-2 mx-4">
          <h2 className="text-red-500 text-xl">{id}.  {title}</h2>
          <p>{body}</p> 
        </div>
  )
};

export default SinglePage;
