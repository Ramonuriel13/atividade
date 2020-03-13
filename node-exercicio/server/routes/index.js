//const tasksController = require('../controllers'.tasks);
const tasksController = require('../controllers/tasksController');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/todolist', tasksController.create);
  app.get('/api/todolist', tasksController.findAll);
};