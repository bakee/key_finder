import React, { FC } from 'react';
import Car from '../Car/Car';


interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => (
  <>
  <h1>
    Cars
  </h1>
  <Car/>
  <Car/>
  <Car/>
  </>
);

export default Dashboard;
