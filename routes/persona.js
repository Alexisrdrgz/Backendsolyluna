import routerx from 'express-promise-router'
import personaController from '../controllers/PersonaController'
import auth from '../middlewares/auth'

const router=routerx();

router.post('/add',auth.verificarUsuario, personaController.add);
router.get('/query',auth.verificarUsuario,personaController.query);
router.get('/list',auth.verificarUsuario,personaController.list);
router.get('/listClientes',auth.verificarUsuario,personaController.listClientes);
router.get('/listProveedores',auth.verificarUsuario,personaController.listProveedores);
router.put('/update',auth.verificarUsuario,personaController.update)
router.delete('/remove',auth.verificarUsuario,personaController.remove);
router.put('/activate',auth.verificarUsuario,personaController.activate);
router.put('/deactivate',auth.verificarUsuario,personaController.deactivate);

export default router;