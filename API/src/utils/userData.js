import bcrypt from 'bcrypt';

const User = [
  {
    id: 1,
    first_name: 'Okikiola',
    last_name: 'Apelehin',
    email: 'user@gmail.com',
    phoneNumber: '08023182819',
    address: '2a, 2nd street Osborne estate Ikoyi',
    is_admin: false,
    password: bcrypt.hashSync('okiki123', bcrypt.genSaltSync(8))
  },
  {
    id: 2,
    first_name: 'John',
    last_name: 'Agent',
    email: 'admin@gmail.com',
    phoneNumber: '08023182844',
    address: '5b, Udi street Osborne estate Ikoyi',
    is_admin: false,
    password: bcrypt.hashSync('okiki123', bcrypt.genSaltSync(8))
  }
];

export default User;
