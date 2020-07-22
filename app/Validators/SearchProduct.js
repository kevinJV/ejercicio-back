'use strict'

class SearchProduct {
  get rules () {
    return {
      // validation rules
      text:"required",
      name:"required",
      description:"required",
    }
  }
}

module.exports = SearchProduct
