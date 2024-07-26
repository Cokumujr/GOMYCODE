
const movies =[
    {
    id: 1,
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption in each other through friendship and hope.',
    posterURL: 'https://c8.alamy.com/comp/2JH2MYR/robbinsposter-the-shawshank-redemption-1994-2JH2MYR.jpg', 
    rating: 9.3,
    trailerUrl: 'https://youtu.be/PLl99DlL6b4?si=EO9VPpuqigL17fSr'
  },
  {
    id: 2,
    title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, a gangster, and his wife, passionately pursued by four mobsters.',
    posterURL: 'https://wallpapercat.com/w/full/f/4/e/176568-1872x2500-iphone-hd-pulp-fiction-wallpaper-photo.jpg',
    rating: 9.0,
    trailerUrl: 'https://youtu.be/tGpTpVyI_OQ?si=tgPoVrv5l70ekJBS'
  },
  {
    id: 3,
    title: 'The Godfather',
    description: 'The aging patriarch of an Italian-American family moves to New York City and struggles to live up to his customs.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    rating: 9.2,
    trailerUrl: 'https://youtu.be/UaVTIH8mujA?si=y2pa8XS6FPtD1SON'
  },
  {
    id: 4,
    title: 'The Dark Knight',
    description: 'Batman raises the stakes in Gotham City when his own life is threatened by criminal mastermind Bane.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    rating: 9.0,
    trailerUrl: 'https://youtu.be/EXeTwQWrcwY?si=wd_5qzDWVWysDKBV'
  },
  {
    id: 5,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    description: 'A hobbit, Frodo Baggins, and Samwise Gamgee embark on a journey to destroy the One Ring to save Middle-earth.',
    posterURL: 'https://m.media-amazon.com/images/I/81EBp0vOZZL._AC_UF894,1000_QL80_.jpg',
    rating: 8.9,
    trailerUrl: 'https://youtu.be/_nZdmwHrcnw?si=Yx2zzHNnpmUZTxsx'
  },
  {
    id: 6,
    title: 'The Lord of the Rings: The Two Towers',
    description: 'The second book in the Lord of the Rings trilogy, this part of the story follows Frodo Baggins and Samwise Gamgee as they face the final battle against the One Ring.',
    posterURL: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/21b866100905361.5f130219321ac.jpg',
    rating: 8.9,
    trailerUrl: 'https://youtu.be/nuTU5XcZTLA?si=O_9cMChuKXGV59c5'
  },
  {
    id: 7,
    title: 'The Lord of the Rings: The Return of the King',
    description: 'The third book in the Lord of the Rings trilogy, this part of the story follows the defeat of the One Ring and the arrival of the fellowship on the precipice of a new dawn.',
    posterURL: 'https://filmartgallery.com/cdn/shop/products/The-Lord-of-the-Rings-The-Return-of-the-King-Vintage-Movie-Poster-Original-1-Sheet-27x41.jpg?v=1665735682',
    rating: 8.9,
    trailerUrl: 'https://youtu.be/zckJCxYxn1g?si=YJstEpxErT-0VEj-'
  },
  {
    id: 8,
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-like abilities.',
    posterURL: 'https://m.media-amazon.com/images/I/71DwIcSgFcS.jpg',
    rating: 8.8,
    trailerUrl: 'https://youtu.be/5EiV_HXIIGs?si=i6ouQIrvO6epVBiG'
  },
  {
    id: 9,
    title: 'Interstellar',
    description: 'A team of astronauts travel through space, encounter alien life forms, and return to Earth.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX190_CR0,0,190,281_.jpg',
    rating: 9.2,
    trailerUrl: 'https://youtu.be/zSWdZVtXT7E?si=OG19Ts-jIpZ4kbMM'
  },
  {
    id: 10,
    title: 'The Matrix',
    description: 'A computer hacker learns from his former employer about the true nature of reality and its consequences.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    rating: 8.7,
    trailerUrl: 'https://youtu.be/nUEQNVV3Gfs?si=B3rq7_MYb-bZTeXy'
  },
  {
    id:11,
    title: 'Training Day',
    description: 'A man is given a chance to prove himself and his skills to a mentor.',
    posterURL: 'https://lh3.googleusercontent.com/proxy/vdLHTSljHrpudFd5yE5XbSkp0vmfjfhKOLYEwcGzfhVqko8A8VD0bBlquGExdzoegrM2uvAcACZ92CvUh0fW0B3diMrHnDkzXKlUSEp-dAN7m3c',
    rating: 8.8,
    trailerUrl: 'https://youtu.be/VQ-SCoyUwfg?si=KniWZOlxhX0nviGq'
  },
  {
    id: 12,
    title: 'Eternal Sunshine of the Spotless Mind',
    description: 'A woman struggles to find her identity after losing her job and her parents.',
    posterURL: 'https://wallpapercat.com/w/full/9/4/0/184283-2000x3000-iphone-hd-eternal-sunshine-of-the-spotless-mind-background.jpg',
    rating: 8.3,
    trailerUrl: 'https://youtu.be/07-QBnEkgXU?si=akQe7fRFxnD2_i3T'
  },
];

export default movies;