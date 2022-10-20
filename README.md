# Blog API 

- ¿Que acciones queremos que el front haga?
- Front:
  -Obtener todas las publicaciones
  -Obtener una en especifico
  -Obtener todas las categorias
  -Obtener todos los posts de una categoria en especial
  -Obtener todos los posts que he creado (/me/post)
  -Obtener todos los posts de un usuario en especial
  -Podemos paginar los posts
  -Acciones CRUD sobre Posts
  -Crear categorias 


```json
  {
    "total": 68,
    "prev": "localhost:9000/api/v1/posts?start=50&limit=60",
    "next": "localhost:9000/api/v1/posts?start=61&limit=68",
    "data": [
      {
        "id": "1",
        "title": "ejemplo",
        "content": "lorem ipsum",
        "createdBy": {
          "id" : "18",
          "name": "Luis",
          "email": "luis@academlo.com"        }
      },
        "category":{
          "id": 4,
          "name": "Technology"
        } 
    ]
  }
```

--Rutas 
/api/v1

/users
  - /me
  - /me/posts
  - /me/posts/:id
  - /:id

/categories
  - /:id
  - /:id/posts

/posts
  - /:id
  