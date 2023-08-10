import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SingleCryptid() {
  const params = useParams();

  console.log(params);

  const [data, setData] = useState(undefined);
  const nav = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/cryptids/${params.cryptidsId}`)
      .then((response) => response.json())
      .then((cryptids) => setData(cryptids));
  }, []);

  return (
    <>
      <div>
        {data !== undefined ? (
          <>
            <p>{data.name}</p>
            <img src={data.image} />
            <p>{data.description}</p>
          </>
        ) : null}
        <button onMouseEnter={() => nav("/cryptids")}>
          hover over me to leave
        </button>
      </div>
    </>
  );
}

export default SingleCryptid;
