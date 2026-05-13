import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useLocalStorage } from "../useLocalStorage";

describe("useLocalStorage", () => {

  it("returns initial value", () => {
    const { result } = renderHook(() =>
      useLocalStorage("test-key", "hello")
    );

    expect(result.current[0]).toBe("hello");
  });

  it("stores new value in localStorage", () => {
    const { result } = renderHook(() =>
      useLocalStorage("test-key", "hello")
    );

    act(() => {
      result.current[1]("new value");
    });

    expect(result.current[0]).toBe("new value");

    expect(localStorage.getItem("test-key")).toBe(
      JSON.stringify("new value")
    );
  });

});