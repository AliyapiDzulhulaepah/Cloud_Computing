const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],   // Mengizinkan seluruh origin agar frontend bisa mengakses backend
      },
    },
  });

  // Mendaftarkan semua route dari routes.js
  server.route(routes);

  // Menjalankan server
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();