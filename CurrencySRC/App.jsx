import { useState } from 'react'
import './App.css'
import InputBox from './Component/InputBox'
import customHooks from './customHook/customHooks'

function App() {
 
  let [amount , setAmount] = useState(0);
  let [convertedAmount , setConvertedAmount] = useState(0);
  let [from, setFrom] = useState('usd')
  let [to, setTo] = useState('inr')

  const currencyInfo = customHooks(from);
  // console.log(currencyInfo);
  const options = Object.keys(currencyInfo);
  // console.log(options);
  

  const swap = ()=>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to] );
  }

  return (
    <>
    <div className='width-full flex flex-wrap justify-center bg-no-repeat  bg-cover h-screen' style={{backgroundImage : 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrvMmQMIvwhG_X5FqaUTGUo3B8N8qxngQf1w&usqp=CAU)'}}>
      <div className='w-full'>
        <div className='bg-gray-300 max-w-md mx-auto w-full backdrop-blur-sm rounded-lg bg-white/30'>
          <form action="" 
          onSubmit={(e)=>{
            e.preventDefault();
            convert();
            }}>
            <div className='w-full mb-2 '>
              <InputBox label={from} 
              amount={amount} 
              currencyOptions={options} 
              selectCurrency={from}
              onCurrencyChange={(currency)=>{
                      setFrom(currency);
              }}
              // amountDisable
              onAmountChange={(amount)=>{
                setAmount(amount); 
              }}
                
              
              />
            </div >
            <div className='relative absolute h-0.5' >
              <button 
              className='absolute py-auto bottom-1  -translate-x-1/2 bg-blue-100 left-1/2 '
              onClick={swap}
              >swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox 
              label={to} 
              amount={convertedAmount}
              currencyOptions={options}
              selectCurrency={(currency)=>{
                setTo(currency)
              }}
              

              />
            </div>
            <div className='w-full bg-blue-600 text-white px-2 text-center py-2 rounded-lg'>
                <button >Convert {from.toLocaleUpperCase()} to {to.toUpperCase()}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
