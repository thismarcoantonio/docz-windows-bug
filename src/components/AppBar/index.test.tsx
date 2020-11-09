import React from "react";
import CPHeader from "./index";
import { render } from "@testing-library/react";

describe("CPHeader", () => {
  it("renders header logo correctly", () => {
    const wrapper = render(<CPHeader logo="/logo-test" />);
    const logo = wrapper.container.querySelector("[src='/logo-test']");
    expect(logo).toBeInTheDocument();
  });

  it("renders actions correctly", () => {
    const wrapper = render(
      <CPHeader
        logo="/test"
        actions={
          <>
            <div>action test</div>
          </>
        }
      />
    );
    expect(wrapper.getByText("action test")).toBeInTheDocument();
  });
});
