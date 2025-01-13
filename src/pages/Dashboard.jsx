import Content from "../components/content";
import Profile from "../components/Profile";

import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-main">
      <Content />
      <Profile />
    </div>
  );
};

export default Dashboard;
