import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
};

player.on('timeupdate', throttle(onPlay, 1000));

const dateVideo = JSON.parse(localStorage.getItem('videoplayer-current-time'));

player
  .setCurrentTime(dateVideo.seconds)
  .then(function (seconds) {
    seconds = dateVideo.seconds;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log('RangeError');
        break;

      default:
        console.log('Error');
        break;
    }
  });

console.log();
