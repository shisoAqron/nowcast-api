const express = require("express")
const nowCast = require('./now-cast');

const app = express()

app.get("/:diff/:lng/:lat", (req, res) => {
    console.log(req.params);

    nowCast.getPrecipitation(req.params.diff, req.params.lng, req.params.lat)
    .then( data =>  {
        res.send(data)
    })
})

app.listen(3000)
