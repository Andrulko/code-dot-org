import React from 'react';
import {shallow} from 'enzyme';
import {expect} from '../../util/configuredChai';
import sinon from 'sinon';
import SchoolAutocompleteDropdown from '@cdo/apps/templates/SchoolAutocompleteDropdown';

describe('SchoolAutocompleteDropdown', () => {
  let schoolAutocompleteDropdown;
  let handleChange;
  beforeEach(() => {
    handleChange = sinon.spy();
    schoolAutocompleteDropdown = shallow(
      <SchoolAutocompleteDropdown
        onChange={handleChange}
      />
    );
  });

  it('renders VirtualizedSelect', () => {
    expect(schoolAutocompleteDropdown.find('VirtualizedSelect').exists()).to.be.true;
  });

  describe("getOptions()", () => {
    let getOptions;
    beforeEach(() => {
      getOptions = schoolAutocompleteDropdown.instance().getOptions;
    });

    it("Resolves to undefined for queries less than 4 characters", () => {
      expect(getOptions("abc")).to.eventually.equal(undefined);
    });

    it("Fetches schools from schoolsearch API for queries >= 4 characters", () => {
      // const server = sinon.fakeServer.create();
      getOptions("abcd");
    });
  });

});
