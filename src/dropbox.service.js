const fs = require('fs');
const axios = require('axios');
const constants = require('./constants');

module.exports = { 

    folder: {
        list: async () => {
            const { data } = await axios.post(constants.dropboxApi + "/files/list_folder", {"path": ""}, { headers: {
                "Authorization": 'Bearer ' + process.env.DROPBOX_ACCESS_TOKEN,
                "Content-Type": "application/json"
            }});

            return data;
        },
        
        create: async (name) => {
            const { data } = await axios.post(constants.dropboxApi + "/files/create_folder_v2", {"path": '/' + name, "autorename": false}, { headers: {
                "Authorization": 'Bearer ' + process.env.DROPBOX_ACCESS_TOKEN,
                "Content-Type": "application/json"
            }});

            return data;
        },
    },

    files: {
        list: async () => {
            const { data } = await axios.post(constants.dropboxApi + "/file_requests/list", null, { headers: {
                "Authorization": 'Bearer ' + process.env.DROPBOX_ACCESS_TOKEN,
                "Content-Type": "application/json"
            }});

            return data;
        },

        create: async (filename) => {
            // const { data } = await axios.post(constants.dropboxApi + "/file_requests/create", null, { headers: {
            //     "Authorization": 'Bearer ' + process.env.DROPBOX_ACCESS_TOKEN,
            //     "Content-Type": "application/json"
            // }});

            // return data;

            // fs.readFile
        }
    }
}