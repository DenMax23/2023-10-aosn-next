"use client";
import React from "react";
import Categories from "./Categories"


const DisclosureBlock = () => {
  const [categoryId, setCategoryId] = React.useState(0);

  return (
    <div className="">
      <Categories  value={categoryId}
        onClickCategory={(i) => setCategoryId(i)}/>
      {/* <ul className="">
           <li className=" mt-3 hover:text-orange-500 cursor-pointer">Інформація</li>
           <li className=" mt-3 hover:text-orange-500 cursor-pointer">Функції</li>
           <li className=" mt-3 hover:text-orange-500 cursor-pointer">Статут</li>
        </ul>
        <ul>
          <li className="hidden">Утворення органів самоорганізації населення:</li>
          <li className="hidden">Основною метою Асоціації є:</li>
          <li className="hidden">Статут Асоціації органів самоорганізації населення:</li>
        </ul> */}
    </div>
  )
}

export default DisclosureBlock