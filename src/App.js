
import './App.css';
import { useState } from 'react';
import { getDatabase, set, onValue, ref } from "firebase/database";

const App= () => {

const [dataa,setdataa]=useState("");
const db =getDatabase();
let [arrOfData,setarrOfData]=useState([]);
const dataAdd=()=>{
  if(!dataa){

  }else{

    setarrOfData([...arrOfData,dataa])
    setdataa("")
    console.log(arrOfData)
  }
  set(ref(db, "users/"), arrOfData);

  const dbRef = ref(db, "/user");
  return onValue(
    dbRef,
    (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        // arr.push(childData);
        console.log(childData);
        // ...
      });
    },

    {
      onlyOnce: false,
    }
  );
  };
return (
    <>
      <div>
        <input
          value={dataa}
          onChange={(e) => setdataa(e.target.value)}
          type="text"
        />
        <button onClick={dataAdd}>Submit Data</button>
     
        {/* <button onClick={removeData}>Delete/AllData</button> */}
      </div>
      {/* <div>
        <ol>
          {Items.map((element, index) => {
            return (
              <>
                <li key={index}>
                  {element}{" "}
                  <button onClick={() => deleteItem(index)}>Delete</button>
                </li>
              </>
            );
          })}
        </ol>
      </div> */}
    </>
  );
  };

export default App;
