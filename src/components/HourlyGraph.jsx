import { Line } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import { hourly } from '../weather.json';

const state = {
  dataLine: {
    labels: ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'],
    datasets: [
      {
        label: 'Temperature',
        fill: false,
        lineTension: .4,
        backgroundColor: '#1474f6',
        borderColor: '#1474f6',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#11D4A7',
        pointBackgroundColor: '#11D4A7',
        pointBorderWidth: 10,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: '#0B8B8D',
        pointHoverBorderColor: '#11D4A7',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [hourly[0].temp, hourly[1].temp, hourly[2].temp, hourly[3].temp, hourly[4].temp, hourly[5].temp, hourly[6].temp, hourly[7].temp, hourly[8].temp, hourly[9].temp, hourly[10].temp, hourly[11].temp, hourly[12].temp, hourly[13].temp, hourly[14].temp, hourly[15].temp, hourly[16].temp, hourly[17].temp, hourly[18].temp, hourly[19].temp, hourly[20].temp, hourly[21].temp, hourly[22].temp, hourly[23].temp, ]
      }
    ]
  }
}

const HourlyGraph = () => {
  return (
    <MDBContainer>
      <h3 className="mt-5">Hourly Temperatures</h3>
      <Line data={ state.dataLine } options={ { responsive: true } } />
    </MDBContainer>
  );
}

export default HourlyGraph;
