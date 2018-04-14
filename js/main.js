var PlayMusic = require('playmusic');
var pm = new PlayMusic();
pm.init({email: "superadamw00t@gmail.com", password: "St@rwarsmod11"}, function(err) {
    if(err) console.error(err);
     pm.getAllTracks(function(err, library) {
        var song = library.data.items.pop();
        console.log(song);
        pm.getStreamUrl(song.id, function(err, streamUrl) {
            console.log(streamUrl);
        });
    });
})