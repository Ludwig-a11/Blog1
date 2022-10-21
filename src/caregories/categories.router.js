const router = require('express').Router();

const categoryServices = require('./categories.services');
const {getPostByCategory} =require('../posts/posts.services')


router.route('/') //?catagories
  .get(categoryServices.getAllCategories)
  .post(categoryServices.postCategory)

router.get('/:id',categoryServices.getCategoryById) 

router.get('/:id/posts', getPostByCategory)

module.exports = router