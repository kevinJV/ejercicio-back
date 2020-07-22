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
  async index ({ request, response, view }) {
  }

  /**
   * Create/save a new product.
   * POST products
   *
   */
  async store ({ request, response }) {
    const { name, image, description, price, quantity } = request.only(['name', 'description', 'price', 'quantity'])
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
      return response.status(404).json({
        msg: 'The product could not be created',
        error
      })
    }

    return response.status(201).json({
      msg: 'Producto creado',
      product
    })
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