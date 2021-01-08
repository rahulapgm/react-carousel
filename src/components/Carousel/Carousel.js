import React from 'react';

import CarouselSlideItem from './CarouselSlideItem/CarouselSlideItem';
import './Carousel.css';
import { testData } from '../../testData';
import { isMobileDevice } from '../../utils';

const incrementBy = isMobileDevice ? 1 : 2;

const Carousel = ({ filterType }) => {
  const [activeIdx, setActiveIdx] = React.useState(0);

  let items = testData;
  if(filterType !== 'all'){
    items = items.filter(item => item.productCategory.toLowerCase() === filterType);
  }
  let length = items.length;

  React.useEffect(() => {
    if(length > 1){
      setActiveIdx(1)
    } else {
      setActiveIdx(0)
    }
  },[filterType, length]);

  const prevClick = () => {
    if(activeIdx > 1){
      setActiveIdx(activeIdx - incrementBy)
    } else if(activeIdx <= 1){
      setActiveIdx(items.length - incrementBy)
    }
  };

  const nextClick = () => {
    if(activeIdx < items.length - incrementBy){
      setActiveIdx(activeIdx + incrementBy)
    } else if(activeIdx >= items.length - incrementBy){
      setActiveIdx(items.length > 1 && incrementBy !== 1 ? 1 : 0)
    }
  }

  return (
    <div className="carouselWrap">
      <div className="flex carouselInner">
          <button
            className="carouselBtn carouselBtnPrev"
            onClick={() => prevClick()}
          >
            <i className="carouselBtnArrow carouselBtnArrowLeft" />
          </button>
          <div className="flex carouselContainer">
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
