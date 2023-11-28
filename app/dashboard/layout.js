import Header from "../components/header";

 
export default function Layout({ children }) {
  return (
    <div className="">
      <Header/>
      
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}