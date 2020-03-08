'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Estoque extends Model {
  produtos () {
    return this
      .belongsToMany('App/Models/Produto')
  }
}

module.exports = Estoque
