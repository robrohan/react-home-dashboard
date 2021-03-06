const config = {
  dashboard: {
    widgets: {

      schedule: {
        cals: ['https://bloodynipples.com/2019.ics'],
        year: new Date().getFullYear(),
        data: {
          day: []
        }
      },

      weather: {
        api_key: "12345",
        location: "Auckland,NZ",
        units: "metric",
      },

      tides: {
        location: "Auckland-New-Zealand",
      },

      countdown: {
        event: "Christmas Party!",
        date: new Date(2019, 11, 15),
      },

      money: {
        holdings: 'https://raw.githubusercontent.com/robrohan/react-home-dashboard/master/static/money.json'
      },

      investments: {
        holdings: 'https://raw.githubusercontent.com/robrohan/react-home-dashboard/master/static/investments.json',
        currency: 'NZD'
      },

      soundcloud: {
        playlist: 'https://api.soundcloud.com/playlists/205051568'
      },

      chart: {
        title: 'Suffer Score',
        data_url: 'https://raw.githubusercontent.com/robrohan/react-home-dashboard/master/static/chart.json',
      }
    }
  }
}

export default config;
