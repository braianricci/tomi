import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import Header from './Header.jsx';
import Inventory from '../components/Inventory.jsx';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="App">
                <Header />
                <div className="container mt-4">
                    <Tabs defaultActiveKey="tab1" id="my-tabs">
                        <Tab eventKey="tab1" title="Tickets">
                            <p className="mt-3">This is content for Tab 1.</p>
                        </Tab>
                        <Tab eventKey="tab2" title="Inventario">
                            <Inventory />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default App;
