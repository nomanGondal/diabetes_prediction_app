const flaskResponse = async (dataArray) => {
  const response = await fetch("http://localhost:5000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: dataArray }),
  });

  const result = await response.json();
  return result;
};

module.exports = { flaskResponse };
