'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Guest routes
Route.group(() => {
  
  Route.get('/', () => {
    return { greeting: 'Hello world in JSON' }
  })

  Route.post('login', 'UserController.login')
}).prefix('api/v1')

//Products routes
Route.group(() => {
  
  //Using RESTful nomenclature
  Route.get('', 'ProductController.index')
  Route.post('', 'ProductController.store').validator('StoreProduct').middleware(['auth'])

  //Search method
  Route.get('/search', 'ProductController.search').validator(['SearchProduct'])
}).prefix('api/v1/products')
