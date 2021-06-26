import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import "./App.css"
import CreateUser from './Component/CreateUser';
import ListOfUser from './Component/ListOfUser';

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  })

  return <div>
   <ApolloProvider client= { client }>
    <CreateUser />
    <ListOfUser />
  </ApolloProvider>
  </div>
}

export default App;
