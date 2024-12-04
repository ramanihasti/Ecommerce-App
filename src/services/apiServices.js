export function getAllProduct(sortOrder) {
    const result = fetch(`https://fakestoreapi.com/products?sort=${sortOrder}`)
      .then((responce) => {
        console.log("All Product Responce" , responce);
        return responce.json();
      })
      .catch(() => {})
    console.log("All Product Result" , result);  
    return result;
    
}


export function getSingleProduct(id) {
    const result = fetch(`https://fakestoreapi.com/products/${id}`)
      .then((responce) => {
        console.log("Single Product Responce" , responce);
        return responce.json();
      })
      .catch(() => {})
    console.log("Single Product Result" , result);  
    return result;  
}

export function getAllCategories() {
  const result = fetch("https://fakestoreapi.com/products/categories")
    .then((responce) => {
      console.log("All Categories Responce" , responce);
      return responce.json();
    })
    .catch(() => {})
  console.log("All Categories Result" , result);  
  return result;
}

export function getSingleCategories(category) {
  const result = fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((responce) => {
      console.log("Single Categories Responce" , responce);
      return responce.json();
    })
    .catch((error) => {
      console.log("error" , error);
    })
  console.log("Single Categories Result" , result);  
  return result;
}