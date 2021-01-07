import './Tile.css';

const Tile = ({number, isActive}) => {
  return (
      <div className="productTile">
        <img src="https://freepngimg.com/thumb/ladyfinger/42364-1-lady-finger-image-free-png-hq-thumb.png"  alt="productName"/>
        <h3>Carrot</h3>
        <h4>20 Rs</h4>
        <h5>Vegetables</h5>
      </div>
  )
}

export default Tile;
