export const moviesData = [
  {
    id: 1,
    title: 'Bonaerense, El',
    year: 2004,
    genre: 'Action|Drama',
    poster: 'http://dummyimage.com/400x600.jpg/ff4444/ffffff',
    // maybe just have in cinema mock data and query movie by ID, so dont need to copy logic twice
    cinemasPlaying: [
      { id: 1, name: '', showtimes: ['11:05 AM', '2:56 PM', '6:39 PM'] }
    ]
    // movies: [{id: 1, showtimes: ['11:05 AM', '2:56 PM', '6:39 PM'] }]
    // filter through list with movie id to get times
  },
  {
    id: 2,
    title: 'Fred Claus',
    year: 1997,
    genre: 'Children|Comedy|Fantasy',
    poster: 'http://dummyimage.com/400x600.jpg/cc0000/ffffff',
    showtimes: ['2:33 PM', '6:39 PM', '2:15 PM']
  },
  {
    id: 3,
    title: "Princess Ka'iulani",
    year: 1999,
    genre: 'Drama|Romance',
    poster: 'http://dummyimage.com/400x600.jpg/cc0000/ffffff',
    showtimes: ['12:18 PM', '11:16 AM', '12:44 PM']
  },
  {
    id: 4,
    title: 'Run Ronnie Run',
    year: 2006,
    genre: 'Comedy',
    poster: 'http://dummyimage.com/400x600.jpg/cc0000/ffffff',
    showtimes: ['9:47 PM', '5:13 PM', '11:38 PM']
  },
  {
    id: 5,
    title: 'Maniac Cop',
    year: 2007,
    genre: 'Action|Crime|Horror|Thriller',
    poster: 'http://dummyimage.com/400x600.jpg/5fa2dd/ffffff',
    showtimes: ['1:59 PM', '3:02 PM', '10:53 AM']
  },
  {
    id: 6,
    title: 'Stiff Upper Lips',
    year: 1995,
    genre: 'Comedy',
    poster: 'http://dummyimage.com/400x600.jpg/cc0000/ffffff',
    showtimes: ['7:19 PM', '7:36 PM', '1:22 PM']
  },
  {
    id: 7,
    title: 'Life Aquatic with Steve Zissou, The',
    year: 2009,
    genre: 'Adventure|Comedy|Fantasy',
    poster: 'http://dummyimage.com/400x600.jpg/cc0000/ffffff',
    showtimes: ['7:58 PM', '6:55 PM', '9:56 PM']
  },
  {
    id: 8,
    title: 'Jezebel',
    year: 2002,
    genre: 'Drama',
    poster: 'http://dummyimage.com/400x600.jpg/cc0000/ffffff',
    showtimes: ['9:52 AM', '5:52 PM', '9:42 PM']
  },
  {
    id: 9,
    title: 'Comfort and Joy',
    year: 2006,
    genre: 'Comedy',
    poster: 'http://dummyimage.com/400x600.jpg/5fa2dd/ffffff',
    showtimes: ['12:38 PM', '5:20 PM', '11:33 PM']
  },
  {
    id: 10,
    title: 'Bopha!',
    year: 1984,
    genre: 'Drama',
    poster: 'http://dummyimage.com/400x600.jpg/ff4444/ffffff',
    showtimes: ['9:12 PM', '5:03 PM', '9:36 PM']
  }
];
