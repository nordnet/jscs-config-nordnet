import { expect } from 'chai';
import Checker from 'jscs/lib/checker';
import path from 'path';

describe('jscs-config-nordnet', () => {
  let checker;

  beforeEach(() => {
    checker = new Checker();
    checker.configure({
      plugins: ['./lib/index.js']
    });
  });

  it('should define nordnet preset', () => expect(checker._configuration._presets.nordnet).to.be.ok);

  describe('validateLineBreaks', () => {
    it('should not validate line breaks', function() {
      checker = new Checker();
        checker.configure({
        plugins: ['./lib/index.js']
      });
      return checker.checkFile(path.resolve('./test/fixtures/validate-line-breaks.js')).then(function(errors) {
        expect(errors.getErrorList().length).to.equal(0);
      });
    });
  });
});
