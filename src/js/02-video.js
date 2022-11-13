import Player from '@vimeo/player';

const IFRAME = document.querySelector('iframe');
const player = new Player(IFRAME);

player.on('timeupdate', () => {
  player.getCurrentTime().then(time => {
    localStorage.setItem('videoplayer-current-time', time);
  });
});

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
