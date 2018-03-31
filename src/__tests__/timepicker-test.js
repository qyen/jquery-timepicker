jest.dontMock("jquery").dontMock("../jquery.timepicker");

import jQuery from 'jquery';
require('../jquery.timepicker');

const TEST_INPUT = "testInput";

beforeEach(() => {
  document.body.innerHTML = `<div>
      <input type="text" id="${TEST_INPUT}" />
    </div>`;
  jQuery(`#${TEST_INPUT}`).get(0).dataset = {}
});

test("timepicker initializes", () => {
  jQuery(`#${TEST_INPUT}`).timepicker();
});

test("show single string noneOption correctly", () =>{
  jQuery(`#${TEST_INPUT}`).timepicker({
    "noneOption": "----"
  }).timepicker('show');

  jQuery('.ui-timepicker-list li:first-child').trigger('click');
  expect(jQuery(`#${TEST_INPUT}`).val()).toEqual('');
});

