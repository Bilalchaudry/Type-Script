const add = (a: number, b: number): number => {
  return a + b;
}

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
}


const logger = (message: string): void => {
  console.log(message);
} //technically can returns undefined or null, but we use void to indicate that we don't expect a return value


const throwError = (message: string): never => {
  throw new Error(message);
} //never means that the function will never return, it will always throw an error or cause a crash

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(forecast);