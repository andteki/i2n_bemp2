const Router = require('express');
const router = Router();
const EmpController = require('./controllers/empController');

router.get('/employees', EmpController.index);
router.post('/employees', EmpController.store);

module.exports = router;