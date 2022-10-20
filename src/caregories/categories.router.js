const router = require('express').Router();

const categoryServices = require('./categories.services');

router.route('/') //?catagories
  .get(categoryServices.getAllCategories)
  .post(categoryServices.postCategory)

router.get('/:id',categoryServices.getCategoryById) 

module.exports = router