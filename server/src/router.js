const tuntas = require('./handler');
const Path = require('path');
// import * as tuntas from "./handler";
const routes = [
    //ta web development
    {
      method: 'GET',
      path: '/getdata',
      handler: tuntas.getdata,
    },
    {
      method: 'DELETE',
      path: '/deleteDt',
      handler: tuntas.deleteDt,
    },
    {
      method: 'PUT',
      path: '/updateDt',
      handler: tuntas.updateDt,
    },
    {
      method: 'POST',
      path: '/insertDt',
      handler: tuntas.insertDt,
    },
    {
      method: 'GET',
      path: '/{file}',
      handler: {
        directory: {
          path: Path.join(__dirname, '../public/file'),
          listing: true
        }
      }
    }
];
   
module.exports = routes;