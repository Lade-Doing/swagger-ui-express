const express = require('express')
//定义路由
const productList = express.Router()
const ProductionController = require('../controller/production');

// 首页
productList.get('/test', function (req, res) {
  res.send('Welcome to the production!')
})
//查询所有记录
/**
 * @swagger
 *
 * /productList/list:
 *   get:
 *     tags:
 *        - production
 *     summary: all
 *     description: all
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful operation
 *       500:
 *         description: Error operation
 */
productList.get('/list', ProductionController.findAll)

/**
 * @swagger
 * /productList/find:
 *   get:
 *     tags:
 *        - production
 *     summary: simple
 *     description: simple
 *     parameters:
 *       - name: id
 *         in: query
 *         description: simple id
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successful operation
 *       500:
 *         description: Error operation
 */
productList.get('/find', ProductionController.findById)

/**
 * @swagger
 * /productList/add:
 *   post:
 *     tags:
 *        - production
 *     summary: new
 *     description: new
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: commodity
 *         description: newshoping
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - type
 *             - description
 *           properties:
 *             type:
 *               type: string
 *               description: sort
 *             description:
 *               type: string
 *               description: des
 *     responses:
 *       200:
 *         description: Successful operation
 *       500:
 *         description: Error operation
 */

productList.post('/add', ProductionController.create)
module.exports = productList
