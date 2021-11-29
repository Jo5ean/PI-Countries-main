const router = require('express').Router();
const {Op} = require('sequelize');
const {Contry , Activity} = require('../db');

// [ ] POST /activity:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos

router.post('/country', async (req, res) => {
    let {name, dificulty, duration} = req.body;

    try {
        let auxActivity = await Activity.findeOrCreate({
            where: {
                name,
                dificulty,
                duration,
            }
        });
        let auxCountry = await Contry.findAll({
            include: {model: Activity},
            where: { name: {[Op.iLike]: `%{country}%`} }
        });
        await auxActivity[0].addActivity(auxCountry[0]);
        res.json(auxActivity)
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;