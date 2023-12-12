import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-black text-white rounded-xl">
      <div className=" flex justify-around text-2xl py-7">
        <Link href="/" className=" flex h-24 mt-10 ">
          {/* <Image
            className=""
            src="/logo-yellow.svg"
            width={80}
            height={96}
            alt="logo"
            priority
          /> */}
          {/* <Image
            className="ml-2.5 mt-4"
            src="/logo-white.png"
            width={65}
            height={96}
            alt="logo"
            priority
          /> */}
          <p className=" text-center text-xl  pl-3 py-1.5">
            Асоціація органів <br /> самоорганізації населення <br /> м.Вінниці
          </p>
        </Link>
        <nav className=" flex flex-col">
          <Link href="/dashboard/contacts">
            Україна, 21050,
            <br />
            м. Вінниця, вул. Соборна, 59
            <br />
            тел. (0432) 59-51-84,
            <br />
            (0432) 59-51-84,
            <br />
            факс (0432) 59-53-49
          </Link>
          <Link className="mt-7" href="/dashboard/news">
            Зворотний зв’язок
          </Link>
        </nav>
        <div>
          <Link href="/dashboard">
            При використанні матеріалів
            <br /> посилання на сайт Асоціації
            <br /> ОСН м.Вінниці обов’язкове
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
