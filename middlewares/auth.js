import tokenService from "../services/token";
export default {
  verificarUsuario: async (req, res, next) => {
    if (!req.headers.token) {
      return res.status(404).send({
        message: "No token",
      });
    }
    const response = await tokenService.decode(req.headers.token);
    if (
      response.rol == "Administrador" ||
      response.rol == "Vendedor" ||
      response.rol == "Almacenista"
    ) {
      next();
    } else {
      return res.status(403).send({
        message: "No autorizado",
      });
    }
  },
  verifyAdmin: async (req, res, next) => {
    if (!req.headers.token){
        return res.status(404).send({
            message: 'No token'
        });
    }
    const response=await tokenService.decode(req.headers.token);
    if (response.rol =='Administrador'){
        next();
    } else{
        return res.status(403).send({
            message: 'No autorizado'
        });
    }
  },
  verifyAlmacenista: async (req, res, next) => {
    if (!req.headers.token) {
      return res.status(404).send({
        message: "No token",
      });
    }
    const response = await tokenService.decode(req.headers.token);
    if (response.rol == "Administrador" || response.rol == "Almacenista") {
      next();
    } else {
      return res.status(403).send({
        message: "No autorizado",
      });
    }
  },
  verifyVendedor: async (req, res, next) => {
    if (!req.headers.token) {
      return res.status(404).send({
        message: "No token",
      });
    }
    const response = await tokenService.decode(req.headers.token);
    if (response.rol == "Administrador" || response.rol == "Vendedor") {
      next();
    } else {
      return res.status(403).send({
        message: "No autorizado",
      });
    }
  },
};
