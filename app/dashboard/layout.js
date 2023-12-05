import Footer from "../components/footer";
import Header from "../components/header";

 
export default function Layout({ children }) {
  return (
    <div className="mx-auto px-5">
      <Header/>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}