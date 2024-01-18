function CategoryButton({ index, category, handleCategoryClick }) {
  return(
    <button className="category-button" key={index} onClick={() => handleCategoryClick(category)}>{category}</button>
  )
}

export default CategoryButton
