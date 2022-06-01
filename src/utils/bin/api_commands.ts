// // List of commands that require API calls

import { getQuote } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';
import { getOwen } from '../api';

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const readme = async (args: string[]): Promise<string> => {
  const readme = await getReadme();
  return `Opening GitHub README...\n
  ${readme}`;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};

export const owen = async (args: string[]): Promise<string> => {
  const data = await getOwen();
  window.open(`${data[0]['video']['360p']}`);
  return 'You got Owened';
};
