import { expect } from 'chai';
import Checker from 'jscs/lib/checker';

describe('jscs-config-nordnet', () => {
  let checker;

  beforeEach(() => {
    checker = new Checker();
    checker.configure({
      plugins: ['./lib/index.js']
    });
  });

  it('should define nordnet preset', () => expect(checker._configuration._presets.nordnet).to.be.ok);
});
