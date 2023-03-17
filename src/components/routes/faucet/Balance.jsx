import React, { useState, useEffect } from "react";
import { useBalance } from 'wagmi'
import { useAccount } from 'wagmi'
 
function Balance() {

  const { address, isConnecting, isDisconnected } = useAccount()

  const { data, isError, isLoading } = useBalance({
    address: address,
    token: '0x67d2E67180016C59a4210cD53DbfEfB9b3197018',
  })

  const [formattedData, setFormattedData] = useState('');

  useEffect(() => {
    if (data) {
      setFormattedData(`${data.formatted} ${data.symbol}`);
    }
  }, [data]);

  if (isConnecting) return <div>Connecting…</div>
  if (isDisconnected) return <div>Disconnected</div>
 
  if (isLoading) return <div>Fetching balance…</div>
  if (isError) return <div>Error fetching balance</div>
  return (
    <div className="flex">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14 stroke-yellow-900">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
      </svg>
      <div className="ml-4 font-sans text-lg text-yellow-900">
        <div className="font-bold">
          Balance
        </div>
      <div className="font-medium">
      {formattedData}
      </div>
      </div>
    </div>
  )
}
  
  export default Balance;