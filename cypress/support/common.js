/**
 * Run tests if the specified device matches the current running device
 * ... and skip tests if it does not match
 * 
 * @param {String} device Name of device that tests should be ran on
 * @param {Function} tests Suite of tests that should be executed or skipped
 */
const runOn = (device, tests) => {
  if (Cypress.env("device") === device.toLowerCase()) {
    describe(device, () => {
      tests();
    });
  } else {
    describe.skip(device, () => {
      tests();
    });
  }
};

module.exports = {runOn};