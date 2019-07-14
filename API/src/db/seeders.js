import bcrypt from 'bcrypt';

const seeders = `
    INSERT INTO users (first_name, last_name, email, phone_number, address, password)
    VALUES ('Okikiola', 'Apelehin', 'user@gmail.com', '08023182344', '22, ellen road abesan estate', '${bcrypt.hashSync(
      'okiki123',
      8
    )}');

    INSERT INTO properties (price, state, city, address, type)
    VALUES ('205000', 'lagos', 'ikeja', '2b, osborne dolphine estate', '2 bedroom' ),
    ('850000', 'ondo', 'akure', 'Udi street, osborne estate', 'Duplex' ),
    ('900000', 'niger', 'minna', '32, market road Tunga street', 'Mini flat' );
`;

export default seeders;
