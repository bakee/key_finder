import React, { FC } from 'react';


interface CarProps { }

const Car: FC<CarProps> = () => (
  <div className='car'>
    <div>Make: Toyota</div>
    <div>Model: Corolla</div>
    <div>Year: 2020</div>
    <div>License Plate: ABC123</div>
  </div>
);

export default Car;
