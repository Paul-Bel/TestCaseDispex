import './App.css';
import AddressLookup from "./components/AdressLokup/CuntainerComponent";
import {Header} from "./components/Header/Header";

let link = document.querySelector('link[rel="shortcut icon"]') ||
    document.querySelector('link[rel="icon"]');

if (!link) {
    link = document.createElement('link');
    link.id = 'favicon';
    link.rel = 'shortcut icon';
    document.head.appendChild(link);
}
let url = "https://static.tildacdn.com/tild3463-3930-4035-a336-666333313763/photo.svg"
link.href = `/assets/images/${url}/favicon.ico`;

function App() {
    return (
        <div className={"App"}>
            <Header/>
            <AddressLookup/>
        </div>
    );
}
export default App;
