// Copyright (c) 2022 Olantu All rights reserved
//
// Created by: Olantu
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function volume of a sphere
 */
// Get references to the HTML elements
const radiusInput = document.getElementById("radius");
const calculateButton = document.getElementById("calculate");
const resultDiv = document.getElementById("result");

// Add an event listener to the button
calculateButton.addEventListener("click", calculateVolume);

function calculateVolume() {
  // Get the value of the radius input and convert it to a number
  const radius = parseFloat(radiusInput.value);

  // Calculate the volume of the sphere
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Round the volume to the nearest hundredth
  const roundedVolume = Math.round(volume * 100) / 100;

  // Display the result in the result div
  resultDiv.textContent = `The volume of the sphere is ${roundedVolume} cubic units.`;
}
