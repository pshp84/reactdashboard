/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/forbid-foreign-prop-types */
import checkProptypes from 'check-prop-types';

export const findByTestAtrr = (component, attr) => component.find(`[data-test='${attr}']`);
export const findByNormal = (component, attr) => component.find(attr);

export const checkProps = (component, expectedProps) => checkProptypes(component.propTypes, expectedProps, 'props', component.name);
