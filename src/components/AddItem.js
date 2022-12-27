import React, { useState} from "react";
const AddItem=(props)=>{

    const[newTask, setNewTask] = useState('')

//---------------------------------------------add the task with the method post call with the API------------------------------------------------




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
                alert(`new task added`)
            alert(`Task ${json.title} Added`)});
            
        } else{
            alert("Add a task")
        }
        setNewTask('');
    }

// --------------------------------------------------handle the task change by inpute--------------------------------------------------------------

    const handleNewTaskChange = (e) => {
        setNewTask(e.target.value);
    }
    return(

        <div className="newTask">
            <div className="newCard">
                
                <div className="input">

{/* {----------------------------------------------input field for the task to be added-----------------------------------------------------------}*/}


                <input 
                type="text" 
                className="newInput" 
                placeholder="Add New Task" 
                value={newTask}
                onChange={handleNewTaskChange}
                />
                </div>

{/* {--------------------------------------------------btn to input -----------------------------------------------------------------------} */}


                <div className="btn-div">
                <button className="input-btn" onClick={AddNewTask}>Add  </button>
                </div>

{/* {----------------------------------------------------------copy right-----------------------------------------------------------} */}


                <div className="cpy">
                <span className="copy-right">Copyright-2022 all rights reserved by <a href="https://github.com/MathurJi0309" target="blank">🚩Mathur_Ji🚩</a></span>
                </div>
            </div>
            
        </div>
        
    )
}

export default AddItem