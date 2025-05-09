
import ToDoList from "./components/ToDoList.jsx"
import React,{useState} from 'react';
import Cars from "./components/Cars.jsx"
import May from "./components/May.jsx"
import Home from "./components/Home.jsx"
import Counter from "./components/Counter.jsx"
import Classcomp from "./components/Classcomp.jsx"
import Login from "./components/Login.jsx"
import To from "./components/To.jsx";
import ClickCounter from "./components/ClickCounter.jsx";
import Arrow from "./components/Arrow.jsx";
import ProductCard from "./components/ProductCard.jsx";
import AmazonProductCard from "./components/AmazonProductCard.jsx";
import UpdateText from "./components/UpdateText.jsx";
import MouseHover from "./components/MouseHover.jsx";
import FocusBlurExample from "./components/FocusBlurExample.jsx";
import Lifecycle from "./components/Lifecycle.jsx";
function App() {
  const [showComponent, setShowComponent] = useState(true);

  const toggleComponent = () => {
    setShowComponent(prev => !prev);
  };
// let cars = [
//   {
//       cID: 1, 
//       cName: 'Maruti Fronx', 
//      l desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
//       image: 'images/car1.jpg',
//       price: "7,51,000"
//   },
//   {
//       cID: 2, 
//       cName: 'Mahindra Scorpio N', 
//       desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
//       image: "images/car2.jpg",
//       price: "13,60,000"
//   },
//   {
//       cID: 3, 
//       cName: 'Maruti Fronx', 
//       desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
//       image: "images/car3.jpg",
//       price: "7,60,000"
//   },
//   {
//       cID: 4, 
//       cName: 'Mahindra Scorpio', 
//       desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
//       image: "images/car4.jpg",
//       price: "13,84,000"
//   },
//   {
//       cID: 5, 
//       cName: 'Hyundai Creta', 
//       desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
//       image: "images/car5.jpg",
//       price: "11,00,00"
//   },
//   {
//       cID: 6, 
//       cName: 'Maruti Grand Vitara', 
//       desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
//       image: "images/car5.jpg",
//       price: "10,80,00"
//   },
//   {
//       cID: 7, 
//       cName: 'Hyundai Exter', 
//       desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
//       image: "images/car5.jpg",
//       price: "6,13,000"
//   }
// ]
// let mayy=[
//   {
//     name:"meher",
//     place:"yfasf",
//     image:"images/car1.jpg"


//   },
//   {
//     name:"meher",
//     place:"yfasf",
//     image:"images/car2.jpg"

//   },
//   {
//     name:"meher",
//     place:"yfasf",
//     image:"images/car3.jpg"

//   }
// ]
// const [tasks,setTasks]=new useState("");
// const [todos,setTodos]=new useState([]);
// function handleChange(e){
//   setTasks(e.target.value);
// }
// function handleSubmit(e){
//   e.preventDefault();
//   console.log(tasks);
//   const updated=[...todos,tasks];
//   setTodos(updated);
//   setTasks("");
// }
// function deleteHandler(indexbval){
//   const newTodos=todos.filter((ele,idx)=>
//     indexbval!=idx
//   )
//   setTodos(newTodos);
// }
  return (
   
    <>
    {/* <ProductCard/>
    <AmazonProductCard/> */}
    {/* <UpdateText/> */}
    {/* <MouseHover/> */}
    {/* <FocusBlurExample/> */}
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={toggleComponent}>
        {showComponent ? 'Unmount Lifecycle' : 'Mount Lifecycle'}
      </button>

      {showComponent && <Lifecycle />}
    </div>

  
    
  

    
    </>
    
  );

}
export default App;
