const router = require('express').Router();
const userServices = require('./users.services');

//? Root routes
router.get('/', userServices.getAllUsers)



//? dynamics router by ID when one route has differents requests /verbs
router.route('/:id')
  .get(userServices.getUserById)
  .patch(userServices.patchUser)
  .delete(userServices.deleteUser)

  module.exports = router