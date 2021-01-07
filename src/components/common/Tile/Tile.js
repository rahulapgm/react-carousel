import './Tile.css';

const Tile = ({number, isActive,  product}) => {

  const { productName, productCategory, marketPrice, productImage } = product;
  return (
      <div className={isActive ? 'productTile activeProductTile': "productTile"}>
        <img className="productImage" src={productImage}  alt={productName}/>

        <div className="productInfo">
            <p className="productName">{productName}</p>
            <div className="flex-space-btw">
              <p className="productCategory">{productCategory}</p>
              <p className="productPrice">{marketPrice} R.s</p>
            </div>

        </div>
      </div>
  )
}

export default Tile;
