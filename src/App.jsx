//navigacijai naudosime useState komponente App.jsx

import { useState } from 'react';
import Dashboard from './components/Dashboard';
import TaskList from './tasks/TaskList';
import ShoppingApp from './shopping/ShoppingApp';
import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('dashboard');

    return (
        <>
            {currentPage === 'dashboard' ? (
                <Dashboard onOpenTask={setCurrentPage} />
            ) : (
                <>
                    <div className="back-navigation">
                        <button
                            type="button"
                            onClick={() => setCurrentPage('dashboard')}
                        >
                            ← Grįžti į pradžią
                        </button>
                    </div>

                    {currentPage === 'a' && <TaskList />}
                    {currentPage === 'b' && <ShoppingApp />}
                </>
            )}
        </>
    );
}

export default App;