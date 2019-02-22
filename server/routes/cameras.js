import cameras from "./../controllers/cameras"
import koaRouter from 'koa-router'
const cameraRoutes = koaRouter()

cameraRoutes.get('/camera/:id', cameras.getCameras)



export default cameraRoutes