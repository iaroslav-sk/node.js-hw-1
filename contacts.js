const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.basename(
  "C:/Users/yarik/Documents/GitHub/Node.js/node-hw-01/contacts.json"
);

async function listContacts() {
  const file = await fs.readFile(contactsPath, "utf-8");
  const contacts = JSON.parse(file);
  console.log(contacts);
}

async function getContactById(contactId) {
  const file = await fs.readFile(contactsPath, "utf-8");
  const contacts = JSON.parse(file);
  const contact = contacts.find((contact) => contact.id === Number(contactId));
  console.log(contact);
}

async function removeContact(contactId) {
  const file = await fs.readFile(contactsPath, "utf-8");
  const contacts = JSON.parse(file);
  const findedContact = contacts.filter((contact) => contact.id !== contactId);

  fs.writeFile(contactsPath, JSON.stringify(findedContact), "utf8", (error) => {
    if (error) {
      console.log(error.message);
    }
  });
  console.log(contacts);
}

async function addContact(name, email, phone) {
  const file = await fs.readFile(contactsPath, "utf-8");
  const contacts = JSON.parse(file);

  const newContact = {
    name,
    email,
    phone,
  };

  contacts.push(newContact);

  fs.writeFile(contactsPath, JSON.stringify(contacts), "utf8", (error) => {
    if (error) {
      console.log(error.message);
    }
  });
  console.log(contacts);
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
