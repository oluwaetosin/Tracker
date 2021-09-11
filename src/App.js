import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from '../node_modules/react-router-dom';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
function App() {
  const [tasks, setTasks ] = useState([
    
  ]);
  useEffect(()=>{
    const getTasks = async ()=>{
      const taskFromServer =  await fetchTasks();
      setTasks(taskFromServer);
    }
    getTasks();
  }, []);

  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }
  const [showAddTask, setShowAddTask] = useState(false);
  const deleteTask = async (id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE'
    })
    setTasks(tasks.filter((task)=>{
       return task.id !== id;
    }));
  };

  const toggleReminder = async (id)=>{
    const updatedtask = tasks.find((task)=> task.id === id);
    updatedtask.reminder =  !updatedtask.reminder;
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      body: JSON.stringify(updatedtask),
      headers: {
        'Content-type': 'application/json'
      }
      
    });
    setTasks(tasks.map((task)=>(
      task.id === id ?
      {reminder: !task.reminder , ...task}
      : task
      )));
  }

  const addTask = async (task)=>{
     
      const id = Math.floor(Math.random() * 10000) + 1;
      const newTask =  {...task, id};
      await fetch(`http://localhost:5000/tasks`,{
      method: 'POST',
      body: JSON.stringify(newTask),
      headers: {
        'Content-type': 'application/json'
      }
      
    });
      setTasks([ ...tasks, newTask ]);
  }
  const toggleAddForm = ()=>{
    setShowAddTask(!showAddTask);
  }

  return (
     <Router>
       <div className="container">
             <Header showAdd={showAddTask} onShowAddToggle={toggleAddForm} />
       <Route path="/" exact render={(props)=>{
         return(
           <>
           {showAddTask && <AddTask onAdd={addTask} />}
             {tasks.length > 0 ? ( 
             <Tasks tasks={tasks} onDelete={deleteTask}
             onToggle={toggleReminder}
             />
             )
             :
             ('No Tasks to show')
            }
           </>
         )
       }}>
          </Route>
       
             
          
      
       <Route path="/about" component={About} />
       <Footer />
       </div> 
   </Router>
  
  );
}

export default App;
