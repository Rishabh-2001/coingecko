import { useEffect, useState } from "react";
import WidgetForm from "./WidgetForm";
import { formatNumber } from "../utils/helper";

const WidgetPreview = () => {
    const [data,setData]=useState([])
    const [miniData,setMiniData]=useState();
    const [key,setKey]=useState('bitcoin')
    const [currency,setCurrency]=useState('usd')
    const [isLoading,setIsLoading]=useState(false)
    const [showRank,setShowRank]=useState(true);
    const [showMarCap,setShowMarCap]=useState(true)
    const[showVol,setShowVol]=useState(true);
    const [primeTick,setPrimeTick]=useState(true)
    const [volTic,setVolTic]=useState(true);


    useEffect(()=>{
        setIsLoading(true)
        fetch(`https://api.coingecko.com/api/v3/coins/${key}`)
        .then(response => response.json())
        .then(data => {
            console.log("DATA from API:", data);
            const { name, market_data,symbol,market_cap_rank } = data;
            const { market_cap, current_price, total_volume, market_cap_change_percentage_24h } = market_data;
            const {small,large}=data?.image;
            

            setMiniData({name,market_data,large,small,market_cap,current_price,total_volume, market_cap_rank,symbol, market_cap_change_percentage_24h})
            setData(data);
            setIsLoading(false);

            // Create a div to display the token details
            // const tokenDetailsDiv = document.createElement('div');
            // tokenDetailsDiv.innerHTML = `
            //     <h2>${name}</h2>
            //     <p>Market Cap: $${market_cap.usd}</p>
            //     <p>Price: $${current_price.usd}</p>
            //     <p>24-hour Trading Volume: $${total_volume.usd}</p>
            // `;

            // Append the token details to a specific container on the web page
            // document.getElementById('coinGeckoWidgetContainer').appendChild(tokenDetailsDiv);
        })
        .catch(error => {
            console.error('Error fetching CoinGecko token details', error);
            setIsLoading(false);
        });
    }, [key])
    return ( 
        <div className="w-full transition all ease-in-out delay-150 ">

   {isLoading?
<div class="bg-white p-2 rounded-2xl shadow-lg flex flex-col sm:flex-row  select-none w-[45%] mx-auto  w-[45%] mx-auto border rounded my-6">
      <div class="h-44 sm:h-full sm:w-72 rounded-xl bg-gray-200 animate-pulse" ></div>
      <div class="flex flex-col flex-1 gap-3 sm:p-2">
        <div class="flex flex-1 flex-col gap-2">
          <div class="bg-gray-200 w-full animate-pulse h-10 rounded-2xl" ></div>
          <div class="bg-gray-200 w-full animate-pulse h-2 rounded-2xl" ></div>
          <div class="bg-gray-200 w-full animate-pulse h-2 rounded-2xl" ></div>
          <div class="bg-gray-200 w-full animate-pulse h-2 rounded-2xl" ></div>
          <div class="bg-gray-200 w-full animate-pulse h-2 rounded-2xl" ></div>
        </div>
        <div class="mt-auto flex gap-2">
          <div class="bg-gray-200 w-20 h-4 animate-pulse rounded-full" ></div>
          <div class="bg-gray-200 w-20 h-4 animate-pulse rounded-full" ></div>
          <div class="bg-gray-200 w-20 h-4 animate-pulse rounded-full ml-auto" ></div>
        </div>
      </div>
</div>:    <div className="w-[45%] mx-auto border rounded my-6 shadow-md transition duration-500 ease-in-out transform hover:scale-105">
  <div className="flex gap-4 px-6 py-4 justify-around">
    <img src={miniData?.large} alt="img" width="70px" />
    <div>
      <div>
        <span className="text-blue-500 font-normal text-[1.15rem] cursor-pointer">{miniData?.name}</span>
       {primeTick && <span className="uppercase text-blue-500 font-normal text-[1.15rem] cursor-pointer"> ({miniData?.symbol}) </span>}
      </div>
      <span className="font-medium text-xl"> {miniData?.current_price[currency]} </span>
      <span className="text-[1rem] font-medium uppercase"> {currency} </span>
      <span
        className={`font-medium text-[1.15rem] ${
          miniData?.market_cap_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'
        }`}
      >
        ({miniData?.market_cap_change_percentage_24h.toFixed(3)})
      </span>
    </div>
  </div>
  <div className="flex justify-between border">
 {showRank &&   <div className="flex-1 border-r p-4">
      <h3 className="text-xs">RANK</h3>
      <h4 className="text-md font-medium">{miniData?.market_cap_rank}</h4>
    </div>}
{showMarCap && <div className="flex-1 border-r py-4 px-2">
      <h3 className="text-xs">MARKET CAP</h3>
      <span className="text-md font-medium"> {formatNumber(miniData?.market_cap[currency])} </span>
     {volTic && <span className="text-xs uppercase"> {currency} </span>}
    </div>}
{showVol && <div className="flex-1 p-4">
      <h3 className="text-xs">VOLUME</h3>
      <span className="text-md font-medium"> {formatNumber(miniData?.total_volume[currency])} </span>
   {volTic &&   <span className="text-xs uppercase"> {currency} </span>}
    </div>}
  </div>
</div>
}
     <WidgetForm setKey={setKey} k={key} setShowRank={setShowRank} rank={showRank} vol={showVol} setShowVol={setShowVol} setShowMarCap={setShowMarCap} marCap={showMarCap} setVolTic={setVolTic} volT={volTic} setPrimeTick={setPrimeTick} tick={primeTick}   />
      {/* <div className="w-[45%] mx-auto">
     <coingecko-coin-ticker-widget  coin-id="ethereum" currency="usd" locale="en"></coingecko-coin-ticker-widget>
      </div> */}
        </div>
     );
}
 
export default WidgetPreview;