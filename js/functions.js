function showProducts() {
    for (let i = 0; i < products.length; i++) {
      console.log(`#${i + 1} ${products[i].name} - $${products[i].price}`);
    }
  }
  
  function getNumericValue(maxValue, messageToUser){
    let value;
    do {
        value = parseInt(prompt(messageToUser));
    } while(value < 1 || value > maxValue || isNaN(value));  
    return value;
  }
  
  function calculatePrice(){
    return productToBuy.price * productAmount;
  }
  
  function showFinalPrice(price, isDiscountAvailable){
  if(isDiscountAvailable){
    console.log(`Congrats! You get discount. Your final price is ${price}`)
  } else{
    console.log(`The final price is ${price}`);
  }
  }
  
  function calculateDiscount(price){
  return price - price * discount;
  }