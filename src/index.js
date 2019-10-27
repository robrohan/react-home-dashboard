import * as React from "react";
import { render } from "react-dom";

import { MoneyWidget } from "./widgets/money";
import { InvestmentWidget } from "./widgets/investments";

import background from "./assets/background.jpeg";
import { SoundcloudWidget } from "./widgets/soundcloud";
import { WeatherWidget } from "./widgets/weather";
import { CalendarWidget } from "./widgets/calendar";
import { CountdownWidget } from "./widgets/countdown";
import { DateTimeWidget } from "./widgets/datetime";
import { SpendingWidget } from "./widgets/spending";

import { ScheduleWidget, ScheduleDayWidget } from "./widgets/schedule";

import { createStore, rootReducer } from "./common/robdux";

const App = () => {
  const store = createStore(rootReducer, {});

  return (
    <div className="dashboard">
      
      <img className="background" src={background} />
      <DateTimeWidget />

      <div className="row">
        <ScheduleWidget 
          cals={['https://bloodynipples.com/2019.ics']} 
          store={store}
        />
      </div>

      <div className="row">
        <div className="column">
          <WeatherWidget />
          <MoneyWidget />
          <InvestmentWidget />
        </div>
        <div className="column">
          <SpendingWidget />
          <SoundcloudWidget />
        </div>
        <div className="column">
          {/* <CalendarWidget /> */}
          <ScheduleDayWidget store={store} />
          <CountdownWidget />
        </div>
      </div>

    </div>
  );
}

render(<App />, document.getElementById("root"));

// if (module.hot) {
//   module.hot.accept();
// }
