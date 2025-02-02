// contains random faux-acronym and heart
import React from "react";

export default function Random() {
  const randomQualities = [
    "Thorough",
    "Proactive",
    "Concise",
    "Reliable",
    "Approachable",
    "Creative",
    "Resourceful",
    "Knowledgeable",
  ]
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

  return (
    <div
      id="random"
      style={{
        fontFamily: "Poppins",
        display: "flex",
        padding: "10px 2rem",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "14px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          id="heart"
          style={{
            fontSize: 20,
            paddingRight: 16,
            fontWeight: 600,
          }}
        >
          ❤
        </span>
        <span
          id="random-msg"
          style={{
            marginRight: "2rem",
            fontWeight: 100,
            letterSpacing: 0.21875,
          }}
        >
          Messy Hair • Tidy Code
        </span>
      </div>
      <div
        style={{
          fontWeight: 600,
        }}
      >
        {randomQualities.map((q, i) => {
          return i < 4 ? (
            <span style={{ marginLeft: 32 }} key={i}>
              {q}
            </span>
          ) : null;
        })}
      </div>
    </div>
  );
}
