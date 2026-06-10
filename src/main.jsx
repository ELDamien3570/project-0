import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const shoppingList = [
  {
    name: 'Milk',
    price: 1.99,
    image: "/Images/Milk.jpg"
  },
  {
    name: 'Bread',
    price: 2.49,
    image: "/Images/Bread.jpg"
  },
  {
    name: 'Eggs',
    price: 3.99,  
    image: "/Images/Eggs.jpg"
  },
  {
    name: 'Cheese',
    price: 4.99,
    image: "/Images/Cheese.jpg"
  },
  {
    name: 'Apples',
    price: 0.99,
    image: "/Images/Apples.jpg"
  },
  {
    name: 'Bananas',
    price: 0.59,
    image: "/Images/Bananas.jpg"  
  }
]

function ShoppingContainer() {

  return (
    <article className="shopping-container">
        {
          shoppingList.map((item, index) => {
            return <ShoppingItem key={index} name={item.name} price={item.price} image={item.image}/>
          })
        }
    </article>
  )

}

function ShoppingItem(props) {
  function handleClick() {

    const input = window.prompt("Enter your credit card number: ");
    const isNumber = !isNaN(Number(input));
    if (input.length === 16 && isNumber) {
      window.alert(`Purchase successful! You bought ${props.name} for $${props.price}.`);
    }
    else {
      window.alert("Invalid credit card number. Please try again.");
    }
    
  }

  return (
    <button className="shopping-item" onClick={handleClick}>
      <h2>{props.name}</h2>
      <h3>${props.price}</h3>
      <img src={props.image} alt={props.name} />
    </button>
  )
}

function Header() {

  return (
    <header className="header">
      <h1>Shopping Site</h1>
      <h2>Click an item to purchase it!</h2>
    </header>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <ShoppingContainer />
  </StrictMode>,
)
