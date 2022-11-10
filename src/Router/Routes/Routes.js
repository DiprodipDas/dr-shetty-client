import Main from "../../Layout/Main";
import AddReview from "../../Pages/AddReview/AddReview";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router= createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp> 
        },
        {
          path:'/service/:id',
          element: <ServiceDetails></ServiceDetails>,
         loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/addreview/:id',
          element: <AddReview></AddReview>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)

        }
      ]
    }
  ])

  export default router;