import { Actor } from '../actor/Actor';
import { Movie } from './Movie';

export const movieData = [
  new Movie(
    1,
    'El Padrino',
    1972,
    175,
    ['Drama', 'Crimen'],
    'La historia de la familia Corleone, una poderosa dinastía de la mafia italiana en Nueva York.',
    'Francis Ford Coppola',
    'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    'https://www.youtube.com/embed/sY1S34973zA',
    9.2,
    [
      new Actor('Marlon Brando', 'Vito Corleone', 'https://image.tmdb.org/t/p/w185/fuTEPWdcQzGqnCqQxKZCVcKGOgr.jpg', 45),
      new Actor('Al Pacino', 'Michael Corleone', 'https://image.tmdb.org/t/p/w185/2dGBb1fOcNdZjtQToVPFxXjm4ke.jpg', 52),
      new Actor('James Caan', 'Sonny Corleone', 'https://image.tmdb.org/t/p/w185/bVZRMlpjTAO2pJK6v90buFgVbSW.jpg', 38),
    ]
  ),
  new Movie(
    2,
    'Pulp Fiction',
    1994,
    154,
    ['Crimen', 'Drama'],
    'Las vidas de dos sicarios, un boxeador, la esposa de un gángster y dos bandidos se entrelazan en cuatro historias de violencia y redención.',
    'Quentin Tarantino',
    'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    'https://www.youtube.com/watch?v=s7EdQ4FqbhY',
    8.9,
    [
      new Actor('John Travolta', 'Vincent Vega', 'https://image.tmdb.org/t/p/w185/yYhwWRcxDHTn63gSEF1vnDAD7cD.jpg', 67),
      new Actor('Samuel L. Jackson', 'Jules Winnfield', 'https://image.tmdb.org/t/p/w185/AiAYAqwpM5xmiFrAIeQvUXDCVvo.jpg', 189),
      new Actor('Uma Thurman', 'Mia Wallace', 'https://image.tmdb.org/t/p/w185/xdnstENLdWMPWt9qyhtf695L4t6.jpg', 43),
    ]
  ),
  new Movie(
    3,
    'El Caballero de la Noche',
    2008,
    152,
    ['Acción', 'Crimen', 'Drama'],
    'Batman se enfrenta al Joker, un criminal psicópata que quiere sumir Gotham City en la anarquía.',
    'Christopher Nolan',
    'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    'https://www.youtube.com/watch?v=EXeTwQWrcwY',
    9.0,
    [
      new Actor('Christian Bale', 'Bruce Wayne / Batman', 'https://image.tmdb.org/t/p/w185/vecCvACI2QhSE5fOoAXLVv9lWcN.jpg', 41),
      new Actor('Heath Ledger', 'Joker', 'https://image.tmdb.org/t/p/w185/5Y9HnYYa9jF4NunY9lSgJGjSe8E.jpg', 22),
      new Actor('Aaron Eckhart', 'Harvey Dent', 'https://image.tmdb.org/t/p/w185/aPJDdOdKhNVYGGJqNKSPVhyKJgT.jpg', 35),
    ]
  ),
  new Movie(
    4,
    'Forrest Gump',
    1994,
    142,
    ['Drama', 'Romance'],
    'La extraordinaria vida de Forrest Gump, un hombre con discapacidad intelectual que vive eventos históricos importantes.',
    'Robert Zemeckis',
    'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
    'https://www.youtube.com/watch?v=bLvqoHBptjg',
    8.8,
    [
      new Actor('Tom Hanks', 'Forrest Gump', 'https://image.tmdb.org/t/p/w185/xndWFsBlClOJFRdhSt4NBwiPq2o.jpg', 78),
      new Actor('Robin Wright', 'Jenny Curran', 'https://image.tmdb.org/t/p/w185/9Pk6RcXzZWQihydkejKfKEAlCzT.jpg', 34),
      new Actor('Gary Sinise', 'Teniente Dan', 'https://image.tmdb.org/t/p/w185/8yjrUz0aMhKyrLHNjBBkJGVvIpP.jpg', 56),
    ]
  ),
  new Movie(
    5,
    'Inception',
    2010,
    148,
    ['Acción', 'Ciencia Ficción', 'Thriller'],
    'Un ladrón que roba secretos del subconsciente durante el estado de sueño recibe la tarea inversa de plantar una idea.',
    'Christopher Nolan',
    'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    'https://www.youtube.com/watch?v=YoHD9XEInc0',
    8.8,
    [
      new Actor('Leonardo DiCaprio', 'Dom Cobb', 'https://image.tmdb.org/t/p/w185/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg', 31),
      new Actor('Marion Cotillard', 'Mal', 'https://image.tmdb.org/t/p/w185/2dGBb1fOcNdZjtQToVPFxXjm4ke.jpg', 47),
      new Actor('Tom Hardy', 'Eames', 'https://image.tmdb.org/t/p/w185/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg', 29),
    ]
  ),
];