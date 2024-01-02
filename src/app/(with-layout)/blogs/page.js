// "use client";
import loadData from "@/utils/loadData";
import Link from "next/link";
import { useRouter } from "next/navigation";

// const blogs = [
//   {
//     id: 1,
//     year: 2016,
//     title: "title-1",
//   },
//   {
//     id: 2,
//     year: 2016,
//     title: "title-2",
//   },
//   {
//     id: 3,
//     year: 2016,
//     title: "title-3",
//   },
//   {
//     id: 4,
//     year: 2016,
//     title: "title-4",
//   },
// ];

const BlogsPage = async () => {
  // const router = useRouter()
  const blogs = await loadData()

  return (
    <div className="mx-auto">
      {blogs.map(({ id, body, title }) => (
        <div key={id} className="border border-blue-400 py-2 my-2 mx-auto">
          <h2 className="text-red-500 text-xl">{id}.  {title}</h2>
          <p>{body}</p>
          <Link className="block bg-slate-950 text-[#fff] w-36 mt-2 text-center py-2" href={`/blogs/${id}`}>
           <button> Details</button>
          </Link>   
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
