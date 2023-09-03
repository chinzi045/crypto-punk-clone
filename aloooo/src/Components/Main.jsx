import React, { useEffect, useState } from "react";
import "./main.css";
import Sdata from "../Sdta";
import Listpunk from "./Listpunk";
const Main = ({ img, imgs, id, selectedpunk }) => {
  const [activepunk, setactivepunk] = useState(Listpunk[3]);
  let qas = img[""];

  useEffect(() => {
    setactivepunk(Listpunk[selectedpunk]);
  }, [Listpunk, selectedpunk]);

  return (
    <div className="main" style={{ color: "white" }}>
      <div className="main-content">
        <div className="punk-highlight">
          <div className="punk-container">
            <img src={img[1]} alt="piooo" className="selected-punk" />
          </div>
        </div>
        <div className="punk-details">
          <div className="title">
            bandana punk <span className="punk-id">.#{id[5]}</span>
          </div>

          <div className="owner">
            <div className="owner-container">
              <img src={img[5]} alt="logo" />
            </div>
            <div className="owner-details">
              <div className="ownernameandhandle">
                <div className="address">0b164746737*^dsjdhjkw55376367</div>
                <div className="names">@inzitech</div>
              </div>
              <div className="ownerlink">
                <img src="../assets/owner/instagram.png" alt="" />
              </div>
              <div className="ownerlink">
                <img src="../assets/owner/twitter.png" alt="" />
              </div>
              <div className="ownerlink">
                <img src="../assets/owner/more.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
