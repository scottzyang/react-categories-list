import './App.css';
import { useState } from 'react';
import data from './data'
import CategoryButton from './categoryButton';
import Product from './product';
import CategoryList from './categoryList';

function App() {
  const [category, setCategory] = useState('All')

  const handleCategoryClick = (newCategory) => {
    setCategory(newCategory);
  }

  const categoryList = data.filter((item) => {
    return item.category === category || category === 'All'
  })

  return (
    <div className="App">
      <CategoryList currentCategory={category} handleCategoryClick={handleCategoryClick} />
        <ul className='item-list'>
          { categoryList.map((item) => (
            <Product item={item} />
          ))}
        </ul>
    </div>
  );
}

export default App;
