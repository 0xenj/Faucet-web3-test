import React from "react";
import { useBalance } from 'wagmi'
import { useAccount } from 'wagmi'
 
function BalanceData() {

    const { address } = useAccount()
    const { data } = useBalance({
    address: address,
    token: '0x67d2E67180016C59a4210cD53DbfEfB9b3197018',
    })

    if ((!address)) {
        return null;
    } else {
    return (
        <div>
            {data && data.formatted} {data && data.symbol}
        </div>
    );
    }
}

export default BalanceData;