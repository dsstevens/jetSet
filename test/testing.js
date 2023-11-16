import chai from 'chai';
const expect = chai.expect;

import { 
  determineDestination, 
  filterYearlyTrips, 
  createTrip, 
  calculateDuration, 
  estimateTripCost, 
  calculateYearlyCost 
} from './utils.js';

import { loginUser } from './scripts.js';
import { travelers, trips, destinations } from './test-sample-data.js';


describe('See if the tests are running', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
});

describe('determineDestination', () => {
  it('should be a function', () => {
    expect(typeof determineDestination).to.equal('function');
  });
 
  it('should return the correct destination', () => {
    const tripDetail = trips[0];
    const destination = determineDestination(tripDetail, destinations);
    expect(destination.id).to.equal(tripDetail.destinationID);
  });
 
  it('should return undefined if no matching destination', () => {
    const tripDetail = { destinationID: 100 };
    const destination = determineDestination(tripDetail, destinations);
    expect(destination).to.be.undefined;
  });
 });