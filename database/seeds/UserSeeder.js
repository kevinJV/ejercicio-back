'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

//This seeder can only be run once, since the data is static and doesn't chang each run
class UserSeeder {
  async run () {
    const user = await Factory.model('App/Models/User').create()
    console.log("User created")
    const users = await Database.table('users')
    console.log(users)
  }
}

module.exports = UserSeeder
