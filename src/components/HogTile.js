import {useState} from "react"
import HogTileInfo from "./HogTileInfo"

function HogTile({name, image, specialty, greased, weight, medal}) {

const [isTileInfo, setIsTileInfo] = useState(false)

function click() {
    setIsTileInfo(!isTileInfo)
    }

    return (
        <div className="pigTile" onClick={click} >
            <li>{name}</li>
            <img src={image} alt={name} className="minPigTile"></img>
            {isTileInfo ? <HogTileInfo specialty={specialty} greased={greased} weight={weight} medal={medal}/> : null}
        </div> 
    )
  }

  export default HogTile;
