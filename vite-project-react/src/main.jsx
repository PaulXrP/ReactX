import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//my custom
const createElement = (
  <a href='https://www.apple.com/in/' target='_blank'> Visit Apple India</a>
)

const anotherUser = "Jaan Chatterjee"

//through react
const reactElement = React.createElement(
  'a',

  {href : "https://www.apple.com/in/", target:'_blank'},
  'click me to visit Apple India!!!!',
  anotherUser


  //because 'anotherUser' will only give its final outcome bcz its an expression language
  //Evaluated Expression is where we inject our javascript variables

)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  reactElement
)
