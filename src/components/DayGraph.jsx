import { Line } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import { daily } from '../weather.json';

const tempSunday = daily[0].temp;
const tempMonday = daily[1].temp;
const tempTuesday = daily[2].temp;
const tempWednesday = daily[3].temp;
const tempThursday = daily[4].temp;
const tempFriday = daily[5].temp;
const tempSaturday = daily[6].temp;

const state = {
  dataLine: {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Daily High',
        fill: false,
        lineTension: .4,
        backgroundColor: 'red',
        borderColor: 'red',
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
        data: [tempSunday.max, tempMonday.max, tempTuesday.max, tempWednesday.max, tempThursday.max, tempFriday.max, tempSaturday.max]
      },
      {
        label: 'Daily Low',
        fill: false,
        lineTension: 0.3,
        backgroundColor: 'blue',
        borderColor: 'blue',
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
        data: [tempSunday.min, tempMonday.min, tempTuesday.min, tempWednesday.min, tempThursday.min, tempFriday.min, tempSaturday.min]
      }
    ]
  }
}

const DayGraph = () => {
  return (
    <MDBContainer className="graphBack">
      <h3 className="mt-5">Daily Temperatures</h3>
      <Line data={ state.dataLine } options={ { responsive: true } } />
    </MDBContainer>
  );
}

export default DayGraph;
