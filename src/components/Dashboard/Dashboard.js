import BestSeller from "../BestSeller/BestSeller";
import "../BestSeller/BestSellerDashboard.css";

const Dashboard = () => {
  return (
    <>
      <BestSeller admin={true} />
    </>
  );
};

export default Dashboard;
