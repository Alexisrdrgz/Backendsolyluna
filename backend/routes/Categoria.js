import routerx from 'express-promise-router'
import CategoriaController from '../controllers/CategoriaController'
import auth from '../middlewares/auth'
const router=routerx();

router.post('/add',auth.verifyAlmacenista, CategoriaController.add);
router.get('/query',auth.verifyAlmacenista,CategoriaController.query);
router.get('/list',auth.verifyAlmacenista,CategoriaController.list);
router.put('/update',auth.verifyAlmacenista,CategoriaController.update)
router.delete('/remove',auth.verifyAlmacenista,CategoriaController.remove);
router.put('/activate',auth.verifyAlmacenista,CategoriaController.activate);
router.put('/deactivate',auth.verifyAlmacenista,CategoriaController.deactivate);

export default router;