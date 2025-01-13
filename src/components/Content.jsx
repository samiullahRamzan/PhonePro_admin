import "../styles/content.css";
import Information from "./Information";

const Content = () => {
  // total regular user and shop user
  const shopUsers = localStorage.getItem("TotalShopUsers");
  const RegularUsers = localStorage.getItem("TotalRegularUsers");

  // get userAd and shop Ad details in local storage
  const shopAd = localStorage.getItem("shopAd");
  const userAd = localStorage.getItem("userAd");

  // total posts length
  const posts = localStorage.getItem("TotalPosts");

  return (
    <div className="dashboard_content">
      <h3>Dashboard</h3>
      <div className="dashboard-details">
        <Information heading={"Regular Users"} detail={RegularUsers} />
        <Information heading={"Shop Users"} detail={shopUsers} />
        <Information heading={"User Ad"} detail={userAd} />
        <Information heading={"Shop Ad"} detail={shopAd} />
        <Information heading={"Total Posts"} detail={posts} />
      </div>
    </div>
  );
};

export default Content;
