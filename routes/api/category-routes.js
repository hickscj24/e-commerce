const router = require('express').Router();
const { Category, Product } = require('../../models');


// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll()
    .then((categories) => res.json(categories))
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  
  
  Category.findOne({
    where: {
      id: req.params.id
    }
  })
    .then((categories) => res.json(categories))
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
});

router.post('/', (req, res) => {
  Category.create(req.body)
    .then((category) => res.status(200).json(category))
    .catch((err) => {
      console.log(err)
      res.status(400).json(err)
    })
  // create a new category

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((updatedCategory) => res.json(updatedCategory))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy( {
    where: {
      id: req.params.id,
    },
  })
  .then((deleteCategory) => res.json(deleteCategory))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
