import SideBar from "@/components/SideBar";

const Dashboard = ({ children }) => {
    return (
        <div>
            <SideBar/>
          { children }
        </div>
    );
};

export default Dashboard;