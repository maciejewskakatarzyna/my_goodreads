import { factory, primaryKey } from '@mswjs/data';
import faker from '@withshepherd/faker';

faker.seed(123);

const shelfs = ['to-read', 'read', 'currently-reading'];
const genres = ['Romance', 'Fantasy', 'History', 'Horror', 'Biographies'];

const getRandomValue = (array, index) => array[index];
const getCapitalLetter = word => {
  const capitalWord = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalWord;
};
const getRandomCoverId = () => faker.datatype.number({ min: 1, max: 1084 });

export const db = factory({
  book: {
    id: primaryKey(faker.datatype.uuid),
    title: () => getCapitalLetter(faker.fake('{{lorem.word}} {{lorem.word}}')),
    author: () => faker.fake('{{name.firstName}} {{name.lastName}}'),
    publisher: () => faker.fake('{{company.companyName}}'),
    yearPublished: () => `${faker.datatype.number({ min: 1950, max: 2022 })}`,
    shelf: () => getRandomValue(shelfs, faker.datatype.number({ min: 0, max: 2 })),
    cover: () => `https://picsum.photos/id/${getRandomCoverId()}/250/350`,
    genre: () => getRandomValue(genres, faker.datatype.number({ min: 0, max: 4 })),
  },
  shelf: {
    id: primaryKey(String),
  },
  user: {
    id: primaryKey(() => '1'),
    name: () => 'Anna Kowalska',
    email: () => 'kowalska@mygoodreads.com',
    password: () => 'Test123',
  },
});
