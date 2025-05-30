import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";


app.use(bodyParser.urlencoded({ extended: true }));


const yourBearerToken = process.env.BEARER_TOKEN;
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};




app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});


app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
  
  const secret = req.body.secret;
  const score = req.body.score;
  try{
  const response = await axios.post(API_URL + "/secrets", {
    secret: secret,
    score: score
  }, config)
  res.render("index.ejs", { content: JSON.stringify(response.data) });
  }catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  try{
    const response = await axios.put(API_URL + "/secrets/" + searchId,{
      secret: req.body.secret,
      score: req.body.score
    } ,config);
 
    res.render("index.ejs", { content: JSON.stringify(response.data) });

  }catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
try{
  const response = await axios.patch(API_URL+ "/secrets/" + searchId, {
    secret: req.body.secret,
    score: req.body.score
  }, config);
  res.render("index.ejs", { content: JSON.stringify(response.data) });
}catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const response = await axios.delete(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
