import HogTile from "./HogTile";
import Sort from "./Sort";
import Filter from "./Filter";
import React, { useState } from "react";

function HogTileList({hogInfo}) {
  const [isSelectedCat, setIsSelectedCat] = useState("All");
    console.log(isSelectedCat)
  function onCategoryChange(isSelectedCat) {
    setIsSelectedCat(isSelectedCat);
  }
  const hogsToDisplay = hogInfo.filter((hog) => {
    if (isSelectedCat === "All") return true;
    if (isSelectedCat === "true") return hog.greased
    if (isSelectedCat === "false") return !hog.greased
  });

  return (
    <div>
      <Filter 
      onCategoryChange={onCategoryChange} />
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
