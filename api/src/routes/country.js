const router = require ('express').Router ();
const axios = require ('axios');
const {Op} = require ('sequelize');
const {Country, Activity} = require ('../db');

// [ ] GET /countries:
// En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
// Obtener un listado de los paises.

// [ ] GET /countries?name="...":
// Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
// Si no existe ningún país mostrar un mensaje adecuado

router.get ('/', async (req, res) => {
    const {name} = req.query;
    try{
        if (name){
            let country = await Country.findAll ({
                include: {model: Activity},
                where: {name: {[Op.ilike]: `%${name}%`}}
            });
            return country? res.json (country) : res.status (404).json ({message: 'No hay paises con ese nombre'});
        } else {
            let auxCountries = await axios.get(`https://restcountries.com/v2/all`); //que tipo de comillas usar?
            await Promise.all (auxCountries.data.map ( (el) => {
                let info = {
                    id: el.alpha3Code,
                    name: el.name, //ponemos un string vacio por si la api no pasa el dato
                    capital: el.capital? el.capital : "no capital",
                    flag: el.flag,
                    region: el.region,
                    subregion: el.subregion,
                    area: parseInt (el.area)? parseInt (el.area) : 0,
                    population: parseInt (el.population)? parseInt (el.population) : 0,
                };
                Country.findOrCreate( {where: info} ); //encontrar o crear un pais que contenga info
            })
            );
            return res.status(201).json("DataBase Created!"); //colsutar sobre el message ese <-------
            
        }
    } catch (error) {
        res.status(505).send(error); //http not suported
    }
});
router.get ('/all', async (req, res) => {
    try{
        let countries = await Country.findAll ({
            include: {model: Activity},
        });
        return res.json (countries);
    }
    catch (error) {
        res.status(505).send(error); //http not suported
    }
});

// [ ] GET /countries/{idPais}:
// Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes
router.get ('/:idPais', async (req, res) => {
    try{
        let {idPais} = req.params;
        let country = await Country.findByPk (idPais.toUpperCase (), {
        include: {model: Activity},
        });
        country? res.json (country) : res.status (404).json ('No hay paises con ese id');
    } catch (error) {
        res.status(505).send(error);
    }
});

module.exports = router;