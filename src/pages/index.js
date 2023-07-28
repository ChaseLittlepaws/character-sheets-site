import React from 'react';
import Header from '../components/header.js';
import Layout from '../components/layout.js';
import Bio from '../components/bio.js';

function App() {
  return (
    <Layout>
      <div>
        <Bio />
      </div>
    </Layout>
  );
}

export default App;
