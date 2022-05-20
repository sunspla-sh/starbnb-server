const router = require("express").Router();
const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const Stay = require("../models/Stay.model.js");
const User = require("../models/User.model.js");


// router.get("/planets", (req, res, next) => {
  
//   Planet.find({ })

//     .then((planetsArray) => {
//         res.json({planetsArray})
//     })
//     .catch((err) => {
//         console.error(err)
//     })
// });



// router.get("/planet/:planetId", (req, res, next) => {
    
//     const myPlanetId = req.params.planetId
//     console.log("parsed from route param", myPlanetId);
//     // res.send('found planet Id')

//     Planet.findById(myPlanetId)

//       .then((planet) => {
//           res.json(planet)
//       })
//       .catch((err) => {
//           console.error(err)
//       })
//   });
  
router.get("/stays", isAuthenticated, (req, res, next) => {
    const userId = req.payload._id

    User.findById(userId)
    // .populate("stays")

    .populate({
        path: "stays",
        populate: {
        path: "planet"
        }
    })
        
         .then((foundUser)=>{
            console.log("found user", foundUser)
            res.json(foundUser)
        })   

        .catch((err) => {
            console.error(err)
        })


})


router.post("/stay", isAuthenticated, (req, res, next) => {
const { planet, startDate, endDate, totalPrice } = req.body;

const userId = req.payload._id;
Stay.create({
    planet, 
    startDate, 
    endDate, 
    totalPrice,
    guest: userId
})

    .then((newStay =>{
        console.log(newStay)
        User.findByIdAndUpdate(userId, { $push: { stays: newStay._id}})
            .then(() => {
                res.json(newStay)
            })
            .catch((err) => {
                console.error(err)
            })

    }))

    .catch((err) => {
        console.error(err)
    })

})











module.exports = router;