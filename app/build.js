const fs = require('fs')
fs.writeFileSync('./.env.production', `
AIRCRAFT_CEILING=${process.env.AIRCRAFT_CEILING}
API_REQUEST_CONCURRENCY=${process.env.API_REQUEST_CONCURRENCY}
API_RETRY_TIMEOUT=${process.env.API_RETRY_TIMEOUT}
API_URL_ARRIVALS=${process.env.API_URL_ARRIVALS}
API_URL_DEPARTURES=${process.env.API_URL_DEPARTURES}
BEAT_VALUE=${process.env.BEAT_VALUE}
BEATS_PER_BAR=${process.env.BEATS_PER_BAR}
GOOGLE_API_KEY=${process.env.GOOGLE_API_KEY}
REQUEST_INTERVAL=${process.env.REQUEST_INTERVAL}
TEMPO=${process.env.TEMPO}
TIME_SINCE_LAST_FLIGHT=${process.env.TIME_SINCE_LAST_FLIGHT}
`);
