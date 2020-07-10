import React from 'react';
import Header from './Header';
import PotionControl from './PotionControl';


function App() {
  return (
    <React.Fragment>
      <div className="text-background">
        <Header />
        <PotionControl />
      </div>
    </React.Fragment>
  );
}

export default App;
