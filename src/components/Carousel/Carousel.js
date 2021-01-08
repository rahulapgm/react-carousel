import React from 'react';

import CarouselSlideItem from './CarouselSlideItem/CarouselSlideItem';
import './Carousel.css';
import { testData } from '../../testData';


const Carousel = ({ filterType }) => {
  const [activeIdx, setActiveIdx] = React.useState(1);

  let items = testData;
  if(filterType !== 'all'){
    items = items.filter(item => item.productCategory.toLowerCase() === filterType);
  }

  const prevClick = () => {
    if(activeIdx > 0){
      setActiveIdx(activeIdx - 1)
    } else if(activeIdx === 0){
      setActiveIdx(items.length - 1)
    }
  };

  const nextClick = () => {
    if(activeIdx < items.length - 1){
      setActiveIdx(activeIdx + 1)
    } else if(activeIdx === items.length - 1 && items.length > 1){
      setActiveIdx(0)
    }
  }

  React.useEffect(() => {
    if(items.length > 1){
      setActiveIdx(1)
    } else {
      setActiveIdx(0)
    }
  },[filterType]);

  return (
    <div className="carouselWrap">
      <div className="carouselInner">
        <button
          className="carouselBtn carouselBtnPrev"
          onClick={() => prevClick()}
        >
          <i className="carouselBtnArrow carouselBtnArrowLeft" />
        </button>
        <div className="carouselContainer">
          <ul className="carouselSlideList">
            {items.map((product, i) => (
             <CarouselSlideItem
              key={i}
              position={i}
              product={product}
              activePos={activeIdx}
              setActiveIdx={setActiveIdx}
            />
            ))}
          </ul>
        </div>
        <button
          className="carouselBtn carouselBtnNext"
          onClick={() => nextClick()}
        >
          <i className="carouselBtnArrow carouselBtnArrowRight" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
