import React from 'react';
import { Container, Title } from '@mantine/core';
import DataTable from './components/DataTable';
import { processData } from './utils/dataProcessor';

const App = () => {
  const { yearWiseData, averageData } = processData();

  return (
    <Container>
      <Title order={2}>Yearly Crop Production Data</Title>
      <DataTable
        data={yearWiseData}
        columns={['year', 'maxProductionCrop', 'minProductionCrop']}
      />
      <Title order={2} mt="lg">Average Crop Data (1950-2020)</Title>
      <DataTable
        data={averageData}
        columns={['crop', 'avgYield', 'avgArea']}
      />
    </Container>
  );
};

export default App;
