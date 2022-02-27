import {expect} from 'chai';
import trim from './trim';

describe('TRIM util', () => {
  it('should return string correctly', () => {
    expect(trim('  mocha   '), 'mocha');
  });
});
