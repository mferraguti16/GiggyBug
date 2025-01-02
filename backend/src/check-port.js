const net = require('net');

const port = 5432;                                      /*5432 est le port de pgsql dont mon localhost a besoin pour se co à lui*/

const server = net.createServer();

server.once('error', (err) => {                         /*once n'agit qu'une seule fois*/
  if (err.code === 'EADDRINUSE') {                      /*ADDR IN USE = adresse déjà utilisée*/
    console.log(`Le port ${port} est déjà utilisé.`);
  } else {
    console.log(`Erreur inconnue : ${err.message}`);
  }
  process.exit(1);
});

server.once('listening', () => {
  console.log(`Le port ${port} est libre.`);
  server.close();
});

server.listen(port);