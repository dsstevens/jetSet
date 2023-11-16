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