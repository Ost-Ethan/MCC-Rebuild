import {Route, Routes } from "react-router-dom"
import {Header} from "./components/Header"
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Employment from "./pages/Employment";


export default function App(){

    return(
        
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Landing/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/employment" element={<Employment/>}/>
                </Route>
            </Routes>
    );
}