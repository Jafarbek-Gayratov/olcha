import "./Home.css";
import MainMain from "../../components/main/MainMain";
import Product from "../../components/product/Product";
//import BannerBottom from "../../components/banner/BannerBottom";
import BannerMain from "../../components/banner/BannerMain";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-wrapper">
          <BannerMain />
          <Product />
          <MainMain />
        </div>
      </div>
    </div>
  );
};

export default Home;
