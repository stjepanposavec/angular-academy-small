export interface Contact {
  firstName: string;
  lastName: string;
  imageUrl: string;
  dateOfBirth: number;
  email: string;
}

export const INITIAL_CONTACT: Contact[] = [
  {
    firstName: 'Karen',
    lastName: 'Doe',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/pizzatron-74143.appspot.com/o/Sluzbena-Profilna-300x300-original.jpg?alt=media&token=9798ab8f-11cf-46ff-a31e-c2698f77e9be',
    dateOfBirth: 966463200000,
    email: 'test',
  },
  {
    firstName: 'test1',
    lastName: 'test1',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/pizzatron-74143.appspot.com/o/Sluzbena-Profilna-300x300-original.jpg?alt=media&token=9798ab8f-11cf-46ff-a31e-c2698f77e9be',
    dateOfBirth: 966463200000,
    email: 'test1',
  },
  {
    firstName: 'test2',
    lastName: 'test2',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/pizzatron-74143.appspot.com/o/Sluzbena-Profilna-300x300-original.jpg?alt=media&token=9798ab8f-11cf-46ff-a31e-c2698f77e9be',
    dateOfBirth: 966463200000,
    email: 'test2',
  },
  {
    firstName: 'test3',
    lastName: 'test3',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/pizzatron-74143.appspot.com/o/Sluzbena-Profilna-300x300-original.jpg?alt=media&token=9798ab8f-11cf-46ff-a31e-c2698f77e9be',
    dateOfBirth: 966463200000,
    email: 'test3',
  },
];
