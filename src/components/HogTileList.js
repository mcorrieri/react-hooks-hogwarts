import HogTile from "./HogTile";
import Sort from "./Sort";
import Filter from "./Filter";
import React, { useState } from "react";

function HogTileList({ hogInfo }) {
  const [isSelectedCat, setIsSelectedCat] = useState("All");

  function onCategoryChange(isSelectedCat) {
    setIsSelectedCat(isSelectedCat);
  }
  const hogsToDisplay = hogInfo.filter((hog) => {
    console.log(hog.greased);
    if (isSelectedCat === "All") return true;

    return hog.greased === isSelectedCat;
  });

  return (
    <div>
      <Filter onCategoryChange={onCategoryChange} />
      <Sort />
      <ul>
        {hogsToDisplay.map((hog) => (
          <HogTile
            key={hog.name}
            name={hog.name}
            image={hog.image}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            medal={hog["highest medal achieved"]}
          />
        ))}
      </ul>
    </div>
  );
}
export default HogTileList;
