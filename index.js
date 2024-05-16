// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql'); 
const getUserSchema = require('./src/models/ClientSchema');
const clientResolver = require('./src/controllers/clientResolver');

const app = express();

app.use(cors());
app.use(express.json());

async function setupServer() {
  try {
    const clientSchema = await getUserSchema(); // Await the promise to get the schema

    app.use('/opportunity', require('./src/routes/OpportunityRoute'));
    
    app.use('/client', graphqlHTTP({
      schema: clientSchema,
      rootValue: clientResolver,
      graphiql: true,
    }));
    
    const PORT = 5000;
    
    mongoose.connect('mongodb://localhost:27017/gestionClient', { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
      })
      .catch((error) => {
        console.error('Database connection error:', error);
      });

  } catch (error) {
    console.error('Failed to start the GraphQL server:', error);
  }
}

setupServer();
