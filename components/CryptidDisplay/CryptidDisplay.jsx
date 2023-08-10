import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CryptidDisplay() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch("http://localhost:3000/cryptids")
      .then((response) => response.json())
      .then((cryptids) => setData(cryptids));
  }, []);

  return (
    <div>
      {data !== undefined
        ? data.map((cryptid) => {
            return (
              <Link to={`/cryptids/${cryptid.id}`}>
                <p>{cryptid.name}</p>
                <img src={cryptid.image} alt="" />
              </Link>
            );
          })
        : null}
    </div>
  );
}

export default CryptidDisplay;
