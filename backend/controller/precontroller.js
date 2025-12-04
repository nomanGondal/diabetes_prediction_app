const { flaskResponse } = require("../services/flask-predication.service")

const predicationController = async (req, res) => {
  try {
    const {
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

    const flaskArray = [
      BMI,
      HighBP,
      HighChol,
      Age,
      PhysActivity,
      HeartDiseaseorAttack,
      GenHlth,
      PhysHlth,
      DiffWalk,
    ]

    const flaskResult = await flaskResponse(flaskArray)

    return res.send({
      success: true,
      message: "prediction generated",
      data: {
        hello: "we got you broh",
      },
      flaskResult,
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
