import React,{useState} from 'react'
function ToDoList(){
    const [tasks,setTasks]=useState(["eatbrekafats","walk dog"]);
    const [newTask,setNewTask]=useState("");
    function handleInputChange(e){
        setNewTask(e.target.value);
    }
    function addTask(){
        if(newTask.trim()!=""){
            setTasks(t=>[...t,newTask]);
        setNewTask("");

        }
        
    }
    function deleteTask(index){
        const updatedTasks=tasks.filter((ele,i)=>
            i!==index
        )
        setTask(updatedTasks);

    }
    return(<>
    <div className="to-do-list">
        <h1>TODOLIST</h1>
        <div>
            <input type="text" placeholder="enter"
            value={newTask} onChange={handleInputChange}
            />
            <button  onClick={addTask}>
                submit
                
               
            </button>
        </div>
    </div>
    <ol>
        {tasks.map((task,index)=>
            <li key={index}>
                <span className="text">{task}</span>
                <button className="del-btn" onClick={()=>deleteTask(index)}>Delete
                    
                </button>
               
            </li>
        )}
       
    </ol>

    </>)

}
export default ToDoList