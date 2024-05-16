const Client = require('../../src/models/ClientModel');

const clientResolver = {
  createClient: async (args, context, info) => {
    try {
      console.log(args)
      // Destructure arguments from the args parameter
      const { fullName, email, phoneNumber } = args;

      // Validate required fields
      if (!fullName || !email || !phoneNumber) {
        return new Error('Send all required fields: fullName, email, phoneNumber');
      }

      // Create a new client object
      const newClient = {
        fullName,
        email,
        phoneNumber,
      };

      // Save the new client to the database
      const client = await Client.create(newClient);

      return client;
    } catch (error) {
      console.log('Error creating client:', error.message);
      throw error; // Throw error to be caught by GraphQL and returned in the response
    }
  },
  getAllClients: async (args, context, info) => {
    try {
      // Retrieve all clients from the database
      const clients = await Client.find({});

      return clients;
    } catch (error) {
      console.log('Error fetching all clients:', error.message);
      throw error; // Throw error to be caught by GraphQL and returned in the response
    }
  },
  getClient: async (args, context, info) => {
    try {
      // Extract clientId from the arguments
      const { clientId } = args;

      // Find a client by its ID in the database
      const client = await Client.findById(clientId);

      return client;
    } catch (error) {
      console.log('Error fetching client by ID:', error.message);
      throw error; // Throw error to be caught by GraphQL and returned in the response
    }
  },
  updateClient: async (args, context, info) => {
    try {
      // Extract clientId and updated fields from the arguments
      const { clientId, ...updates } = args;

      // Update the client in the database
      const updatedClient = await Client.findByIdAndUpdate(clientId, updates, { new: true });

      return updatedClient;
    } catch (error) {
      console.log('Error updating client:', error.message);
      throw error; // Throw error to be caught by GraphQL and returned in the response
    }
  },
  deleteClient: async (args, context, info) => {
    try {
      // Extract clientId from the arguments
      const { clientId } = args;

      // Delete the client from the database
      const deletedClient = await Client.findByIdAndDelete(clientId);

      return deletedClient;
    } catch (error) {
      console.log('Error deleting client:', error.message);
      throw error; // Throw error to be caught by GraphQL and returned in the response
    }
  },
};

module.exports = clientResolver;
