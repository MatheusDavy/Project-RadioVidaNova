export const formatSeconds = (seconds: number): string => {
  let mins = parseInt(seconds / 60)
    .toString()
    .padStart(2, '0');
  let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
};

export const tracks = [
  {
    id: 'radio-master-audio',
    url: 'http://142.44.137.193:8376/stream',
    artist: 'Radio Master',
    artwork:
      'https://img.freepik.com/free-vector/glowing-musical-pentagram-background-with-sound-notes_1017-31220.jpg',
    isLiveStream: true,
  },
];
