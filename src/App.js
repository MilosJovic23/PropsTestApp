import Payment from "./Components/Payment";
import {createContext, useState} from "react";



export const ConvertedAmountContext=createContext(0)
const App= ()=>{
    // const currency="USD";
    const [amount,setAmount]=useState(0);
    const [currencyIndex,setCurrencyIndex]=useState(108)
    const [convertedAmount,setConvertedAmount]=useState(0)
    const  updateCurrency=(e)=>{
        setConvertedAmount(amount*currencyIndex)
    };
    const updateAmount=(e)=>{
        setAmount(e.currentTarget.value);
    };
    const updateCurrencyIndex=(e)=>{
        setCurrencyIndex(e.currentTarget.value)
    }

  return(
      <>
         <ConvertedAmountContext.Provider value={convertedAmount}>
             <Payment/>
         </ConvertedAmountContext.Provider>
          <form>
              <input type="number" onInput={e => updateAmount(e)}/>
              <select onChange={e=>updateCurrencyIndex(e)}>
                  <option value={108}>USD &#36;</option>
                  <option value={117.2}>EUR &euro;</option>
                  <option value={136.6}>GBP &#163;</option>
                  <option value={1.2}>RBL &#8381;</option>
              </select>
              <button type="button" onClick={updateCurrency}>Change currency</button>
          </form>

      </>

  )
}
export default App;