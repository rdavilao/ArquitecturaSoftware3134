const mongoose = require('mongoose');

const URI = 'mongodb://localhost/corebancario';

mongoose.connect(URI)
    .then(db => console.log("Base conectada"))
    .catch(err => console.log(err));

module.exports = mongoose;