import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { tmox } from "../dist/index.js";

describe("tmox", () => {
  describe("Given conditional class inputs", () => {
    it("When conditions are evaluated then only enabled classes are included", () => {
      const result = tmox("base", { active: true, disabled: false });

      assert.equal(result, "base active");
    });
  });

  describe("Given nested array inputs", () => {
    it("When arrays contain class values then they are flattened", () => {
      const result = tmox(["base", ["nested", { selected: true }]]);

      assert.equal(result, "base nested selected");
    });
  });

  describe("Given falsy class inputs", () => {
    it("When false, null, undefined, and zero are provided then they are ignored", () => {
      const result = tmox("base", false, null, undefined, 0);

      assert.equal(result, "base");
    });
  });

  describe("Given conflicting Tailwind classes", () => {
    it("When classes target the same utility then the later class wins", () => {
      const result = tmox("px-2", "px-4", "text-sm", "text-lg");

      assert.equal(result, "px-4 text-lg");
    });
  });
});
