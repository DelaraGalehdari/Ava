import Navbar from "./Navbar";
import Learn from "./Learn";
import Info from "./Info";
import Login from "./Login";
import Footer from "./Footer";
import { Carousel } from "./Carousel ";

const Home = ({ contentData, isLoading }) => {
  return (
    <>
      <Navbar />
      <Carousel contentData={contentData} isLoading={isLoading} />
      <Learn />
      <Login />
      <Info />
      <Footer />
    </>
  );
};

export default Home;
