const express = require("express")
const app = express()
const port = 3000
const predict = require("./router/predict.js")
const cors = require("cors")
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello World!")
})
app.use("/prediction", predict)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
