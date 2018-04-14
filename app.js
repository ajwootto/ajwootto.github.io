const express = require("express");
const {email, password} = require("./config.json")

const PlayMusic = require('playmusic');
const pm = new PlayMusic();
pm.init({email, password}, function(err) {
    if(err) console.error(err);
     pm.getAllTracks(function(err, library) {
        const song = library.data.items.pop();
        console.log(song);
        pm.getStreamUrl(song.id, function(err, streamUrl) {
        });
    });
})



const app = express()

app.get('/', (req, res) => {
  console.log("requested")
  res.send("hello");
})

app.get('/search', (req, res) => {
  const {query} = req.params
  pm.search(query, 10, (err, result) => {
    res.json(result);
  })
})

app.listen(3007)