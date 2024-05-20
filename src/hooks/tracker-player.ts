export const formatSeconds = (seconds: number): string => {
  let mins = parseInt(seconds / 60)
    .toString()
    .padStart(2, '0');
  let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
};

export const tracks = [
  {
    id: 'radio-vida-nova',
    url: 'http://142.44.137.193:8376/stream',
    artist: 'Radio Vida Nova',
    artwork: 'https://i.ibb.co/sF5XC6Z/artwork-radio-aparecida.png',
    isLiveStream: true,
  },
];
