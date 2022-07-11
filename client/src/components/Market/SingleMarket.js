import React, { useEffect, useState } from 'react'
import Navigation from '../Navigation'
import CompanyDetails from './CompanyDetails'
import market from './market.module.css'
import Chart from "react-apexcharts";
import Footer from '../Footer'

function SingleMarket(props) {
    const name = props.match.params.name
    const [company,setCompany] = useState({})
    const [chartData,setChartData] = useState({})
    let displayTable = ''
    let displayChart = ''

    const fetchTableData = () => {
      console.log('fecthed')
      fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${name}&apikey=IZFCM5NRM9RWO93`)
      .then(res => res.json())
      .then(data => {
        setCompany(data)
      })
      .catch(err => console.log(`There is error -> ${err}`))
  }

  const fetchChartData = () => {
    console.log('fecthed')
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${name}&apikey=IZFCM5NRM9RWO93`)
    .then(res => res.json())
    .then(data => {
      setChartData(data["Time Series (Daily)"])
    })
    .catch(err => {
      alert('Something went wrong, check your internet connection or symbol.')
      window.location.href = '/'
      console.log(`There is error -> ${err}`)
    })
}

  useEffect(()=>{
    fetchTableData();
    fetchChartData();
  },[])

  const array = Object.entries(chartData)
  const realVal = array.map(data => {
  const x = data[0]
  const allValue = data[1]
  const y = [allValue['1. open'],allValue['2. high'],allValue['3. low'],allValue['4. close']]
  return {x,y}
  })
const options = {
    series: [{
        data: realVal
      }],
      options: {
        chart: {
          type: 'candlestick',
          height: 350
        },
        title: {
          text: 'CandleStick Chart',
          align: 'left'
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      },
}

if(company){
  displayTable = <CompanyDetails symbol = {company.Symbol} pe_ratio = {company.PERatio} eps = {company.EPS} sector ={company.Sector} industry = {company.Industry} book_value = {company.BookValue} fifty2_week_high = {company['52WeekLow']} fifty2_week_low = {company['52WeekLow']} market_capitalization = {company.MarketCapitalization}/>

  displayChart = <Chart options={options.options} series={options.series} type="candlestick" height={350} />
} 
return (
    <>
        <Navigation />
        <div className={market.single_market_container}>
          <div className={market.companyTable}>
          {displayTable}
          </div>
          <div className={market.chart}>
              {displayChart}
          </div>
        </div>
        <Footer />
    </>
)
}

export default SingleMarket
