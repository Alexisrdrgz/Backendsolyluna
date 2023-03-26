import routerx from 'express-promise-router'
import CategoriaRouter from './Categoria'
import articuloRouter from './articulo'
import UsuarioRouter from './usuario';
import PersonaRouter from './persona'
import IngresoRouter from './ingreso'
import VentaRouter from './venta'
const router = routerx();

router.use('/categoria',CategoriaRouter)
router.use('/articulo',articuloRouter)
router.use('/usuario',UsuarioRouter)
router.use('/persona',PersonaRouter)
router.use('/ingreso', IngresoRouter)
router.use('/venta',VentaRouter)
export default router;