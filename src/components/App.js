import React from 'react';

import Tile from './common/Tile/Tile';
import './App.css';


const slideWidth = 30;

  const _items = [
    {
      player: {
        title: "Efren Reyes",
        desc:
          'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
        image: "https://i.postimg.cc/RhYnBf5m/er-slider.jpg"
      }
    },
    {
      player: {
        title: "Ronnie O'Sullivan",
        desc:
          "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
        image: "https://i.postimg.cc/qBGQNc37/ro-slider.jpg"
      }
    },
    {
      player: {
        title: "Shane Van Boening",
        desc:
          'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
        image: "https://i.postimg.cc/cHdMJQKG/svb-slider.jpg"
      }
    },
    {
      player: {
        title: "Mike Sigel",
        desc:
          'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
        image: "https://i.postimg.cc/C12h7nZn/ms-1.jpg"
      }
    },
    {
      player: {
        title: "Willie Mosconi",
        desc:
          'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
        image: "https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg"
      }
    },
    {
      player: {
        title: "Willie Mosconi",
        desc:
          'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
        image: "https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg"
      }
    },
    {
      player: {
        title: "Willie Mosconi1",
        desc:
          'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
        image: "https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg"
      }
    },
    {
      player: {
        title: "Willie Mosconi2",
        desc:
          'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
        image: "https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg"
      }
    },
  ];


function App() {
  return (
    <Carousel />
  );
}

export default App;


const length = _items.length;

const createItem = (position, activePos) => {
  let increment = position === 0 && activePos === length - 1;
  let decrement = position === length - 1 && activePos === 0;

  if(activePos === length - 2 && position === 0){
    const item = {
      styles: {
        transform: `translateX(${3*26}rem)`
      },
    };
    return item;
  }

  if(increment){
    const item = {
      styles: {
        transform: `translateX(${2*26}rem)`
      },
    };
    return item;
  }

  if(decrement){
    const item = {
      styles: {
        transform: `translateX(${0}rem)`
      },
    };
    return item;
  }
  const item = {
    styles: {
      transform: `translateX(${((position-activePos + 1) + increment)*26}rem)`
    },
  };
  return item;
};

const CarouselSlideItem = ({position, activePos }) => {
  const item = createItem(position, activePos);
  return (
    <li className="carousel__slide-item" style={item.styles}>
      <Tile number={position} isActive={activePos === position}/>
    </li>
  );
};


const Carousel = () => {
  const [activeIdx, setActiveIdx] = React.useState(1);

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
            {_items.map((pos, i) => (
             <CarouselSlideItem
              key={i}
              position={i}
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
