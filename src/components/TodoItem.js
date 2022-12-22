import React, { useState} from "react";
const TodoItem=(props)=>{

    const[edit, setEdit] = useState(false)
    const[changeTask, setChangeTask] = useState('')


    //---------------------------------- call the API and delete the item from the list by the method DELETE----------------------------------------



    const HandleDelete =(e) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.value}`, {
          method: "DELETE",
        });
        e.target.parentElement.parentElement.remove()
      };


      //-------------------------------------------- calls the API to update by the PUT method----------------------------------------------------
      
      

    const HandleEdit = (e) => {
        if(!edit){
            setEdit(true)
        } else if(changeTask !== ''){
            fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.value}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: `${e.target.value}`,
                title:  `${changeTask}`,
                userId: 12,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => {console.log(json)
                alert(`task is updated: ${json.title} `)});
            setEdit(false)
            setChangeTask('')
        } else{
            alert("No task changed")
            setEdit(false)
            setChangeTask('')
        }
    }



// -----------------------------------------------------handle the change in the task------------------------------------------------------------




    const changeTodo =(e) =>{
        setChangeTask(e.target.value)
    }

    return(
        <div className="card">
            <div className={props.completed ? "completed" : "pending"}/>
            {edit ? <div className="taskInput" >


{/* {------------------------------add the input when the input bar clicked and showing the update btn----------------------------------------} */}
                <input 
                type="text" 
                placeholder={props.title} 
                onChange={changeTodo} 
                className="taskText"
                />
            </div>  : <div className="task">
                <span className="item-title"> 
                    <ul>
                        {props.title}
                    </ul>
                </span>
            </div>}
            
{/* {-----------------------------------------------------------update-btn----------------------------------------------------------------} */}




            <div className="action">   
                <button value={props.id} 
                onClick={HandleEdit} 
                className="update-btn">
                    Update
                </button> 
               

{/* {-----------------------------------------------------------Delete-btn------------------------------------------------------------------} */}

               
                <button value={props.id}  
                onClick={HandleDelete} 
                className="delete-btn">
                    Delete!
                </button>
            </div>
        </div>
        
    )
}

export default TodoItem