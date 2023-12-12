import Image from "next/image"
import Link from "next/link"

const HeaderStart = () => {
  return (
    <div className="">
    <div className="  flex justify-around text-2xl py-5">
      {/* <Link href="/" className=" flex h-24 ">
      
        <Image src="/main-logo.png" width={80} height={60} alt='logo' priority />
        <p className=" text-center text-xl  pl-3 py-1.5">Асоціація органів <br/> самоорганізації населення <br/> м.Вінниці</p>
        </Link> */}
        <nav className="nav flex pt-7">
            <div className="w-80 ">
          <Link className="" href="/dashboard">Зайти до сайту</Link>
          </div>
          <Link href="/dashboard/contacts">Контакти</Link>
        </nav>
    </div>
    </div>
  )
}

export default HeaderStart