
import { v4 as uuidv4 } from 'uuid';

//seafood: anchovies, shrimp
//meat: bacon, ham, italian sausage, pepperoni
//veggie: jalapeño, mushroom, onion, olive, pineapple, spinach
//herbsAndSpices: basil
//cheese: feta, parmesan 

export const toppings = {
  anchovies: {
    id: uuidv4(),
    name: "Anchovies",
    image: "images/toppings/anchovies.png",
    toppingImage: "images/toppings/anchovies_topping.png",
    price: 1.75
  },
  bacon: {
    id: uuidv4(),
    name: "Bacon",
    image: "images/toppings/bacon.png",
    toppingImage: "images/toppings/bacon_topping.png",
    price: 1.00
  },
  basil: {
    id: uuidv4(),
    name: "Basil",
    image: "images/toppings/basil.png",
    toppingImage: "images/toppings/basil_topping.png",
    price: 0.5
  },
  feta: {
    id: uuidv4(),
    name: "Feta",
    image: "images/toppings/feta.png",
    toppingImage: "images/toppings/feta_topping.png",
    price: 0.75
  },
  ham: {
    id: uuidv4(),
    name: "Ham",
    image: "images/toppings/ham.png",
    toppingImage: "images/toppings/ham_topping.png",
    price: 0.75
  },
  italianSausage: {
    id: uuidv4(),
    name: "Italian Sausage",
    image: "images/toppings/italianSausage.png",
    toppingImage: "images/toppings/italianSausage_topping.png",
    price: 0.75
  },
  jalapenos: {
    id: uuidv4(),
    name: "Jalapeños",
    image: "images/toppings/jalapenos.png",
    toppingImage: "images/toppings/jalapenos_topping.png",
    price: 0.6
  },
  mushrooms: {
    id: uuidv4(),
    name: "Mushroom",
    image: "images/toppings/mushrooms.png",
    toppingImage: "images/toppings/mushrooms_topping.png",
    price: 0.6
  },
  olives: {
    id: uuidv4(),
    name: "Olives",
    image: "images/toppings/olives.png",
    toppingImage: "images/toppings/olives_topping.png",
    price: 0.6
  },
  onions: {
    id: uuidv4(),
    name: "Onions",
    image: "images/toppings/onions.png",
    toppingImage: "images/toppings/onions_topping.png",
    price: 0.6
  },
  parmesan: {
    id: uuidv4(),
    name: "Parmesan",
    image: "images/toppings/parmesan.png",
    toppingImage: "images/toppings/parmesan_topping.png",
    price: 0.5
  },
  pepperoni: {
    id: uuidv4(),
    name: "Pepperoni",
    image: "images/toppings/pepperoni.png",
    toppingImage: "images/toppings/pepperoni_topping.png",
    price: 0.75
  },
  pineapple: {
    id: uuidv4(),
    name: "Pineapple",
    image: "images/toppings/pineapple.png",
    toppingImage: "images/toppings/pineapple_topping.png",
    price: 0.6
  },
  shrimp: {
    id: uuidv4(),
    name: "Shrimp",
    image: "images/toppings/shrimp.png",
    toppingImage: "images/toppings/shrimp_topping.png",
    price: 1.25
  },
  spinach: {
    id: uuidv4(),
    name: "Spinach",
    image: "images/toppings/spinach.png",
    toppingImage: "images/toppings/spinach_topping.png",
    price: 0.4
  }
}

// export const pizzaSizes = [
//   {
//     id: uuidv4(),
//     name: "X-Large",
//     image: "/images/",
//     price: 15
//   },
//   {
//     id: uuidv4(),
//     name: "Large",
//     image: "/images/",
//     price: 12
//   },
//   {
//     id: uuidv4(),
//     name: "Medium",
//     image: "/images/",
//     price: 9
//   }
// ]