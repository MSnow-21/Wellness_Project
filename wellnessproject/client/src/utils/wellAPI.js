import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://covid-19-statistics.p.rapidapi.com/reports',
  params: {
    date: '2020-04-16',
    q: 'US Alabama',
    region_name: 'US',
    iso: 'USA',
    region_province: 'Alabama',
    city_name: 'Autauga'
  },
  headers: {
    'x-rapidapi-key': '',
    'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});