const { flaskResponse } = require("../services/flask-predication.service")

const predicationController = async (req, res) => {
  console.log("Received request body:", req.body); // Debugging line
  try {
    let {
      BMI,
      HighBP,
      HighChol,
      Age,
      PhysActivity,
      HeartDiseaseorAttack,
      GenHlth,
      PhysHlth,
      DiffWalk,
    } = req.body

    let scaleage = Math.round((Age / 100) * 13);

    const flaskArray = [
      BMI,
      HighBP,
      HighChol,
      scaleage,
      PhysActivity,
      HeartDiseaseorAttack,
      GenHlth,
      PhysHlth,
      DiffWalk,
    ]
console.log("Data sent to Flask service:", flaskArray); // Debugging line
    const flaskResult = await flaskResponse(flaskArray)

    return res.send({
      success: true,
      message: "prediction generated",
      data: flaskResult,
    })
  } catch (error) {
    return res.json({
      success: false,
      message: "Server Error",
      error: error?.message,
    })
  }
}

module.exports = { predicationController }
