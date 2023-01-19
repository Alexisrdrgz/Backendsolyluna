import routerx from 'express-promise-router';
import articuloController from '../controllers/ArticuloController';
import auth from '../middlewares/auth'
const router=routerx();

router.post('/add',auth.verifyAlmacenista,articuloController.add);
router.get('/query',auth.verifyAlmacenista,articuloController.query);
router.get('/queryCodigo',auth.verificarUsuario,articuloController.queryCodigo);
router.get('/list',auth.verifyAlmacenista,articuloController.list);
router.put('/update',auth.verifyAlmacenista,articuloController.update);
router.delete('/remove',auth.verifyAlmacenista,articuloController.remove);
router.put('/activate',auth.verifyAlmacenista,articuloController.activate);
router.put('/deactivate',auth.verifyAlmacenista,articuloController.deactivate);

export default router;