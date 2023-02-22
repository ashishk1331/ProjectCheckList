import Header from './header.jsx';
import ListItem from './listitem.jsx';
import ToTop from './ToTop.jsx';
import Footer from './Footer.jsx';
import './App.css'
import data from './assets/data.json'; 
import { useState, useEffect, useRef } from 'react';

function getAllTasks(){
  return new Set(JSON.parse(localStorage.getItem('tasks')));
}

function saveTask(id){
  let tasks = getAllTasks();
  tasks.add(id)
  localStorage.setItem('tasks',JSON.stringify([...tasks]));
}

function removeTask(id){
  let tasks = getAllTasks();
  tasks.delete(id);
  localStorage.setItem('tasks',JSON.stringify([...tasks]));
}

(function setTaskStorage(){
  if(localStorage.getItem('tasks') === null)
    localStorage.setItem('tasks','[]');
})();

function App() {

  let [items, setItems] = useState(fetchData);

  function fetchData(){
    return data;
  }

  function changeItemState(id){
    let selectedItem = items.filter(item => item.id === id)[0];
    selectedItem.status = !selectedItem.status;
    if(selectedItem.status){
      setItems([...items.filter(item => item.id !== id), selectedItem]);
      saveTask(id);
    }
    else{
      setItems([selectedItem, ...items.filter(item => item.id !== id)]);
      removeTask(id);
    }
  }

  function scrollToTop(){
    window.scrollTo(0,0);
  }

  return (
    <>
      <Header />
       <ul className="grid gap-12 p-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 list-none" style={{
          'backgroundImage': 'radial-gradient(#000 1px, transparent 1px)',
          'backgroundSize': '24px 24px'
       }}>
       {
          items.map( item => {
            return ( 
              <ListItem key={item.id} {...{...item, status: getAllTasks().has(item.id)}} changeState={changeItemState} />
            )
          })
        }
      </ul>
      <ToTop scrollToTop={(scrollToTop)}/>
      <Footer />
    </>
  )
}

export default App


/*
   background-color: #e5e5f7;
  opacity: 0.8;
  background-image:  radial-gradient(#444cf7 0.5px, transparent 0.5px), radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
  background-size: 20px 20px;
  background-position: 0 0,10px 10px;
*/