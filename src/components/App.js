import React, {useState} from 'react';

import Tile from './common/Tile/Tile';
import './App.css';
import { testData } from '../testData';
import { Header } from './Header/Header';
import { Filter } from './Filter/Filter';



function App() {

  const [filterType, setFilterType] = useState('all')
  return (
    <React.Fragment>
      <Header />
      <Filter selectedOption={filterType} setSelectedOption={setFilterType}/>
      <Carousel filterType={filterType}/>
    </React.Fragment>

  );
}

export default App;

const xFactor = 17;
let _items = testData;
const length = _items.length;

const createItem = (position, activePos) => {
  let increment = position === 0 && activePos === length - 1;
  let decrement = position === length - 1 && activePos === 0;

  if(activePos === length - 2 && position === 0){
    const item = {
      styles: {
        transform: `translateX(${3*xFactor}rem)`
      },
    };
    return item;
  }

  if(increment){
    const item = {
      styles: {
        transform: `translateX(${2*xFactor}rem)`
      },
    };
    return item;
  }

  if(decrement){
    const item = {
      styles: {
        transform: `translateX(${0.5}rem)`
      },
    };
    return item;
  }
  const item = {
    styles: {
      transform: `translateX(${((position-activePos + 1) + increment)*xFactor}rem)`
    },
  };
  return item;
};

const CarouselSlideItem = ({position, product, activePos }) => {
  const item = createItem(position, activePos);
  return (
    <li className="carousel__slide-item" style={item.styles}>
      <Tile number={position} isActive={activePos === position} product={product}/>
    </li>
  );
};


const Carousel = ({filterType}) => {
  const [activeIdx, setActiveIdx] = React.useState(1);

  let _items = testData;

  const prevClick = () => {
    if(activeIdx > 0){
      setActiveIdx(activeIdx - 1)
    } else if(activeIdx === 0){
      setActiveIdx(_items.length - 1)
    }
  };

  const nextClick = () => {
    if(activeIdx < _items.length - 1){
      setActiveIdx(activeIdx + 1)
    } else if(activeIdx === _items.length - 1){
      setActiveIdx(0)
    }
  }

  if(filterType !== 'all'){
    _items = _items.filter(item => item.productCategory.toLowerCase() === filterType);
  }


  return (
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <button
          className="carousel__btn carousel__btn--prev"
          onClick={() => prevClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--left" />
        </button>
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {_items.map((product, i) => (
             <CarouselSlideItem
              key={i}
              position={i}
              product={product}
              activePos={activeIdx}
            />
            ))}
          </ul>
        </div>
        <button
          className="carousel__btn carousel__btn--next"
          onClick={() => nextClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--right" />
        </button>
      </div>
    </div>
  );
};
