import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Zoom meeting',
        day: 'Dec 15th at 11:00 am',
        reminder:true,
    },

    {
        id: 2,
        text: 'Food Shopping',
        day:  'Dec 15th at 12:00 pm',
        reminder:false,
    },

    {
        id: 3,
        text: 'Assignment Submission',
        day:  'Dec 15th at 2:30 pm',
        reminder:false,
    },

 
]
   )
  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 
    10000) +1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id!==
    id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder: 
        !task.reminder} : task
        )
    )
  }

  return (
    <div className="container">
      <Header/>    
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder} 
        />
      ) : (
        'No Tasks to Show'
      )}
    </div>
  );
}

// class App extends React.Component{
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
