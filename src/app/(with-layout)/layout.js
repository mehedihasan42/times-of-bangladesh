import NavBar from "@/components/NavBar";
import Link from "next/link";

const layout = ({children}) => {
    return (
        <div>
            <NavBar/>
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default layout;