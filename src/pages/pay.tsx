import React, { useState } from 'react'
import {
  useFlutterwave
} from "flutterwave-react-v3"
import { config } from '@/util/fluterwave'




import axios from 'axios'

export default function pay() {

  const [amount, setAmount] = useState("")

  const handlePay = useFlutterwave(config(parseInt(amount)))

  const sendPaymentToBackend = (data) => { }

  const details = {
    amount: 500,
    name: "pro",
    interval: "daily",
};

  const makePlan = () => {
    return 
  }

  return (
    <>

      <input placeholder='amount' onChange={(e) => setAmount(e.target.value)} />


      <button
        onClick={() => handlePay({
          callback: async (data) => {
            return await axios.post("https://3000-amkayondo-integratepaym-sf8f044lzil.ws-eu99.gitpod.io/api/pay", {
              data
            })
              .then(res => console.log("pay api", res))
              .catch(eror => console.log("pay errors", eror))
          },
          onClose: () => {
            alert("you didnt pay")
          }
        })}

        className="bg-white text-white p-10">Pay
        {amount}
      </button >
    </>
  )
}
