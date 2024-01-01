import React, { useId } from 'react'

function InputBox({
  label,
  className="",
  amount,
  onAmountChange,
  amountDisable = false,
  selectCurrency ="usd",
  onCurrencyChange,
  currencyDisable = false,
  currencyOptions = [],
}) {
 
   let inputId = useId();

  return (
    <div className={`bg-white flex gap-x-2 ${className} `}>
      <div > 
        <label htmlFor={inputId} className='inline-block'>
          {label}
        </label>
        <input type="number" 
        id={inputId}
        className='w-full bg-transparent outline-none'
        value={amount}
        disabled={amountDisable}
        onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end'>
      <p className='w-full'>Currency Type</p>
        <select className='px-1 py-1' 
        value={selectCurrency}
        onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled ={currencyDisable}
        >
          {
            currencyOptions.map((currency)=>(
              <option key={currency} value={currency}>
                {currency}
              </option> 
            ))

          }

        </select>
      </div>
    </div>
  )
}

export default InputBox;
