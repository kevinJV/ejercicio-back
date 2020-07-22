'use strict'

const User = use('App/Models/User')

class UserController {

    /*
    * A basic login using email and password
    * 
    * POST
    */
   async login({auth, request}){
    const {email, password} = request.all()

    return await auth.attempt(email, password)
   }

}

module.exports = UserController
