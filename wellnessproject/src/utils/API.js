import axios from "axios";

// // API for USDA

const BASEURL = "https://api.nal.usda.gov/fdc/v1/foods/list";
const APIKEY = "?api_key=";

export default {
    getSearchResultsOne: function() {
        return axios.get(BASEURL+APIKEY);
    },
};

