// Define the array of products
const products = [
  'Apple',
  'Banana',
  'Cherry',
  'Durian',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Jackfruit',
  'Kiwi'
];

// Display the product list
const productList = document.getElementById('product-list');
for (let i = 0; i < products.length; i++) {
  const product = products[i];
  const listItem = document.createElement('li');
  listItem.textContent = product;
  productList.appendChild(listItem);
}

// Search function
function searchProducts(query) {
  return products.filter(product => product.toLowerCase().includes(query.toLowerCase()));
}

// Handle search input
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();
  const filteredProducts = searchProducts(query);
  const filteredList = document.getElementById('filtered-list');
  filteredList.innerHTML = ''; // Clear previous results
  for (let i = 0; i < filteredProducts.length; i++) {
    const product = filteredProducts[i];
    const listItem = document.createElement('li');
    listItem.textContent = product;
    filteredList.appendChild(listItem);
  }
});
