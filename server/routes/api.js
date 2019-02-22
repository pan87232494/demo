

import koaRouter from 'koa-router'
import cameraRoutes from './cameras'
const router = koaRouter()
router.use("/cameras",cameraRoutes.routes())


export default router