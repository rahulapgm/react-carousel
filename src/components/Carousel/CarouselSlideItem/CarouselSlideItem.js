
import Tile from '../../Tile/Tile';
import './CarouselSlideItem.css';



const createItem = (position, activePos) => {
  let increment = 1;
  let xScale = 16;
  let xTranslate = (position-activePos + 1)*xScale;
  if(activePos === 0){
    increment = 0;
    xTranslate = (position-activePos)*xScale;
  }

  const item = {
    styles: {
      transform: `translateX(${xTranslate}rem)`
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
