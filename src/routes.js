const { Router } = require('express');
const dropboxService = require('./dropbox.service');


const routes = Router();

routes.get('/files/list', async (req, res) => {
    try {
        const files = await dropboxService.files.list();
        
        res.json({files});

    } catch (error) {
        res.json({
            message: error.message,
            stack: error.stack
        });

        console.log(error);
    }

    
})

module.exports = routes;