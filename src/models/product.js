const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    
  title: { 
    type: String, 
    required: true,
    trim: true 
  },

  image: { 
    type: String, 
    required: true 
  },

  text: { 
    type: String, 
    required: true,
    trim: true 
  },

  category: { 
    type: Array,
    required: true
  },

  price: { 
    type: Number, 
    required: true 
  }
}, 
  {versionKey: false}
);

const Product = mongoose.model('Product', productSchema)
module.exports = Product