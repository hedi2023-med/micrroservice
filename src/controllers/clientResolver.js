const clients = [];
const Client = require('../models/ClientModel');

const clientResolver = {
  getClient: async ({ id }) => {
    const client = await Client.findById(id);
    return client;
  },
  getAllClients: async () => {
    const Clients = await Client.find({});
    return Clients;
  },
  createClient: async ({ fullName, email, phoneNumber }) => {
    const newClient = { id: `${clients.length + 1}`, fullName, email, phoneNumber };
    const client = await Client.create(newClient);
    return newClient;
  },
  updateClient: async ({ id, fullName, email, phoneNumber }) => {
    const updatedClient = await Client.findByIdAndUpdate(id,  {fullName, email, phoneNumber});
    
    return updatedClient;
  },
  deleteClient: async ({ id }) => {
    const deletedClient = await Client.findByIdAndDelete(id);
    return deletedClient;
  }
};

module.exports = clientResolver;
