import routerx from 'express-promise-router'
import IngresoController from '../controllers/IngresoController'
import auth from '../middlewares/auth'
const router=routerx();

router.post('/add',auth.verifyAlmacenista, IngresoController.add);
router.get('/query',auth.verifyAlmacenista,IngresoController.query);
router.get('/list',auth.verifyAlmacenista,IngresoController.list);
router.get('/grafico12meses',auth.verificarUsuario,IngresoController.grafico12Meses);
router.get('/consultaFechas',auth.verificarUsuario,IngresoController.consultaFechas);
router.put('/activate',auth.verifyAlmacenista,IngresoController.activate);
router.put('/deactivate',auth.verifyAlmacenista,IngresoController.deactivate);


export default router;