function HogTileInfo({specialty, greased, weight, medal}) {
    return (
        <div>
        <ul>
            <li>Specialty: {specialty}</li>
            <li>Greased: {greased ? "Heck Yes They Are!" : "Heck Naw!"}</li>
            <li>Weight: {weight}</li>
            <li>Highest Medal Achieved: {medal}</li>
        </ul>
        </div>
    )
  }
  export default HogTileInfo