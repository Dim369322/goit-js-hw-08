import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = throttle(function(e) {
    localStorage.setItem("videoplayer-current-time", e.seconds);
}, 1000);

const videoTime = localStorage.getItem("videoplayer-current-time");

player.on('timeupdate', onPlay);

player.setCurrentTime(videoTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});