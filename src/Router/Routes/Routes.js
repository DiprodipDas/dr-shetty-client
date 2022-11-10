import Main from "../../Layout/Main";
import AddReview from "../../Pages/AddReview/AddReview";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
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
         loader:({params})=> fetch(`https://service-review-assignment-server-mu.vercel.app/services/${params.id}`)
        },
        {
          path: '/addreview/:id',
          element: <AddReview></AddReview>,
          loader: ({params})=> fetch(`https://service-review-assignment-server-mu.vercel.app/services/${params.id}`)

        },
        {
          path:'/reviews',
          element:<Reviews></Reviews>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
    }
  ])

  export default router;