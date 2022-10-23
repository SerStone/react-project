import './App.css';
import themes from "./utils/thems";
import {useState} from "react";
import {Route,Routes} from "react-router-dom";
import {DetailsMoviePage, MainMoviePage, NotFoundPage} from "./pages";



function App() {
    const [theme, setTheme] = useState('');
    const handleChange = (selectedTheme) => {
        setTheme(themes[selectedTheme.value]);
    };
    const refCallback = (node) => {
        if (node) {
            theme &&
            Object.keys(theme).forEach((element) => {
                node.style.setProperty(element, theme[element], 'important');
                if (element === 'background-color' || element === 'background') {
                    document.body.style.background = theme[element];
                }
            });
        }
    };

  return (
    <div className="App" ref={refCallback}>
        <Routes>
            <Route >
                <Route index element={<MainMoviePage handleChange={handleChange}/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
                <Route path={'movie/:id'} element={<DetailsMoviePage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
