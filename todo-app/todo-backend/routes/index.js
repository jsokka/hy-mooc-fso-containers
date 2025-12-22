const express = require('express');
const router = express.Router();
const { getAsync } = require('../redis')

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

/* GET statistics. */
router.get('/statistics', async (_, res) => {
  const addedTodos = parseInt(await getAsync('added_todos') || 0)
  res.json({
    addedTodos
  })
})

module.exports = router;
