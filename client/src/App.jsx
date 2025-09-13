import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import { Toaster } from "react-hot-toast"
import HomePage from "./Pages/HomePage"


function App() {
  
  return (
    <>
      <Toaster 
      position="bottom-left"/>

      <Routes >
        <Route element={<Layout />}>
          <Route index element={<HomePage />}/>
        </Route>
      </Routes> 
    </>
  )
}

export default App
