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
       <ul className="grid gap-12 p-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
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
