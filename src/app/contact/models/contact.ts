export interface Contact {
  firstName: string;
  lastName: string;
  imageUrl: string;
  dateOfBirth: string;
  email: string;
}

export const INITIAL_CONTACT: Contact[] = [
  {
    firstName: 'Karen',
    lastName: 'Doe',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/pizzatron-74143.appspot.com/o/user-img.png?alt=media&token=275b110e-d09e-4717-ad99-b320d134be1a',
    dateOfBirth: '17.8.2000.',
    email: 'test',
  },
  {
    firstName: 'test1',
    lastName: 'test1',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/pizzatron-74143.appspot.com/o/user-img.png?alt=media&token=275b110e-d09e-4717-ad99-b320d134be1a',
    dateOfBirth: 'test1',
    email: 'test1',
  },
  {
    firstName: 'test2',
    lastName: 'test2',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/pizzatron-74143.appspot.com/o/user-img.png?alt=media&token=275b110e-d09e-4717-ad99-b320d134be1a',
    dateOfBirth: 'test2',
    email: 'test2',
  },
  {
    firstName: 'test3',
    lastName: 'test3',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/pizzatron-74143.appspot.com/o/user-img.png?alt=media&token=275b110e-d09e-4717-ad99-b320d134be1a',
    dateOfBirth: 'test3',
    email: 'test3',
  },
];
