module.exports = function(app) {
  // Routing
  app.get('/api', (request, response) => {
    response.status(200).send({ message: 'Hello World!' });
  });
};
