import bcrypt from 'bcrypt';

const seeders = `
    INSERT INTO users (first_name, last_name, email, phone_number, address, hashed_password, is_admin)
    VALUES ('Okikiola', 'Apelehin', 'user@gmail.com', '08023182344', '22, ellen road abesan estate', '${bcrypt.hashSync(
      'okiki123',
      8
    )}', 'false');
`;

export default seeders;
