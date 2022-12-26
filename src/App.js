import "./App.css";
import { Route, Routes } from "react-router-dom";
import Pokemon from "./Pokemon";
import HomePage from "./HomePage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <HomePage />
                        </>
                    }
                />
                <Route path="pokemon/:id" element={<Pokemon />} />
                <Route
                    path="*"
                    element={
                        <>
                            <h1>No Pokemon Found</h1>
                        </>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
