import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [date, setDate] = useState(null);
    useEffect(() => {
        async function getDate() {
            const res = await fetch('/api/date');
            const newDate = await res.text();
            setDate(newDate);
        }
        getDate();
    }, []);
    return (
        <main>
            <h1>Mirko Ricci</h1>
            <h2>Frontend Developer</h2>
        </main>
    );
}

export default App;
