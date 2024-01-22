function CategoryButton({ currentCategory, index, category, handleCategoryClick }) {
  const className = currentCategory === category ? "selected-button" : "category-button"
  return(
    <button className={className} key={index} onClick={() => handleCategoryClick(category)}>{category}</button>
  )
}

export default CategoryButton
