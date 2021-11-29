const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routerCountry = require("./country.js");
const routerActivity = require("./activity.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", routerCountry); // pregutar por el nombre de la ruta
router.use("/activity", routerActivity); // same

module.exports = router;