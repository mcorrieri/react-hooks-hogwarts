import Hog from "./Hog";
import Sort from "./Sort";
import Filter from "./Filter";

function HogList({ hogInfo }) {
  const hogArr = hogInfo.map((hog) => {
    console.log(hog);
    return <Hog name={hog.name} />;
  });

  return (
    <div>
      <div>{hogArr}</div>
      <Filter />
      <Sort />
      <Hog />
    </div>
  );
}
export default HogList;
