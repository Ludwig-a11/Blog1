const uuid  = require('uuid');
const Categories = require('../models/categories.models');
const Posts = require('../models/posts.models');
const Users = require('../models/users.models');


const getAllPosts = async() =>{
  const data = await Posts.findAll({
    include: [
      {
        model: Users
      },
      {
        model: Categories
      }
    ]
  })
  return data  
};

const getPostById = async(id) => {

};

const createPost = async (data) => {
  const response = await Posts.create({
      id: uuid.v4(),
      title: data.title,
      content: data.content,
      createdBy: data.userId,
      categoryId: data.categoryId
  })
  return response
};


module.exports = {
  getAllPosts,
  getPostById,
  createPost
};