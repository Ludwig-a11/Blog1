const router = require('express').Router();
const userServices = require('./users.services');
//? esta combinacion espara manejar rutas protegidas
const passport = require('passport');
require('../middlewares/auth.middleware')(passport);



//? Root routes
//? añadiendo passport... generamos una ruta protegida
router.get('/', userServices.getAllUsers)

//? /api/v1/users/me
//? Esta ruta de informacion propia del usuario loggeado
router.route('/me')
  .get(
    passport.authenticate('jwt', {session: false}),
    userServices.getMyUser)
  //.patch()
  //.delete() 
  


//? /api/v1/users/:id
//? dynamics router by ID when one route has differents requests /verbs
router.route('/:id')
  .get(userServices.getUserById)
  .patch(userServices.patchUser)
  .delete(userServices.deleteUser)



  module.exports = router