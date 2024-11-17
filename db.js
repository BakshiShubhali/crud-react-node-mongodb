const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://127.0.0.1:27017/crud-with-mongodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (!err) {
        console.log("mongodb://127.0.0.1:27017/crud-with-mongodb");
        console.log('MongoDB Connected.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
    
});

