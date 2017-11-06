'use strict';

// const mockIsExclude = jest.fn();
//
// jest.mock('../../utils', () => ({
//   isExclude: mockIsExclude
// }));
//
//
const operationsFilter  = require('../operations');

const dummySwagger = {
  paths: {
    '/pets': {
      'get': {
        'x-doc':{
          'exclude': true
        }
      },
      'post':{
      }
    }
  }
};

const expectedSwagger = {
  paths: {
    '/pets': {
      'post':{
      }
    }
  }
};

describe('docExclude.operations', () => {
  it('should filter operations', () => {
    const updatedSwagger = operationsFilter(dummySwagger);

    expect(updatedSwagger).toEqual(expectedSwagger);
  });
});

