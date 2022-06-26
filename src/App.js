import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    },
  ]);

  const [showAddTask, setShowAddTask] = useState(false);

  // DELETE TASK
  const deleteTask = (deletedTaskId) => {
    // console.log("delete Task", deletedTaskId);
    setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  };

  // ADD TASK
  const addTask = (newTask) => {
    const id = Math.floor(Math.random() * 1000 + 1);
    const addNewTask = { id, ...newTask };
    setTasks([...tasks, addNewTask]);
  };

  // TOGGLE DONE
  const toggleDone = (toggleDoneId) => {
    // console.log("double click", toggleDoneId);
    setTasks(
      tasks.map((task) =>
        task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  // TOGGLESHOW
  const toggleShow = () => setShowAddTask(!showAddTask);

  return (
    <div className="container">
      <Header
        title="TASK TRACKER"
        showAddTask={showAddTask}
        toggleShow={toggleShow}
      />

      {showAddTask && <AddTask addTask={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} />
      ) : (
        <h2 style={{ textAlign: "center" }}>NO TASK TO SHOW</h2>
      )}
    </div>
  );
}

export default App;

/* Ana data’nin bulundugu array’i  App.js’te belirlememizin ve veri ekleme, silme islemlerini burda yapmamizin sebebi => addTask ve Tasks componentinin ilk ortak parant divi olmasidir.
1) kullanicidan verilerimizi addTask componentinde alicaz, bunu lifting up yöntemi ile yani belirttigim gibi ilk parent componentte yazdigimiz fonksiyonlara argument olarak vericez(bu fonksiyonlari props olarak addTask’a yollayacagiz). böylelikle kullanicinin girdigi veriyi ilk ortak parent component olan App.js’e kadar bu fonsiyonun icerisinde getirmis olacagiz
(lifting up => veriyi yukari tasima, üst componente)
2) sonra bu verilerle burda tasks data array’ini güncelleyeceziz.
3) Sonra bu düzenlenmis datalari(burda task arrayi),  Tasks componentine props ile yollayacagiz ve burda ekrana basacagiz..
(props ile, assagi yollayacagiz)
React bundan ibaret, bu mantigi kavrarsaniz cok rahat edeceksiniz. */