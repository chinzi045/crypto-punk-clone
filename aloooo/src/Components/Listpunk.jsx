import React from "react";

import Sdata from "../Sdta";
import Collectioncard from "./Collectioncard";

const Listpunk = (setselectedpunk) => {
  return (
    <>
      {Sdata.map((val) => {
        return (
          <div onClick={() => setselectedpunk(val.id)}>
            <Collectioncard
              pic={val.imgSrc}
              key={val.id}
              name={val.title}
              rate={val.price}
              imgs={val.img2}
            />
          </div>
        );
      })}
    </>
  );
};

export default Listpunk;
