// @vitest-environment jsdom
import React from 'react'
import { describe, expect, it } from 'vitest';
import { render} from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should have header", () => {
    const { getByText } = render(<App />)
    expect(getByText(/Hi, I am Arthur./)).toBeTruthy()
  });
});
