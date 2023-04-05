import Header from './header.jsx';
import ListItem from './listitem.jsx';
import ToTop from './ToTop.jsx';
import Footer from './Footer.jsx';
import Stats from './Stats'
import './App.css'
import data from './assets/data.json'; 
import { useState, useEffect, useRef } from 'react';
import { getPage } from './util/notion'

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

export default function App() {

  let [items, setItems] = useState(fetchData);

  function fetchData(){
    let prev = getAllTasks()
    for(let i=0; i<data; i++){
        console.log(data[i])
      if(prev.has(data[i].id)){
        let p = !data[i].status
        data[i].status = p
      }
    }

    return data;
  }

  function changeItemState(id){

    console.log(id)

    let currentStatus;
    for(let i=0; i<items.length; i++){
      if(items[i].id === id){
        items[i].status = !items[i].status
        currentStatus = items[i].status
        break
      }
    }

    if(currentStatus){
      saveTask(id);
    }
    else{
      removeTask(id);
    }
    setItems([...items])
  }

  function scrollToTop(){
    window.scrollTo(0,0);
  }

  useEffect(() => {
    getPage()
  }, [])

  return (
    <>
      <Header/>
      {/*<Stats items={items} />*/}
       <ul className="grid gap-12 p-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 list-none">
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