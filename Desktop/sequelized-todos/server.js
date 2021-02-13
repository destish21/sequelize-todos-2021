const express = require("express")
const db = require("./models")
const routes = require("./api/routes")
const PORT = 3000
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))

db.sequelize.sync().then(()=>{
    app.listen(PORT, ()=> {
        console.log("App listening on PORT " + PORT);
      });
      
})

