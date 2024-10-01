import {describe, expect, beforeEach, it} from "bun:test";
import defaultApi from "../test_fixtures/default-api.json" assert { type: "json" };
import defaultUi from "../test_fixtures/default-ui.json" assert { type: "json" };

import {workflowTransformer} from "./workflowTransformer";

describe("workflowTransformer", () => {
  it("should exist", () => {
    expect(workflowTransformer).toBeDefined();
  });
  describe("when called with the default ui and api", () => {
    let result: any;
    beforeEach(() => {
      result = workflowTransformer(defaultUi);
    });
    it("should return the default ui", () => {
      it("should have returned an api flow with the node ids as keys", () => {
        expect(result["1"]).toBeDefined();
      });
    });
  });
});
