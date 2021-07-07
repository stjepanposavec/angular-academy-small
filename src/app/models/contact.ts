export interface Contact {
  firstName: string;
  lastName: string;
  imageUrl: string;
  dateOfBirth: string;
  email: string;
}

export const INITIAL_CONTACT: Contact = {
  firstName: '',
  lastName: '',
  imageUrl: '',
  dateOfBirth: '',
  email: '',
};
