import React, { Component } from 'react';

export const ButtonComponent = ({ type ,label}) => (
  <button
    type={type}
	className="btn btn-default"
  >{label}</button>
);