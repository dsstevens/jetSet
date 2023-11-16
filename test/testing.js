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

 describe('filterYearlyTrips', () => {
  it('should be a function', () => {
    expect(typeof filterYearlyTrips).to.equal('function');
  });
 
  it('should return the correct trips for the current year', () => {
    const yearlyTrips = filterYearlyTrips(trips);
    expect(yearlyTrips.length).to.equal(3);
  });
 
  it('should return an empty array if no trips for the current year', () => {
    const yearlyTrips = filterYearlyTrips([]);
    expect(yearlyTrips.length).to.equal(0);
  });
 });
 
 describe('createTrip', () => {
  it('should be a function', () => {
    expect(typeof createTrip).to.equal('function');
  });
 
  it('should return a new trip with correct properties', () => {
    const trip = createTrip({
      destinationList: { value: 49 },
      numberTravelers: { value: 5 },
      startDate: { value: '2022/09/16' },
      endDate: { value: '2022/09/24' }
    });
    expect(trip).to.have.property('id');
    expect(trip).to.have.property('userID', 3);
    expect(trip).to.have.property('destinationID', 49);
    expect(trip).to.have.property('travelers', 5);
    expect(trip).to.have.property('date', '2022/09/16');
    expect(trip).to.have.property('duration', 8);
    expect(trip).to.have.property('status', 'pending');
    expect(trip).to.have.property('suggestedActivities').that.is.an('array').that.is.empty;
  });
 });

 describe('calculateDuration', () => {
  it('should be a function', () => {
    expect(typeof calculateDuration).to.equal('function');
  });
 
  it('should return the correct duration', () => {
    const duration = calculateDuration('2022/09/16', '2022/09/24');
    expect(duration).to.equal(8);
  });
 
  it('should return 0 if start date is after end date', () => {
    const duration = calculateDuration('2022/09/24', '2022/09/16');
    expect(duration).to.equal(0);
  });
 });

 describe('estimateTripCost', () => {
  it('should be a function', () => {
    expect(typeof estimateTripCost).to.equal('function');
  });
 
  it('should return the correct trip cost', () => {
    const tripInfo = trips[0];
    const cost = estimateTripCost(tripInfo, destinations);
    expect(cost).to.be.a('number');
  });
 
  it('should return 0 if no matching destination', () => {
    const tripInfo = { destinationID: 100, travelers: 5, duration: 8 };
    const cost = estimateTripCost(tripInfo, destinations);
    expect(cost).to.equal(0);
  });
 });

 describe('calculateYearlyCost', () => {
  it('should be a function', () => {
    expect(typeof calculateYearlyCost).to.equal('function');
  });
 
  it('should return the correct yearly cost', () => {
    const yearlyTrips = filterYearlyTrips(trips);
    const cost = calculateYearlyCost(yearlyTrips, destinations);
    expect(cost).to.be.a('number');
  });
 
  it('should return 0 if no trips', () => {
    const cost = calculateYearlyCost([], destinations);
    expect(cost).to.equal(0);
  });
 });
 