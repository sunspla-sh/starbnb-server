const mongoose = require('mongoose');
const model = mongoose.model;
const Schema = mongoose.Schema;

const planetSchema = new Schema(
{ 
    name: String,
    pricePerNight: Number,
    image: { 
          type: String, 
          default: "https://www.denofgeek.com/wp-content/uploads/2021/04/star-wars-coruscant.jpg?resize=1024,576",    
      },
    //   image2: { 
    //     type: String, 
    //     default: "https://www.syfy.com/sites/syfy/files/styles/blog-post-embedded--tablet/public/2022/02/8944_1-pia24546-1280.jpg",    
    // },
   
    reviews: [ { type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  
	orbital_period: String,
	rotation_period: String,
	diameter: String,
	climate: String,
	gravity: String,
	terrain: String,
	surface_water: String,
	population: String,
	residents: [ String ],
	films: [ String ],
	created: String,
	edited: String,
	url: String,
        
})




const Planet = model('Planet', planetSchema);

module.exports = Planet;

