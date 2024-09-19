import './App.css';
import { Button } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';

function App() {
  const btnHandle = () => {
    toast.success("Done",{
      position: "top-center",
    });
  };

  return (
    <div>
      <ToastContainer/>
      <Home/>
      <AllCourses/>
      <AddCourse/>
    </div>
  );
}

export default App;
