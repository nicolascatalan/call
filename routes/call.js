const express = require("express");
const router = express.Router();
const Jssip =  require('jsssip')
//const    jwt = require('jsonwebtoken');
//const   app = express();




router.post("/", (req, res, next) => {

        // Create our JsSIP instance and run it:

        var socket = new JsSIP.WebSocketInterface('wss://190.13.76.58:8089.com');
        var configuration = {
        sockets  : [ socket ],
        uri      : 'sip:siptk@192.168.0.138',
        password : 'Tester,.2020AT'
        };

        var ua = new JsSIP.UA(configuration);

        ua.start();

        // Register callbacks to desired call events
        var eventHandlers = {
        'progress': function(e) {
            console.log('call is in progress');
        },
        'failed': function(e) {
            console.log('call failed with cause: '+ e.data.cause);
        },
        'ended': function(e) {
            console.log('call ended with cause: '+ e.data.cause);
        },
        'confirmed': function(e) {
            console.log('call confirmed');
        }
        };

        var options = {
        'eventHandlers'    : eventHandlers,
        'mediaConstraints' : { 'audio': true, 'video': true }
        };

        var session = ua.call('sip:bob@example.com', options);







        res.json("nicolas");
    
    });





module.exports = router;
