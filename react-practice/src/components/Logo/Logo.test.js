import React from "react";
import Logo from "./Logo";
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow, mount, render } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

describe("<Logo />", () => {
  it("renders <Logo /> component", () => {
    const wrapper = shallow(
      <Logo>
        <img className="logo" />
      </Logo>
      
    );
    console.log(wrapper.debug());
    expect(wrapper.contains(<img className="logo" />)).toEqual(true);
  });
});

// describe("<Logo />", () => {
//   it("passing test", () => {
//     expect(true).toBeTruthy();
//   });
// });

// import React from "react";
// import AppHeader from "./AppHeader";
//

// describe("<MyComponent />", () => {
//   it("renders children when passed in", () => {
//     const wrapper = shallow(
//       <AppHeader>
//         <div className="unique" />
//       </AppHeader>
//     );
//     expect(wrapper.contains(<div className="unique" />)).to.equal(true);
//   });
// });
