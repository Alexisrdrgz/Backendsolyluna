import routerx from 'express-promise-router'
import usuarioController from '../controllers/UsuarioController'
import auth from '../middlewares/auth'

const router=routerx();

router.post('/add',auth.verifyAdmin, usuarioController.add);
router.get('/query',auth.verifyAdmin,usuarioController.query);
router.get('/list',auth.verifyAdmin,usuarioController.list);
router.put('/update',auth.verifyAdmin,usuarioController.update)
router.delete('/remove',auth.verifyAdmin,usuarioController.remove);
router.put('/activate',auth.verifyAdmin,usuarioController.activate);
router.put('/deactivate',auth.verifyAdmin,usuarioController.deactivate);
router.post('/login', usuarioController.login);

export default router;