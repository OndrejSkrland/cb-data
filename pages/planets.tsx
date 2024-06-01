import {PlanetsList} from '@/app/components/planets/PlanetsList';
import { PlanetsProvider } from '@/app/components/planets/PlanetsProvider';
import RootLayout from '@/app/components/RootLayout';
import React from 'react';

const Planets = () => {
  return (
    <RootLayout>
      <PlanetsProvider>
        <PlanetsList />
      </PlanetsProvider>
    </RootLayout>
  );
}

export default Planets;