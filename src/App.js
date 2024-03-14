import Payment from "./Components/Payment";
import {createContext, useEffect, useReducer, useState} from "react";
import {initialUserState, LoadUserState, UserReducer} from "./Reducers/User";



export const ConvertedAmountContext=createContext(0)
const App= ()=>{
    const [userState,dispatch]=useReducer(UserReducer,LoadUserState())

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
    const saveUser =()=>{
       if( userState.userName === null || userState.userName.trim()==='' ||userState.money === null || isNaN(userState.money) ){
           return;
       }
       dispatch({type:"SET_USER_CREATED" ,payload:true});

    }

    useEffect(()=>{
        if(userState.isUserCreated){
            localStorage.setItem("userState",JSON.stringify(userState))
        }
    },[userState])
  return(
      <>
         <ConvertedAmountContext.Provider value={convertedAmount}>
             <Payment/>
         </ConvertedAmountContext.Provider>

              <input type="number" onInput={e => updateAmount(e)}/>
          { !userState.isUserCreated && <form>
              <input placeholder="enter your username" type="text"
              onInput={e => dispatch({type:"SET_USERNAME", payload:e.target.value})}/>
              <input placeholder="enter your money"
              onInput={e => dispatch({type:"SET_MONEY", payload:e.target.value})}/>
    <button type="button" onClick={saveUser}>Kreiraj Korisnika</button>
</form>}



              <select onChange={e => updateCurrencyIndex(e)}>
                  <option value={108}>USD &#36;</option>
                  <option value={117.2}>EUR &euro;</option>
                  <option value={136.6}>GBP &#163;</option>
                  <option value={1.2}>RBL &#8381;</option>
              </select>
              <button type="button" onClick={updateCurrency}>Change currency</button>


      </>

  )
}
export default App;