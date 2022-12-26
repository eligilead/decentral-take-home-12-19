import React from "react";
import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  Legend,
  ResponsiveContainer
} from 'recharts';


function GraphData() {

  const dataShare = [
    {
      certificateNumber: "JS1GX72A882102620",
      name: "Cool Investment",
      shareAmount: 500000,
      sharePrice: 4.89,
      ownership: .23,
      CIOpitionPool: .15
    },
  ]


  function preMoneyValue(outstandingShares, shareValue, currentOwnership) {
    const pmv = (outstandingShares * shareValue) / (1 - currentOwnership)
    return pmv
  }

  function optionPoolSize(remainingShares, opitionPoolPercentage) {
    const OPP = (remainingShares * opitionPoolPercentage) / 100
    return OPP
  }

  console.log("pre money value---->", Math.round(preMoneyValue(dataShare[0].shareAmount, dataShare[0].sharePrice, dataShare[0].ownership)))
  console.log("option pool size---->", Math.round(optionPoolSize(dataShare[0].shareAmount, dataShare[0].CIOpitionPool)))


  const data = [
    {
      xName: 0,
      yName: 0,
      "Series A": 0,
      "Series B": 1500
    },
    {
      xName: 500,
      yName: 500,
      "Series A": 3000,
      "Series B": 1500
    },
    {
      xName: 1000,
      yName: 1000,
      "Series A": 2000,
      "Series B": 1500
    },
    {
      xName: 1500,
      yName: 1500,
      "Series A": 2780,
      "Series B": 1500

    },
    {
      xName: 2000,
      yName: 2000,
      "Series A": 1890,
      "Series B": 1500
    },
    {
      xName: 2500,
      yName: 2500,
      "Series A": 2390,
      "Series B": 1500

    },
    {
      xName: 3000,
      yName: 3000,
      "Series A": 3000,
      "Series B": 1500

    }
  ];

  return (
    <div>
      <div className="container">

        <AreaChart
          width={800}
          height={500}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="1 1" />
          <CartesianGrid />
          <XAxis dataKey="xName" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Series A"
            stroke="#edeec9"
            fill="#77bfa3"
          />
          <Area
            type="monotone"
            dataKey="Series B"
            stroke="#ffcad4"
            fill="#ff5d8f"
          />
          <LabelList position="top" />
          <Legend layout="horizontal" align="middle" verticalAlign="bottom" />
        </AreaChart>
        <footer>
          <h4>random stuff</h4>
        </footer>
      </div>
    </div>
  )
}

export default GraphData;
