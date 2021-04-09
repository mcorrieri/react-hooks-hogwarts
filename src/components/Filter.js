function Filter({ onCategoryChange }) {

  function handleCategoryChange(event) {
    onCategoryChange(event.target.value);
  }
  
  return (
    <div className="filterWrapper">
      <select name="filter" onChange={handleCategoryChange}>
        <option value="All">Who's Greased?</option>
        <option value="true">Greased</option>
        <option value="false">Not Greased</option>
      </select>
    </div>
  );
}
export default Filter;
