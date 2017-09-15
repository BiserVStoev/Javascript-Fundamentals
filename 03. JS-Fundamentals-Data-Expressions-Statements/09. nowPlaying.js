function getTrackInfo(data) {

    let [track, artist, duration] = data;

    console.log(`Now Playing: ${artist} - ${track} [${duration}]`);
}

getTrackInfo(['Number One', 'Nelly', '4:09']);