import React from 'react';
import * as ExampleComponents from '../../../lib';


export default function Factory({name,fnx}){

  const Comp = ExampleComponents.default[name];

  return(
      <Comp {...fnx}/>
  )
}
