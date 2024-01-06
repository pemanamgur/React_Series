import { useState } from "react";
import datas from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect , setEnableMultiSelect] = useState(false);
  const [multiple , setMultiple] = useState([])


  const handleSingleClick = (getCurrentId) => {
    // console.log(getCurrentId);
    setSelected(getCurrentId);
  };

  function handleMultiSelection(currentID){
        const cpyMultiple = [...multiple];
        // console.log(cpyMultiple)
        const findTheIndexOfCurrentID = cpyMultiple.indexOf(currentID);
        // console.log(findTheIndexOfCurrentID)
        if(findTheIndexOfCurrentID === -1) cpyMultiple.push(currentID)
        else cpyMultiple.splice(findTheIndexOfCurrentID,1)
        setMultiple(cpyMultiple);
  }
 console.log(multiple)
  // console.log(multiple , selected);

  return (
    <div>
       <button 
        onClick={()=> setEnableMultiSelect(!enableMultiSelect)}
       className=" bg-gradient-to-r from-cyan-400 to-cyan-500 p-2 rounded-md">select multiple</button>
      {datas && datas.length > 0 ? (
        datas.map((items) => (
          <div key={items.id}>
            <div 
            onClick={() => enableMultiSelect ? handleMultiSelection(items.id) : handleSingleClick(items.id)
            
            }
                
                className=" bg-violet-600 m-2 text-white"
            >
              {items.queston}
              <h2>+</h2>
            </div>

            {selected === items.id || multiple.indexOf(items.id) !== -1 ? <div className="bg-green-400 text-lg p-2">{items.answer}</div> : null}
          </div>
        ))
      ) : (
        <div>No datas</div>
        )

      }
           
    </div>
  );
}
