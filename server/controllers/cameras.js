
import cameras from "../models/camerasModel"
const getCameras =async function(ctx){
    const id = ctx.params.id // 获取url里传过来的参数里的id
    const result = await cameras.getCamseraById(id) // 通过await “同步”地返回查询结果
    ctx.body = {
      success: true,
      result // 将请求的结果放到response的body里返回
    }
}

export default {
    getCameras
}