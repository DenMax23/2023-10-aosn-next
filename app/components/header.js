import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (

    <div className="  flex justify-around text-2xl py-5 border-zinc-300 border-2 rounded-b-lg">
      <Link href="/" className=" flex h-24 ">
        <Image src="/main-logo.png" width={80} height={60} alt='logo' priority />
        <p className=" text-center text-xl  pl-3 py-1.5">Асоціація органів <br/> самоорганізації населення <br/> м.Вінниці</p>
        </Link>
        <nav className="nav flex ">
          <Link href="/dashboard">Головна сторінка</Link>
          <Link href="/dashboard/news">Новини</Link>
          <Link href="/dashboard/events">Події</Link>
          <Link className="qw" href="/dashboard/quarterly">Квартальні комітети та комітети мікрорайонів</Link>
          <Link href="/dashboard/contacts">Контакти</Link>
        </nav>
    </div>
  
  )
}

export default Header
