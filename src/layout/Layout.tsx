import { ReactElement } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

interface IProps {
  children: ReactElement;
};


function Layout(props: IProps) {
  return (
    <div className="border-2 border-black">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;