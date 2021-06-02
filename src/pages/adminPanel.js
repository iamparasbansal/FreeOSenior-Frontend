import { Typography } from '@material-ui/core';
import React from 'react';
import TurtorialTable from '../components/adminPanel/TutorialTable';
import Layout from '../components/main/layout';

const adminPanel = () => {
    return (
      <Layout>
        
        <TurtorialTable />
      </Layout>
    )
}

export default adminPanel;
