import { categoriesUnique } from "./data";
import CategoryButton from "./categoryButton";

function CategoryList({ currentCategory, handleCategoryClick, active}) {
  return(
    <div className="category-list">
      {categoriesUnique.map((category, index) => (
        <CategoryButton currentCategory={currentCategory} index={index} category={category} handleCategoryClick={handleCategoryClick} active={active}/>
      ))}
      <CategoryButton currentCategory={currentCategory} index={null} category={"All"} handleCategoryClick={handleCategoryClick}></CategoryButton>

  </div>
  )
}

export default CategoryList;
