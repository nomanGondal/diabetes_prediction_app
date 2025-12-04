const precontrol = async (req, res) => {
  try {
    const flaskArray = [
      req.body.BMI,
      req.body.HighBP,
      req.body.HighChol,
      req.body.Age,
      req.body.PhysActivity,
      req.body.HeartDiseaseorAttack,
      req.body.GenHlth,
      req.body.PhysHlth,
      req.body.DiffWalk,
    ]

    // const flaskResult = await flaskResponse(flaskArray)

    return res.send({
      success: true,
      message: "prediction generated",
      data: {
        hello: "hello",
      },
    })
  } catch (error) {
    return res.json({
      success: false,
      message: "Server Error",
      error: error?.message,
    })
  }
}

module.exports = { precontrol }
