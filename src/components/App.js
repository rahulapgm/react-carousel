import React, {useState} from 'react';
import { Header } from './Header/Header';
import { Filter } from './Filter/Filter';
import Carousel from './Carousel/Carousel';

function App() {
  const [filterType, setFilterType] = useState('all')
  return (
    <React.Fragment>
      <Header />
      <Filter selectedOption={filterType} setSelectedOption={(e) => setFilterType(e.target.value)}/>
      <Carousel filterType={filterType}/>
    </React.Fragment>
  );
}

export default App;
