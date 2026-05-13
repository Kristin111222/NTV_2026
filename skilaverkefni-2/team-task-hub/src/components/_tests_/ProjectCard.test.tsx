import { describe, it, expect } from "vitest";
//import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProjectCard from "../ProjectCard";

describe("ProjectCard", () => {
  it("renders project name", () => {
    render(
      <ProjectCard
        id="1"
        name="My Project"
        onDelete={() => {}}
        onOpen={() => {}}
      />
    );

    expect(screen.getByText("My Project")).toBeTruthy();
  });

  it("renders delete button", () => {
    render(
      <ProjectCard
        id="1"
        name="My Project"
        onDelete={() => {}}
        onOpen={() => {}}
      />
    );

    expect(screen.getByText("Delete")).toBeTruthy();
  });
});