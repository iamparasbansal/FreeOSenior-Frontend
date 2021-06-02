import { Typography } from '@material-ui/core';
import React from 'react';
import TutorialTable from '../components/adminPanel/TutorialTable';
import Layout from '../components/main/layout';

const adminPanel = () => {
    return (
      <Layout>
        
        <TutorialTable />
      </Layout>
    )
}

export default adminPanel;
