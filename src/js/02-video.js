import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
const savedTime = localStorage.getItem(STORAGE_KEY);

if (savedTime) {
  player.setCurrentTime(savedTime);
}

player.on(
  'timeupdate',
  throttle(onPlay, 1000)
);

function onPlay(e) {
  localStorage.setItem(STORAGE_KEY, e.seconds);
  if (e.seconds === e.duration) {
    localStorage.setItem(STORAGE_KEY, 0);
  }
}


