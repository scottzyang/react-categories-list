import data from './data.json' // imports data.json


// Array of categories contained in the data
const allCategories = data.map(obj => obj.category)

// List of unique values

// Using a Set - an array with unique values
const categorieSet = new Set(allCategories)
//Make an array from a set
const categoriesUnique = Array.from(categorieSet)

// Make an Object with categories as keys and values are occurences
const categoriesWithCounts = data.reduce((obj, listing) => {
  const category = listing.category
  // check if cat exists as a key on obj
  if (obj.hasOwnProperty(category)) {
    obj[category]++;
  } else {
    obj[category] = 1;
  }
  return obj
}, {}) // !!! Be sure to define the initial value as an Object!


const namesAndCategories = categoriesUnique.map(name => ({
  name,
  count: categoriesWithCounts[name],
}));

export default data  // export the native JS array
export { allCategories, categoriesUnique, categoriesWithCounts, namesAndCategories }
