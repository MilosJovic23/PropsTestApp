import {useContext} from "react";
import {ConvertedAmountContext} from "../App";

const PayPal=()=>{
    const amount=useContext(ConvertedAmountContext)

    return(<p>PayPal: {amount} RSD</p>)
}
export default PayPal;