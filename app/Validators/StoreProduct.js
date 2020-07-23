'use strict'

class StoreProduct {
  get rules () {
    return {
      // validation rules
      name:"required|max:25",
      // image:"required",
      description:"required|max:50",
      price:"required",
      quantity:"required",
    }
  }

  get messages () {
    return {
      'name.required': 'You must provide a name',
      'image.required': 'You must provide a image',
      'description.required': 'You must provide a description',
      'price.required': 'You must provide a price',
      'quantity.required': 'You must provide a quantity',
    }
  }

  get sanitizationRules () {
    return {
      // price: 'to_float', //It seems there is not a numeric rule available, needs more research
      quantity: 'to_int'
    }
  }

}

module.exports = StoreProduct
