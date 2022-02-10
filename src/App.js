import './App.css';
import AddressLookup from "./components/AdressLokup/AddressLookup";
import {Header} from "./components/Header/Header";
import {AddTenant} from "./components/AddTenant/AddTenant";
import {InfoHousing} from "./components/infoHousingStock/InfoHousing";
import {Api} from "./api/api";

function App() {
    // Api.getAdressStrit()
    return (
        <div className="App">

            <Header/>
            <AddressLookup/>
            <InfoHousing/>
            <AddTenant/>

        </div>
    );
}

export default App;
