import logo from './logo.svg';
import './App.css';
import User from './User'
import Members from './Members'

function App(){
    function getData()
    {
        alert('hello from app')
    }
    return(
        <div className="App">
            <User data={getData} />
            <div>
                <Members data={getData} />
            </div>
        </div>
    );
}  

export default App;