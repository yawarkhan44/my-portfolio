import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";
import "./Map.scss"


const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

const Map = () => {
  return (
    <ComposableMap className="composableMap"
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1600
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography={geoUrl}
        fill="#8636F1" //2C065D, #8636F1
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[8.6821, 50.1109]}
        dx={-30}
        dy={-120}
        connectorProps={{
          stroke: "#DA4EA2",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#DA4EA2">
          {"Frankfurt"}
        </text>
      </Annotation>
      
    </ComposableMap>
  );
};

export default Map;