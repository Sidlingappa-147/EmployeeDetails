import Router from 'express';
const router = Router();
import employeeController from './employee.controller.js';

router.post('/add', employeeController.addEmployee);
router.put('/update', employeeController.updateEmployee);
router.delete('/delete',employeeController.deleteEmployee);
router.get('/fetchAll', employeeController.findAllEmployee)


export default router;