const http = require('http');
const axios = require('axios');
const constants = require('./constants');

module.exports = { 
    files: {
        list: async () => {

            const {data} = await axios.post(constants.dropboxApi + "/file_requests/list", null, { headers: {
                "Authorization": 'Bearer ' + process.env.DROPBOX_ACCESS_TOKEN,
                "Content-Type": "application/json"
            }});

            // console.log("response", response);
            return data;

        }
    }
}