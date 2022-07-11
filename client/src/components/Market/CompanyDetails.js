import React from 'react'
import market from './market.module.css'


function CompanyDetails({symbol,pe_ratio,eps,sector,industry,book_value,fifty2_week_high,fifty2_week_low,market_capitalization}) {
    if(symbol){
        return (
            <table className = {market.table}>
                <tbody>
                    <tr>
                        <th>Symbol</th>
                        <td>{symbol}</td>
                    </tr>
                    <tr>
                        <th>Industry</th>
                        <td>{industry}</td>
                    </tr>
                    <tr>
                        <th>Sector</th>
                        <td>{sector}</td>
                    </tr>
                    <tr>
                        <th>PE Ratio</th>
                        <td>{pe_ratio}</td>
                    </tr>
                    <tr>
                        <th>EPS</th>
                        <td>{eps}</td>
                    </tr>
                    <tr>
                        <th>Book Value</th>
                        <td>{book_value}</td>
                    </tr>
                    <tr>
                        <th>52 Week High</th>
                        <td>{fifty2_week_high}</td>
                    </tr>
                    <tr>
                        <th>52 Week Low</th>
                        <td>{fifty2_week_low}</td>
                    </tr>
                    <tr>
                        <th>Market Capitalization</th>
                        <td>{market_capitalization}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
    return (
        <h1>Loading....</h1>
    )
}

export default CompanyDetails
