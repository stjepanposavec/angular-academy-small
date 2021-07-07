export interface Contact {
  firstName: string;
  lastName: string;
  imageUrl: string;
  dateOfBirth: string;
  email: string;
}

export const INITIAL_CONTACT: Contact[] = [
  {
    firstName: 'test',
    lastName: 'ptest',
    imageUrl: 'test',
    dateOfBirth: 'test',
    email: 'test',
  },
  {
    firstName: 'test1',
    lastName: 'test1',
    imageUrl: 'test1',
    dateOfBirth: 'test1',
    email: 'test1',
  },
  {
    firstName: 'test2',
    lastName: 'test2',
    imageUrl: 'test2',
    dateOfBirth: 'test2',
    email: 'test2',
  },
  {
    firstName: 'test3',
    lastName: 'test3',
    imageUrl: 'test3',
    dateOfBirth: 'test3',
    email: 'test3',
  },
];
