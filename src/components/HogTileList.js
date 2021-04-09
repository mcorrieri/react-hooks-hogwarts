import HogTile from "./HogTile"
import Sort from "./Sort";
import Filter from "./Filter";


function HogTileList({ hogInfo }) {
  const hogArr = hogInfo.map((hog) => {
    return <HogTile 
        key={hog.name}
        name={hog.name} 
        image={hog.image}
        specialty={hog.specialty}
        greased={hog.greased}
        weight={hog.weight}
        medal={hog["highest medal achieved"]}
    />;
  });

  return (
    <div>
      <Filter />
      <Sort />
      <ul>{hogArr}</ul>
    </div>
  );
}
export default HogTileList;
