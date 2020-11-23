import React from "react";
import Logo from "./Logo";

import { mount, shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Logo />", () => {
  it("renders <Logo /> component", () => {
    const wrapper = mount(<img className="logo" />);

    expect(wrapper.contains(<img className="logo" />)).toEqual(true);
  });

});
