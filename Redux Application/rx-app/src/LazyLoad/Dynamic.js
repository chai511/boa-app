// npm install react-loadable --save

import React from 'react'
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./Profile/Profile'),
  loading: () => <div>Loading Profile component..........</div>
});

export  const  Dynamic = () => (
  <LoadableComponent/>
);

