import React, { useEffect, useState } from 'react'
import market from './market.module.css'

function TopCompany() {
    const [data,setData] = useState('')
    let tableRow='';
    useEffect(()=>{
        fetch('https://api.twelvedata.com/time_series?symbol=AAPL,MSFT,IBM,SBUX,GOOGL,NKE&interval=1day&outputsize=1&apikey=718d006535bb4773a7e38cf1fbdb106f')
        .then(res => res.json())
        .then(data => {
             setData(data)
        })
    },[])
    console.log(data)
    if(data.hasOwnProperty('AAPL')){
        const dataArray = Object.entries(data)
        tableRow = dataArray.map( singlearray => {
            const symbol = singlearray[0];
            const value = singlearray[1].values[0]
            const openPrice = parseFloat(value.open).toFixed(2)
            const closePrice = parseFloat(value.close).toFixed(2);
             return <TableRow key = {symbol} symbol={symbol} openPrice={openPrice} closePrice={closePrice}/>
        })
    }
    console.log(tableRow)
    return (
        <div className={market.container}>
            <h3>Top Companies</h3>
            <table className={market.table}>
                <tr>
                    <th>Symbol</th>
                    <th>Open</th>
                    <th>Close</th>
                </tr>
                {tableRow}
            </table>
            {/* *********************** */}

            <h3>Crypto Curencies</h3>
            <table className={market.table}>
                <tr>
                    <th>Symbol</th>
                    <th>Open</th>
                    <th>Close</th>
                </tr>
                {/* {tableRow} */}
                <tr>
                    <td>BTC</td>
                    <td>891</td>
                    <td>894</td>
                </tr>
                <tr>
                    <td>Dodge</td>
                    <td>349</td>
                    <td>360</td>
                </tr>
                <tr>
                    <td>Ripple</td>
                    <td>580</td>
                    <td>562</td>
                </tr>
                <tr>
                    <td>Etherium</td>
                    <td>891</td>
                    <td>894</td>
                </tr>
                <tr>
                    <td>Litecoin</td>
                    <td>349</td>
                    <td>360</td>
                </tr>
                <tr>
                    <td>DOT</td>
                    <td>580</td>
                    <td>562</td>
                </tr>
            </table>

            {/* ****************************** */}
        </div>
    )
}
const TableRow = ({symbol,openPrice,closePrice}) => {
return(
    <tr>
        <td>{symbol}</td>
        <td>{openPrice}</td>
        <td>{closePrice}</td>
    </tr>
    )
}
export default TopCompany
