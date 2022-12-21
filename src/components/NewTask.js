import React, { useState} from "react";
const NewTask=(props)=>{

    const[newTask, setNewTask] = useState('')

    // calls the API with POST method as soon as "ADD" Button is clicked
    const AddNewTask = () => {
        if(newTask !== ''){
            fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title: `${newTask}`,
                completed: false,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => {console.log(json)
            alert(`Task ${json.title} Added`)});
        } else{
            alert("Add a task")
        }
        setNewTask('');
    }

// edits newTask as the input field is changed
    const handleNewTaskChange = (e) => {
        setNewTask(e.target.value);
    }
    return(

        <div className="newTask">
            <div className="newCard">
                {/* <div className="newTaskHead">
                <span> <strong>Add New Task</strong></span>
                </div> */}
                
                <div className="input">
                
                <input 
                type="text" 
                className="newInput" 
                placeholder="Add New Task" 
                onChange={handleNewTaskChange}
                />
                </div>


                <div className="btn-div">
                <button className="input-btn" onClick={AddNewTask}>Add  </button>
                </div>
                <div className="cpy">
                <span className="copy-right">Copyright-2022 all rights reserved by <a href="https://github.com/MathurJi0309" target="blank">🚩Mathur_Ji🚩</a></span>
                </div>
            </div>
            
        </div>
        
    )
}

export default NewTask