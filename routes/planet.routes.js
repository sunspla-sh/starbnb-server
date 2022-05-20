const router = require("express").Router();
const Planet = require("../models/Planet.model"); 

router.get("/planets", (req, res, next) => {
  
  Planet.find({ })

    .then((planetsArray) => {
        res.json({planetsArray})
    })
    .catch((err) => {
        console.error(err)
    })
});



router.get("/planet/:planetId", (req, res, next) => {
    
    const myPlanetId = req.params.planetId
    console.log("parsed from route param", myPlanetId);
    // res.send('found planet Id')

    Planet.findById(myPlanetId)

      .then((planet) => {
          res.json(planet)
      })
      .catch((err) => {
          console.error(err)
      })
  });
  







module.exports = router;
