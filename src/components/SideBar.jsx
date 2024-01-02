import Link from "next/link";
import NavLink from "./NavLink";

const sideBar =[
    {
        path:'/dashboard',
        title: 'Dashboard'
    },
    {
        path: '/dashboard/add-product',
        title: 'Add Product'
    },
    {
        path:'/dashboard/manage-product',
        title: 'Manage Product'
    },
    {
        path:'/',
        title: 'Home'
    }
]

const SideBar = () => {
    return (
        <aside className="bg-black text-white font-semibold">
            <h2 className="text-2xl font-semibold">Dashboard</h2>
            <ul>
            {
                sideBar.map(({path,title})=>(
                    <li key={path}>
                        <NavLink exact={path==='/dashboard ' || '/'} activeClassName="text-red-500" href={path}>{title}</NavLink>
                    </li>
                ))
            }
            </ul>
        </aside>
    );
};

export default SideBar;