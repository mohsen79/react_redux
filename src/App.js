import './App.css';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Theme from "./Components/Theme";
import {useSelector} from "react-redux";


function App() {
    const colorSelector = useSelector((state) => state.color.value);
    return (
        <div className="App" style={{background: colorSelector}}>
            <Login/>
            <Profile/>
            <Theme/>
        </div>
    );
}

export default App;
