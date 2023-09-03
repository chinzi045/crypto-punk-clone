// import React from "react";
// function App() {
//   let ima1 = "https://picsum.photos/200/300";
//   let ima2 = "https://picsum.photos/250/300";
//   let ima3 = "https://picsum.photos/300/300";

//   return (
//     <>
//       <img src={ima1} alt="no image" />
//       <img src={ima2} alt="no image" />
//       <img src={ima3} alt="no image" />
//     </>
//   );
// }

// export default App;

// import React from "react";

// function App() {
//   const sty = {};
//   var curDate = new Date(2023, 12, 12, 2);
//   curDate = curDate.getHours();
//   var greeting = "";

//   if (curDate > 1 && curDate < 12) {
//     greeting = "Good morning sir";
//     sty.color = "red";
//   } else if (curDate > 12 && curDate < 18) {
//     greeting = "good afternoon";
//     sty.color = "green";
//   } else if (curDate > 18 && curDate < 24) {
//     greeting = "good night";
//     sty.color = "blue";
//   }

//   return (
//     <>
//       <div className="head">
//         <h2>
//           hello Sir! <span style={sty}>{greeting}</span>
//         </h2>
//       </div>
//     </>
//   );
// }
// export default App;

import React, { useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import Listpunk from "./Components/Listpunk";
import Main from "./Components/Main";

function App() {
  const [selectedpunk, setselectedpunk] = useState(3);
  return (
    <>
      <div className="app">
        <Header />
        {Listpunk.length > 0 && (
          <>
            <Main
              img={[
                "../punks/bandanapunk.jpg",
                "../punks/captainamericapunk.jpg",
                "../punks/ccyberpunk.jpg",
                "../punks/Cigarhotpunk.jpg",
                "../punks/greentennishulkpunk.jpg",
                "../punks/piratekingpunk.jpg",
              ]}
              name={[
                "Banadan punk",
                "Captain America Punk",
                "Cyber punk",
                "Cigar hot Punk",
                "Green Tennis Hulk Punk",
                "Pirate King Punk",
              ]}
              id={["1", "2", "3", "4", "5", "6"]}
              imgs="../punks/bandanapunk.jpg"
              Listpunk={Listpunk}
            />
            <div className="maping">
              <Listpunk Listpunk={Listpunk} setselectedpunk={setselectedpunk} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
