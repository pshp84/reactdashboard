import React from "react";
import { mount } from "enzyme";
import { findByTestAtrr } from "./testUtils";
import HomeWrapper from "./home";

const GetLdap = [
  {
    status: true,
    code: 200,
    message: "Data fetched.",
    error: [],
    payload: 0,
    data: {
      totalPage: 1,
      totalCount: 1,
      Data: [
        {
          host: "10.220.245.180",
          port: "389",
          token: "c82172a40-3e33-44b2-9729-a8312d14ccd0",
          status: true,
          domainName: "zeronsec",
          adminUsername: "winadmin@zeronsec.com",
        },
      ],
    },
  },
];

jest.useFakeTimers();
const setUp = () => {
  const component = mount(<HomeWrapper />);

  component.debug();
  return component;
};
describe("Component Rendering ", () => {
  let wrapper;
  wrapper = setUp();
  it("Add new number", () => {
    const numberValue = findByTestAtrr(wrapper, "number_input");
    numberValue
      .at(numberValue.length - 1)
      .props()
      .onChange({ target: { value: 9 } });
      wrapper.update();
    findByTestAtrr(wrapper, "number_submit")
      .at(
        findByTestAtrr(wrapper, "number_submit").length -
          1
      )
      .simulate('click');
    findByTestAtrr(wrapper, "reload_1234")
      .at(
        findByTestAtrr(wrapper, "reload_1234").length -
          1
      )
      .simulate('click');
    findByTestAtrr(wrapper, "reload_4321")
      .at(
        findByTestAtrr(wrapper, "reload_4321").length -
          1
      )
      .simulate('click');
    wrapper.update();
  });
});