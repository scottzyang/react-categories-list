import { categoriesUnique } from "./data";
import CategoryButton from "./categoryButton";

function CategoryList({ handleCategoryClick, active}) {
  return(
    <div className="category-list">
      {categoriesUnique.map((category, index) => (
        <CategoryButton index={index} category={category} handleCategoryClick={handleCategoryClick} active={active}/>
      ))}
  </div>
  )
}

export default CategoryList;
