import styled from 'styled-components';
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import React from 'react';

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#3773f5',
            borderColor: '#3773f5',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#3773f5',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#3773f5',
            pointHoverBorderColor: '#3773f5',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56]
        }
    ]
}

const options = {
    plugin: {
        legend: {
            display: false,
        },
    },
}
const BalanceChart = () => {

  return (
      <Wrapper>
          <Line data={data} options={options} width={400} height={200}/>
      </Wrapper>
  );
};

export default BalanceChart;

const Wrapper  = styled.div``