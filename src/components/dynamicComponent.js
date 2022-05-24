import React from 'react';
import { sbEditable } from '@storyblok/storyblok-editable';
import Teaser from './Teaser';
import Grid from './Grid';
import Feature from './Feature';
 
const Components = {
  'feature': Feature,
  'grid': Grid,
  'teaser': Teaser,
}
 
const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return (<div {...sbEditable(blok)}><Component blok={blok} /></div>)
  }
  return (<p>The component <strong>{blok.component}</strong> has not been created yet.</p>)
}
 
export default DynamicComponent;