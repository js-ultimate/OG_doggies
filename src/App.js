import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import BreedListAtEnter from "./components/BreedListAtEnter/BreedListAtEnter";
import DetailView from "./components/DetailView/DetailView";

function App() {
    const api_key = '9c8d9ed5-8334-4ab7-804f-9fec787a54be'

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BreedListAtEnter api_key={api_key}/>}/>
                <Route path="/details/:id" element={<DetailView api_key={api_key}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
