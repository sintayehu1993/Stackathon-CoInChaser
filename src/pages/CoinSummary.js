import React from 'react'
import AddCoin from '../Components/AddCoin'
import CoinList from '../Components/CoinList'

function CoinSummary() {
    return (
        <div className ="coinsummary shadow border p-2 rounded mt-2 be-light">
            <AddCoin />
            <CoinList />
        </div>
    )
}

export default CoinSummary
