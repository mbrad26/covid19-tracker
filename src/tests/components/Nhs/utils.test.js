import { formatter } from '../../../components/Nhs/utils';

describe('formatter', () => {
  it('returns a string', () => {
    expect(typeof formatter('random string')).toBe('string');
  });

  it('returns a lower case string capitalized', () => {
    expect(formatter('string')).toBe('String');
  });

  it('returns a capitalized string capitalized', () => {
    expect(formatter('String')).toBe('String');
  });

  it('returns a lower case string that contains "_" capitalized', () => {
    expect(formatter('a_string')).toBe('A string');
  });

  it('returns a capitalized string that contains "_" capitalized', () => {
    expect(formatter('Another_string')).toBe('Another string');
  });
});
