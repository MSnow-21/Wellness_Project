import axios from "axios";

// API for USDA

const BASEURL = "https://api.nal.usda.gov/fdc/v1/foods/list";
const APIKEY = "?api_key=";

// export default {
//     getSearchResultsOne: function() {
//         return axios.get(BASEURL+APIKEY);
//     },
// };

export default {
    getData: () => 
        axios({
            'method':'GET',
            'url': BASEURL+APIKEY,
        })

}



// //RapidAPI

// export default {
//     getData: () => 
//         axios({
//             'method':'GET',
//             'url':'https://nutritionix-api.p.rapidapi.com/v1_1/search/cheddar%20cheese',
//             'headers': {
//                 'x-rapidapi-key':'',
//                 'x-rapidapi-host':'nutritionix-api.p.rapidapi.com'
//             },
//             'params': {'fields': 'item_name,item_id,brand_name,nf_calories,nf_total_fat'},
    

//         })
// }

