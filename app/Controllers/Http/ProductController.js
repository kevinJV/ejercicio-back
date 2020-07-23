'use strict'

const Product = use('App/Models/Product')

/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   */
  async index ({ request, response }) {
    return response.type(200).json(await Product.all())
  }

  /**
   * Create/save a new product.
   * POST products
   *
   */
  async store ({ request, response }) {
    const { name, image, description, price, quantity } = request.only(['name', 'image','description', 'price', 'quantity'])
    let product = {}

    try {
      product = await Product.create({
        name,
        image,
        description,
        price,
        quantity
      })      
    } catch (error) {
      return response.status(400).json({
        msg: 'The product could not be created',
        error
      })
    }

    return response.status(201).json({
      msg: 'Product created',
      product
    })
  }
  
  /**
   * Search a product by name & description.
   * Get products/search?text=&name=&description=
   *
   */
  async search ({ request, params, response }) {
    const { text, name, description } = request.only(['text', 'name', 'description'])
    
    //The reaseon behind having 3 differents query methods is due to performance, it is better to only send one query insteas of searching first by name, then description
    // but of course the precision is high but the accuracy not so much
    // this could be improved by separating the text by keywords, searching each one and then merging the results, but it seems that the task doesn't need such complexity
    if(name == 'true' && description == 'true'){ //they are not boolean but strings
      const result = await Product.query()
        .where('name', 'ilike', '%'+text+'%').orWhere('description', 'ilike', '%'+text+'%')
        .fetch()
      
      return response.status(200).json({
        msg: 'name & description',
        result
      })

    }else if(name == 'true'){ //they are not boolean but strings
      const result = await Product.query()
        .where('name', 'ilike', '%'+text+'%')
        .fetch()
      
      return response.status(200).json({
        msg: 'name',
        result
      })

    }else if(description == 'true'){ 
      const result = await Product.query()
        .where('description', 'ilike', '%'+text+'%')
        .fetch()
      
      return response.status(200).json({
        msg: 'description',
        result
      })

    }else{
      return response.status(400).json({
        msg: 'Neither name nor description is true'
      })
    }
  }

  /**
   * Display a single product.
   * GET products/:id
   *
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing product.
   * GET products/:id/edit
   *
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   *
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   *
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ProductController