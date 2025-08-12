import Navbar from "../../components/navBar/navBar";
import TripFeed from "../../components/TripFeed/TripFeed";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ marginTop: "20px" }}>
        <TripFeed />
      </div>
    </div>
  );
};

export default Home;
