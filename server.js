const express = require('express');
var bodyParser = require('body-parser')

const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

class leaderbord {
  constructor(){
    this.scores = []; //Has to be list to be sorted.
  }

  exists(username){
    for(let i=0; i<this.scores.length; i++){
      if(this.scores[i][0] == username){
        return true;
      }
    }
    return false;
  }

  addScore(username, score){
    if(this.exists(username)){
      return false;
    }
    this.scores.push([username, score]);
    return true;
  }

  getScores(){
    let orderedScores = this.scores.sort((a, b) => {
      return a[1]-b[1];
    });
    return orderedScores;
  }

  formatScores(){
    let responseText = "";
    let scores = this.getScores();
    for(let i=0; i<scores.length; i++){
      responseText += `<html><body>${i+1}. ${scores[i][0]}: ${scores[i][1]} Correct <br></body></html>`;
    }
    return responseText;
  }
}


const GAME_LEADERBOARD = new leaderbord();



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
})

app.post('/submitscore', (req, res) => {
  console.log(req.body);
  let username = req.body.username;
  if(username != ''){
    let score = req.body.score;
    GAME_LEADERBOARD.addScore(username, score);
  }
  res.send("received");
});

app.get('/leaderboard', (re1, res) => {
  res.send(GAME_LEADERBOARD.formatScores());
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})