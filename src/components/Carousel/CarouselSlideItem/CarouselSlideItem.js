
import Tile from '../../Tile/Tile';
import './CarouselSlideItem.css';

const xFactor = 17;

const createItem = (position, activePos) => {
  const item = {
    styles: {
      transform: `translateX(${(position-activePos + 1)*xFactor}rem)`
    },
  };
  return item;
};


const CarouselSlideItem = ({product, position, activePos, setActiveIdx }) => {
  const item = createItem(position, activePos);
  return (
    <li className="carouselSlideItem" style={item.styles} onClick={() => setActiveIdx(position)}>
      <Tile number={position} isActive={activePos === position} product={product}/>
    </li>
  );
};



export default CarouselSlideItem;
