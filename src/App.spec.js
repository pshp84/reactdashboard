import React from "react";
import { mount } from "enzyme";
import App from "./App";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
const setUp = () => {
  const component = mount(<App />);
  component.debug();
  return component;
};

describe("App Component", () => {
  it("Should render without errors", () => {
    const wrapper = setUp();
    // const h = findByTestAtrr(wrapper, "appComponent");
    // expect(h.length).toBe(1);
  });
});
