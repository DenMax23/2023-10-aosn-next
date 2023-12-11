import Header from "../components/header";
import Footer from '../components/footer'



 
export default function Layout({ children }) {
  return (
    <div className="mx-auto px-5">
      <Header/>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}
      </div>
      <Footer />
    </div>
  );
}