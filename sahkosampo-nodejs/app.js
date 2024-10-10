require('dotenv').config();
const axios = require('axios').default;
// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 9467;
const SUPERVISOR_TOKEN = process.env.SUPERVISOR_TOKEN;
const HA_ROOT_URL = "http://supervisor/core";
// Simple route
app.get('/', (req, res) => {
    axios.get(`${HA_ROOT_URL}/api/states`,
        {
            headers: {
                "Authorization": `Bearer ${SUPERVISOR_TOKEN}`
            }
        }
    ).then(result => {
        res.json(result.data)
    }).catch(err => {
        console.log(err)
        res.status(400).send()
    })
});

app.get('/api/ha/states/', (req, res) => {
    sendHaMessage({ "type": "get_states" });
    axios.get(`${HA_ROOT_URL}/api/states`,
        {
            headers: {
                "Authorization": `Bearer ${SUPERVISOR_TOKEN}`
            }
        }
    ).then(result => {
        res.json(result.data)
    }).catch(err => {
        console.log(err)
        res.status(400).send()
    })
})

// Start server
app.listen(port, () => {
    console.log(`Addon is running on port ${port}`);
    console.log(`Supervisor token ${SUPERVISOR_TOKEN}`);
});