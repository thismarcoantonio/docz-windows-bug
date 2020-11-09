import React from "react";
import Search from "./Search";
import { render, fireEvent } from "@testing-library/react";

describe("Search", () => {
  it("calls onSearch with correct value on change", () => {
    const mockSearch = jest.fn();
    const wrapper = render(<Search onSearch={mockSearch} />);
    const input = wrapper.getByTestId("search-input");

    fireEvent.change(input, { target: { value: "Test value" } });
    expect(mockSearch).toHaveBeenCalledWith("Test value");
  });
});
