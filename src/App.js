import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

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
  
  return (
    <div className="container">
      <Header/>    
      <Tasks tasks={tasks}/>
    </div>
  );
}

// class App extends React.Component{
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
