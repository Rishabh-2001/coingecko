import React from 'react'

const WidgetForm = ({k, setKey,setShowVol,vol,rank,setShowRank, setShowMarCap,marCap,setVolTic,volT,setPrimeTick,tick}) => {

    function handleCurrency(ev)
    {
       setKey(ev.target.value);
    }
    function handleChangeToggle(e)
    {
        console.log("EEE:", e.target.name, e.target.checked);
        if(e.target.name==="rank")  setShowRank(e.target.checked);
        else if(e.target.name==="vol") setShowVol(e.target.checked);
        else if(e.target.name==="vol-tick") setVolTic(e.target.checked);
        else if(e.target.name==="tick") setPrimeTick(e.target.checked);
        else if(e.target.name==="market-cap") setShowMarCap(e.target.checked);
    }
console.log("KEY HERE:", k,rank);
  return (
  
         <div className="flex flex-col w-[60%] mx-auto my-4 gap-4">
         
         <div className="py-1 flex flex-col gap-2">
            <h2 className='font-medium'>CryptoCurrentcy</h2>
            <select className="w-full rounded border  px-4 py-2" onChange={handleCurrency} value={k} >
              <option value="bitcoin" >Bitcoin</option>
              <option value="ethereum">Etherium</option>
              <option value="tether">Tether</option>
              <option value="usd-coin">USDC</option>
            </select>
         </div>
   
     <div className="flex justify-between gap-6">
      <div className="flex-[1] py-1 flex flex-col gap-2">
              <h2  className='font-medium'>Fiat Currency</h2> 
              <select className="rounded border w-full px-4 py-2" disabled>
                <option>United States(USD)</option>
                <option>United Amirated Dinar(UAD)</option>
                <option>Indian National Rupee(INR)</option>
              </select>
          </div>
          <div className="flex-[1] flex flex-col gap-2" >
            <h2  className='font-medium'>Secondary Currency</h2>
            <select  className="rounded border w-full py-2 px-4" disabled>
              <option>United States(USD)</option>
              <option>United Amirated Dinar(UAD)</option>
              <option>Indian National Rupee(INR)</option>
            </select>
         </div>
     </div>
     <div className=" flex flex-col gap-2"> 
            <h2  className='font-medium'>MCAP/Volume Display Currency</h2>
            <select className="w-full rounded border  px-4 py-2" disabled>
              <option >United States(USD)</option>
              <option>United Amirated Dinar(UAD)</option>
              <option>Indian National Rupee(INR)</option>
            </select>
         </div>
         <div className="flex justify-between gap-8 w-full py-1 ">
            <div className="flex flex-[1] justify-between">
              <span  className='font-medium'>Show Primary Ticker Symbol?</span>
              <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={tick} class="sr-only peer" name='tick' onChange={handleChangeToggle}  />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex flex-[1] justify-between">
              <span  className='font-medium'>Show Rank?</span>
              <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={rank} class="sr-only peer" name='rank' onChange={handleChangeToggle} />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
            </div>
         </div>
       
       <div  className="flex justify-between gap-8 w-full py-1 ">
         <div  className="flex flex-[1] justify-between">
           <span  className='font-medium'>Show Market Cap?</span>
           <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" checked={marCap} class="sr-only peer" name='market-cap' onChange={handleChangeToggle}  />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
         </div>
         <div  className="flex flex-[1] justify-between">
           <span  className='font-medium'>Show Volume (24h)?</span>
           <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" checked={vol} class="sr-only peer" name='vol' onChange={handleChangeToggle}  />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
         </div>
         </div>
         <div  className="flex justify-between gap-8 w-[48%] py-1 ">
          <div className="flex justify-between w-full">
            <span  className='font-medium'>Show MCAP/Volume Ticker Symbol?</span>
            <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={volT} class="sr-only peer" name='vol-tick' onChange={handleChangeToggle}  />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
          </div>
          </div>
</div>
  
  )
}

export default WidgetForm