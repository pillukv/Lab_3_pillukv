'use strict';

const Hapi=require('hapi');
const vision=require('vision');
const https=require('https');

// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});

// Add the index.html route
server.route({
    method:'GET',
    path:'/',
    handler:function(request,h) {

        return '<h1>You have reached the homepage</h1>';
    }
});

//Add the content.html route
server.route({
    method:'GET',
    path:'/content.html',
    handler:function (request,h) {

        return '<h1>You have reached the content page</h1>';
    }
});

// Start the server
const start = async () => {

    await server.register(require('vision'));

    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'templates'
    });
};

start();