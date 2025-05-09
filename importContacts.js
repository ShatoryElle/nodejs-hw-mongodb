import mongoose from 'mongoose';
import Contact from './src/db/models/contact.js'; // Вказати правильний шлях
const contactsData = require('./contacts.json');



const importContacts = async () => {
  try {
    // Підключення до MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected!');

    // Імпорт контактів
    await Contact.insertMany(contactsData);

    console.log('Contacts have been imported successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error importing contacts:', error);
    mongoose.connection.close();
  }
};

importContacts();
