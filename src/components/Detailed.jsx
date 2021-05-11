import React from 'react';

const Detailed = () => {
  return(
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      { new Date(weather.current.sunrise).toLocaleTimeString("en-US") }
    </p>
    <button type="button" class="btn btn-primary">Button</button>
  </div>
</div>
  )
}

export default Detailed;