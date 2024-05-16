const router = require('express').Router()
const ClientController = require('../controllers/Client')



// Route for Save a new Client


router.post('/create',ClientController.create)

// Route for Get All Clients from database
router.get('/', ClientController.getAll);

// Route for Get One Client from database by id
router.get('/:clientId', ClientController.getById);

// Route for Update a Client
router.put('/:clientId', ClientController.Update);

// Route for Delete a Client
router.delete('/:clientId', ClientController.delete);

module.exports = router
