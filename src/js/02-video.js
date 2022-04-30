import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = throttle(function(e) {
    localStorage.setItem("videoplayer-current-time", e.seconds);
}, 1000);

const videoTime = localStorage.getItem("videoplayer-current-time");

player.on('timeupdate', onPlay);

if(videoTime){
    player.setCurrentTime(videoTime);
}