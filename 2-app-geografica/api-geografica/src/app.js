const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

const routerApi = require('./routes');

app.use(cors());
app.use(express.json());

// END POINT BASE
app.get('/', (req,res)=>{
    res.send("API geografica");
});

routerApi(app);

// Activate port to listen
app.listen(port,()=>{
    console.log(`API running in url http://localhost:${port}`);
});