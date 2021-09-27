import  axios from "axios";

export const tableAPI = {
    getTableItems () {
            return axios.get(`https://www.nbrb.by/api/exrates/rates?periodicity=0`).then(response => response.data)
    }
}
