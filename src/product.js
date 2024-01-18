function Product({ item }) {
  return(
    <li className='item'>
      <p className="item-name">{item.name}</p>
      <p className='item-price'>{item.price}</p>
      <p className='item-category'>{item.category}</p>
    </li>
  )
}

export default Product;
