export interface Song {
  id: string
  name: string
  services: Record<string, { url: string; linkText: string }>
}

export const songsAndAlbums: Record<string, Song> = {
  'the-encounter': {
    id: 'the-encounter',
    name: 'The Encounter',
    services: {
      spotify: {
        url: 'https://open.spotify.com/track/6kpSuUS7qEngZwcGxwgwLu',
        linkText: 'Stream on Spotify >',
      },
      bandcamp: {
        url: 'https://osirisdreams.bandcamp.com/track/the-encounter',
        linkText: 'Buy or stream on BandCamp >',
      },
      youtube: {
        url: 'https://www.youtube.com/watch?v=YPP2mC0I_l8',
        linkText: 'Music video on YouTube >',
      },
      applemusic: {
        url: 'https://music.apple.com/se/album/the-encounter-single/1795008798?app=music',
        linkText: 'Buy or stream on Apple Music >',
      },
      'youtube-music': {
        url: 'https://music.youtube.com/watch?v=YPP2mC0I_l8',
        linkText: 'Stream on YouTube Music >',
      },
    },
  },
  'dark-city': {
    id: 'dark-city',
    name: 'Dark City',
    services: {
      spotify: {
        url: 'https://open.spotify.com/track/2OE4Iow5JK5hC2cfffxX7x',
        linkText: 'Stream on Spotify >',
      },
      bandcamp: {
        url: 'https://osirisdreams.bandcamp.com/track/dark-city',
        linkText: 'Buy or stream on BandCamp >',
      },
      youtube: {
        url: 'https://www.youtube.com/watch?v=4_MB1zDAck0',
        linkText: 'Music video on YouTube >',
      },
      applemusic: {
        url: 'https://music.apple.com/se/album/dark-city-single/1776912551?app=music',
        linkText: 'Buy or stream on Apple Music >',
      },
      'youtube-music': {
        url: 'https://music.youtube.com/browse/MPREb_gCJFr3olfnv',
        linkText: 'Stream on YouTube Music >',
      },
      funkwhale: {
        url: 'https://open.audio/library/tracks/435916/',
        linkText: 'Stream for free on Open.Audio >',
      },
    },
  },
  'hyper-dimensional-racing': {
    id: 'hyper-dimensional-racing',
    name: 'Hyper-Dimensional Racing',
    services: {
      spotify: {
        url: 'https://open.spotify.com/track/4TmojlVjeDul4VAbOYiA3u',
        linkText: 'Stream on Spotify >',
      },
      bandcamp: {
        url: 'https://osirisdreams.bandcamp.com/track/hyper-dimensional-racing',
        linkText: 'Buy or stream on BandCamp >',
      },
      youtube: {
        url: 'https://www.youtube.com/watch?v=TIAroPUxSgg',
        linkText: 'Stream on YouTube >',
      },
      applemusic: {
        url: 'https://music.apple.com/se/album/hyper-dimensional-racing-single/1762564284?app=music',
        linkText: 'Buy or stream on Apple Music >',
      },
      'youtube-music': {
        url: 'https://music.youtube.com/browse/MPREb_rUZgNndEnrW',
        linkText: 'Stream on YouTube Music >',
      },
      funkwhale: {
        url: 'https://open.audio/library/tracks/435914/',
        linkText: 'Stream for free on Open.Audio >',
      },
    },
  },
  'driving-alone': {
    id: 'driving-alone',
    name: 'Driving Alone',
    services: {
      spotify: {
        url: 'https://open.spotify.com/track/0QYNw0ZU70Qzww19ljsmoN',
        linkText: 'Stream on Spotify >',
      },
      bandcamp: {
        url: 'https://osirisdreams.bandcamp.com/track/driving-alone',
        linkText: 'Buy or stream on BandCamp >',
      },
      applemusic: {
        url: 'https://music.apple.com/se/album/driving-alone/1661704156?app=music',
        linkText: 'Buy or stream on Apple Music >',
      },
      youtube: {
        url: 'https://www.youtube.com/watch?v=lFV3JpZrmlU',
        linkText: 'Stream on YouTube >',
      },
      'youtube-music': {
        url: 'https://music.youtube.com/watch?v=lFV3JpZrmlU',
        linkText: 'Stream on YouTube Music >',
      },
      funkwhale: {
        url: 'https://open.audio/library/tracks/375473/',
        linkText: 'Stream for free on Open.Audio >',
      },
    },
  },
  'the-cybergenix-conspiracy': {
    id: 'the-cybergenix-conspiracy',
    name: 'The Cybergenix Conspiracy EP',
    services: {
      spotify: {
        url: 'https://open.spotify.com/album/1U3Z3BgAIBxUi39Fo6R0A7',
        linkText: 'Stream on Spotify >',
      },
      bandcamp: {
        url: 'https://osirisdreams.bandcamp.com/album/the-cybergenix-conspiracy',
        linkText: 'Buy or stream on BandCamp >',
      },
      applemusic: {
        url: 'https://music.apple.com/album/the-cybergenix-conspiracy-ep/1740412260?app=music',
        linkText: 'Buy or stream on Apple Music >',
      },
      youtube: {
        url: 'https://www.youtube.com/watch?v=lriT9Y8kqTg&list=PLQGymPL65les27MBwkLn1XTK2rz4U-fxE&index=1',
        linkText: 'Stream on YouTube >',
      },
      'youtube-music': {
        url: 'https://music.youtube.com/playlist?list=OLAK5uy_njvdl0C8IQ1f4QbATtb8G1-Bx95EZkPcY',
        linkText: 'Stream on YouTube Music >',
      },
      funkwhale: {
        url: 'https://open.audio/library/albums/21093',
        linkText: 'Stream for free on Open.Audio >',
      },
    },
  },
  'skiing-on-the-moon': {
    id: 'skiing-on-the-moon',
    name: 'Skiing on the Moon',
    services: {
      spotify: {
        url: 'https://open.spotify.com/track/24YFCXxSkjdkswhg8CxGaU',
        linkText: 'Stream on Spotify >',
      },
      bandcamp: {
        url: 'https://osirisdreams.bandcamp.com/track/skiing-on-the-moon',
        linkText: 'Buy or stream on BandCamp >',
      },
      applemusic: {
        url: 'https://music.apple.com/album/skiing-on-the-moon-single/1665397557?app=music',
        linkText: 'Buy or stream on Apple Music >',
      },
      youtube: {
        url: 'https://www.youtube.com/watch?v=CprrGAHoAIQ',
        linkText: 'Stream on YouTube >',
      },
      'youtube-music': {
        url: 'https://music.youtube.com/browse/MPREb_K2zflOnrmTo',
        linkText: 'Stream on YouTube Music >',
      },
      funkwhale: {
        url: 'https://open.audio/library/tracks/381542',
        linkText: 'Stream for free on Open.Audio >',
      },
    },
  },
  '3-am-6502-debugging': {
    id: '3-am-6502-debugging',
    name: '3 AM 6502 Debugging',
    services: {
      spotify: {
        url: 'https://open.spotify.com/track/0is4c6lMitziyqb5PedtIJ',
        linkText: 'Stream on Spotify >',
      },
      bandcamp: {
        url: 'https://osirisdreams.bandcamp.com/track/3-am-6502-debugging',
        linkText: 'Buy or stream on BandCamp >',
      },
      applemusic: {
        url: 'https://music.apple.com/se/album/3-am-6502-debugging-single/1700141452?app=music',
        linkText: 'Buy or stream on Apple Music >',
      },
      youtube: {
        url: 'https://www.youtube.com/watch?v=j8WDnPw-0Z8',
        linkText: 'Stream on YouTube >',
      },
      'youtube-music': {
        url: 'https://music.youtube.com/browse/MPREb_IrF7TcXR9Ft',
        linkText: 'Stream on YouTube Music >',
      },
    },
  },
  'light-cycle-arena': {
    id: 'light-cycle-arena',
    name: 'Light-Cycle Arena',
    services: {
      spotify: {
        url: 'https://open.spotify.com/track/2VIo6bcV1Dm0qh50uJjQ6T',
        linkText: 'Stream on Spotify >',
      },
      bandcamp: {
        url: 'https://osirisdreams.bandcamp.com/track/light-cycle-arena',
        linkText: 'Buy or stream on BandCamp >',
      },
      applemusic: {
        url: 'https://music.apple.com/se/album/light-cycle-arena-single/1680362586?app=music',
        linkText: 'Buy or stream on Apple Music >',
      },
      youtube: {
        url: 'https://www.youtube.com/watch?v=nUq0qZZKKNI',
        linkText: 'Stream on YouTube >',
      },
      'youtube-music': {
        url: 'https://music.youtube.com/browse/MPREb_PAw2l9nXUxq',
        linkText: 'Stream on YouTube Music >',
      },
      funkwhale: {
        url: 'https://open.audio/library/tracks/394593',
        linkText: 'Stream for free on Open.Audio >',
      },
    },
  },
  'hyperspace-sunday-cruise': {
    id: 'hyperspace-sunday-cruise',
    name: 'Hyperspace Sunday Cruise',
    services: {
      spotify: {
        url: 'https://open.spotify.com/track/3omNrdYSuhzOIYFVv6j71d',
        linkText: 'Stream on Spotify >',
      },
      bandcamp: {
        url: 'https://osirisdreams.bandcamp.com/track/hyperspace-sunday-cruise',
        linkText: 'Buy or stream on BandCamp >',
      },
      applemusic: {
        url: 'https://music.apple.com/se/album/hyperspace-sunday-cruise-single/1656225285?app=itunes',
        linkText: 'Buy or stream on Apple Music >',
      },
      youtube: {
        url: 'https://www.youtube.com/watch?v=EAm7mhZvDeA',
        linkText: 'Stream on YouTube >',
      },
      'youtube-music': {
        url: 'https://music.youtube.com/browse/MPREb_mxV7tljuzG3',
        linkText: 'Stream on YouTube Music >',
      },
      funkwhale: {
        url: 'https://open.audio/library/tracks/365038',
        linkText: 'Stream for free on Open.Audio >',
      },
    },
  },
}
