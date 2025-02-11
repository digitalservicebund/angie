import React from "react";
import tokens from "@digitalservice4germany/style-dictionary/tokens.json";
import "../styles.css";

export default function ColorBlob({
  name,
  shade,
}: {
  name: string;
  shade?: string;
}) {
  const hex = shade ? tokens.color.base[name][shade] : tokens.color.base[name];
  return (
    <div className="colordefinitionbox">
      {name === "white" ? (
        <div
          style={{ backgroundColor: "black" }}
          className="colorshapebox mask1"
        >
          <div
            style={{ backgroundColor: hex, transform: "scale(0.95)" }}
            className="colorshapebox mask1"
          ></div>
        </div>
      ) : (
        <div
          style={{ backgroundColor: hex }}
          className="colorshapebox mask1"
        ></div>
      )}

      <span className="colorname">{shade ? `${name} ${shade}` : name}</span>
      <br />
      <span className="hexvalue">{hex.toUpperCase()}</span>
    </div>
  );
}
