import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HeaderLayout from "./layouts/HeaderLayout";
import Home from "./components/Home";
import Destination from "./components/Destination"
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import Moon from "./components/Moon";
import Mars from "./components/Mars";
import Europa from "./components/Europa";
import Titan from "./components/Titan";

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path="/" element={<HeaderLayout />}>
       <Route index element = {<Home /> } />
       <Route path="destination" element = {<Destination /> }>
            <Route index element = {<Moon /> } />
            <Route  path="moon" element = { <Moon /> } />
            <Route  path="mars" element ={<Mars />}/>
            <Route  path="europa" element = {<Europa />} />
            <Route  path="titan" element ={<Titan />}/>
      </Route>
       <Route path="crew" element = {<Crew /> } />
       <Route path="technology" element = {<Technology /> } />
    </Route>
  )
)

function App() {
  return (
    <div className="container">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
