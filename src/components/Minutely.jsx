import React from 'react';
import * as weather from "../weather.json";

const Minutely = () => {
    return (

        <div id="Minutely" className="card">
            <div class="card-body">

                <p class="card-text">
                    {`${weather.minutely.precipitation}`}
                </p>
                {`${weather.minutely.dt}`}
            </div>
        </div>
    )
}

export default Minutely;