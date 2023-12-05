function Categories({ value, onClickCategory }) {
    const categories = ["Інформація", "Функції", "Статут"];
  
    const categoriesText = [
      "Утворення органів самоорганізації населення:",
      "Основною метою Асоціації є:",
      "Статут Асоціації органів самоорганізації населення:",
    ];
  
    return (
      <div className="categories flex text-xl  ">
        <ul className=" w-1/3">
          {categories.map((categoryName, i) => (
            <li
              key={i}
              onClick={() => onClickCategory(i)}
              className={value === i ? "active" : ""}
            >
              {categoryName}
            </li>
          ))}
        </ul>
        <ul className="ul-text ml-10 w-2/3 justify-items-start">
          {categoriesText.map((categoryText, i) => (
            <li
              key={i}
              onClick={() => onClickCategory(i)}
              className={value === i ? "active" : ""}
            >
              {categoryText}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Categories;