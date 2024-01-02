import Link from "next/link";
import NavLink from "./NavLink";

const navBar =[
    {
        path:'/',
        title:"Home"
    },
    {
        path:'/about',
        title:'About'
    },
    {
        path:'/profile',
        title:'Profile'
    },
    {
        path:'/blogs',
        title:'Blogs'
    },
    {
        path:'/dashboard',
        title:'Dashboard'
    }
]

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between container mx-auto">
            <h2 className="text-3xl font-semibold">Next Project</h2>
            <ul className="flex items-center justify-center">
                {
                    navBar.map(({path,title})=>(
                        <li className="mx-2" key={path}>
                            <NavLink exact={path==='/'} activeClassName="text-red-500" href={path}>{title}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default NavBar;