import React, { useEffect, useState } from 'react'
import adminStyle  from './admin.module.css'
import Chart from "react-apexcharts";
import axios from 'axios'
import {useSelector} from 'react-redux'

function DashboardMain() {
  const [cat,setCat] = useState([])
  const [catlen,setCatlen] = useState('')
  const articles = useSelector(state => state.article.articles)
  const articles_no = articles.length;
  useEffect(() => {
    axios.get('/article/category').then( data =>{
      setCat(data.data)
      setCatlen(data.data.length)
    })
  },[])
    return (
        <div className={adminStyle.main}>
            <div className={adminStyle.main_container}>
                <div className = {adminStyle.box}>
                    <h3>Total Articles</h3>
                    <span>{articles_no}</span>
                </div>
                <div className = {adminStyle.box}>
                    <h3>Total Category</h3>
                    <span>{catlen}</span>
                </div>
                <div className = {adminStyle.box}>
                    <h3>Visit Site</h3>
                    <span><a href='/' style = {{color: 'black'}}><img src="https://img.icons8.com/material/24/000000/visible--v1.png"/></a></span>
                </div>
            </div>
            <div className = {adminStyle.graph}>
                <ApexChart cat = {cat} articles = {articles}/>
            </div>
        </div>
    )
}

function ApexChart({ cat,articles}) {
  let labels=[],
      series = []

    cat.forEach(element => {
      labels.push(element.name)
      const filtered = articles.filter( article => article.category_id === element._id )

      series.push(filtered.length)
    });

      const state = {
        series,
        options: {
          chart: {
            type: 'donut'
          },
          labels,
          plotOptions: {
            pie: {
              donut: {
                size: '50%'
              }
            }
          }
        }}
      return (
        <div id="chart" >
            {articles && <Chart options={state.options} series={state.series} type="donut" height={300}/> }
        </div>
    )
}

export default DashboardMain
