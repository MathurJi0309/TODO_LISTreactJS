import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import AddItem from "./components/AddItem";
import TodoItem from "./components/TodoItem";


function App() {

  const [items, setitems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  //------------------------------------------------add the item in the above define array------------------------------------------------------
 
 
 
 
useEffect(() => {
  
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then((json) => setitems(json),
                    console.log(items)
                    )
                    setLoading(false);
                    
  },[])

  

  // if(loading){
  //   return <Loader/>;
  // }



  //---------------------------------------------return component APp-----------------------------------------------------------------------
  
  return (
    <div className="App">


      {/*------------------------------------------------------ wallpaper means background --------------------------------------*/}


      <img className="wallpaper" src="https://media.istockphoto.com/id/1092571024/photo/to-do-list-in-notebook-with-calendar.jpg?s=612x612&w=0&k=20&c=NkAHcfu8uAMhAGu5vtXRrgwcW5rP6s9ynU3wiXC-hXc="></img>
      <AddItem/>



      <div className="main-card">
      {
        loading ? <Loader/> :
        items.map((item) => ( 
          <TodoItem 
          
            key={item.id}
            title={item.title} 
            completed = {item.completed}
            id={item.id}
          />
        
        ))
        } 
      </div>
      
    </div>
  );
}

export default App;

