export const proxy = () =>
  process.env.NODE_ENV === 'production'
    ? 'https://www.cashhomestoday.com'
    : 'http://localhost:3000'

export const serverProxy = () =>
  process.env.NODE_ENV === 'production'
    ? 'https://api.cashhomestoday.com'
    : 'http://localhost:8080'
