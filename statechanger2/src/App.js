import React from 'react';
import Counter from './Counter';

const App = () => {
    return(<div>
        <h1>CLick me: App</h1>
        <Counter title="First message" />
        <Counter title="Second Clicker" />
        <Counter title="Third Clicker" />
    </div>)
}

export default App;