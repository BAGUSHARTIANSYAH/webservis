'use strict';
const Hapi = require('@hapi/hapi');
const routes = require('./router');
const Path = require('path');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
        cors: {
          origin: ['*'],
        },
        files: {
          relativeTo: Path.join(__dirname, 'public')
        }

    },
  });
  await server.register(require('@hapi/inert'));
  server.route(routes);
  
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
 
init();