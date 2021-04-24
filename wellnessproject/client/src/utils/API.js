import axios from "axios";

// API for USDA

const BASEURL = "https://api.nal.usda.gov/fdc/v1/foods/list";
const APIKEY = "?api_key=";
const query = "&query="


export default {
    getData: (search) => 
        axios({
            'method':'GET',
            'url': BASEURL+APIKEY+query+search,
        })

}



// RapidAPI Nutrionix

// const BASEURL="https://nutritionix-api.p.rapidapi.com/v1_1/search/"

// export default {
//     getData: (search) =>

//         axios({
//             'method':'GET',
//             'url': BASEURL+search,
//             'headers': {
//                 'x-rapidapi-key':'',
//                 'x-rapidapi-host':'nutritionix-api.p.rapidapi.com'
//             },
//             'params': {'fields': 'item_name,item_id,brand_name,nf_calories,nf_total_fat'},
    

//         })
// }

// //RapidAPI Edaman 

// export default {
//     getData: () => 
//         axios({
//             'method':'GET',
//             'url':'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
//             'headers': {
//                 'x-rapidapi-key':'',
//                 'x-rapidapi-host':'edamam-food-and-grocery-database.p.rapidapi.com'
//             },
//             'params': {'ingr': 'chicken'},
    

//         })
// }

//RAPIDAPI Calories Ninja


// export default {
//     getData: () => 
//         axios({
//             'method':'GET',
//             'url':'https://calorieninjas.p.rapidapi.com/v1/nutrition',
//             'headers': {
//                 'x-rapidapi-key':'',
//                 'x-rapidapi-host':'calorieninjas.p.rapidapi.com'
//             },
//             'params': {'query': 'chicken'},
    

//         })
// }

