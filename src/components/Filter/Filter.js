import './Filter.css'

export const Filter = ({selectedOption, setSelectedOption}) => {
  return (
    <div className="filters">
      <h2>Filters</h2>

      <div className="categoryFilter">
        <h4>Category:</h4>
        <select className="categorySelect" value={selectedOption} onChange={setSelectedOption}>
          <option value="all">All</option>
          <option value="shirts">Shirts</option>
          <option value="tshirts">Tshirts</option>
          <option value="suits">Suits</option>
          <option value="sherwani">Sherwani</option>
        </select>
      </div>
    </div>
  )
}
