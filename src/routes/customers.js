// customers.js
const express = require('express');
const router = express.Router();

// Importamos el controlador
const customerController = require('../controllers/customerController');

// Definimos la ruta para obtener la lista de clientes
router.get('/', customerController.list);

router.post('/add', customerController.save);


router.get('/update/:id',customerController.edit)//

router.post('/update/:id', customerController.update);




router.get('/delete/:id', customerController.delete);




module.exports = router;




