import React from 'react'
import Footer from './footer'
import Header from './Header'
import MainContent from './MainContent'
import TodoItem from './TodoItem'
import ContactCard from "./ContactCard"

function App()
{
  return (
   

<div>
 <div className="contacts">
    <ContactCard 
    name="Mr. Whikerson"
    imgUrl="http://placeKitten.com/400/200"
    phone="212 555 2345"
    email="test@gmail.com"
    ></ContactCard>
    <ContactCard
    name="love"
    imgUrl="http://placeKitten.com/400/200"
    phone="212 555 2345"
    email="love@gmail.com"
    ></ContactCard>
    <ContactCard
    name="rohit"
    imgUrl="http://placeKitten.com/400/200"
    phone="212 555 2345"
    email="rohit@gmail.com"
    ></ContactCard>
    <ContactCard
    name="sandeepa"
    imgUrl="http://placeKitten.com/400/200"
    phone="212 555 2345"
    email="sandeepa@gmail.com"
    ></ContactCard>
    
    </div >
  <div className="todo-list">
    <Header></Header>
    <TodoItem></TodoItem>
    <TodoItem></TodoItem>
    <TodoItem></TodoItem>
    <MainContent></MainContent>
    <Footer></Footer>
  </div>
  </div>
  );
}

export default App