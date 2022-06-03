import React from 'react';
import { sbEditable } from '@storyblok/storyblok-editable';
import Code from '../Code';
import Feature from '../Feature';
import Grid from '../Grid';
import Teaser from '../Teaser';
 
const Components = {
  'feature': Feature,
  'grid': Grid,
  'teaser': Teaser,
  'code': Code,
}
 
const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return (<div {...sbEditable(blok)}><Component blok={blok} /></div>)
  }
  return (<p>The component <strong>{blok.component}</strong> has not been created yet.</p>)
}
 
export default DynamicComponent;