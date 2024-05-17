// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
/**
 * Internal utilities for the public API of the Deno Standard Library.
 *
 * Note: this module is for internal use only and should not be used directly.
 *
 * ```ts
 * import { diff, diffstr, buildMessage } from "@std/internal";
 * import { assertEquals } from "@std/assert/assert-equals";
 *
 * const a = [1, 2, 3];
 * const b = [1, 2, 4];
 *
 * assertEquals(diff(a, b), [
 *   { type: "common", value: 1 },
 *   { type: "common", value: 2 },
 *   { type: "removed", value: 3 },
 *   { type: "added", value: 4 },
 * ]);
 *
 * const diffResult = diffstr("Hello, world!", "Hello, world");
 *
 * console.log(buildMessage(diffResult));
 * // [
 * //   "",
 * //   "",
 * //   "    [Diff] Actual / Expected",
 * //   "",
 * //   "",
 * //   "-   Hello, world!",
 * //   "+   Hello, world",
 * //   "",
 * // ]
 * ```
 *
 * @module
 */
export * from "./build_message.ts";
export * from "./diff.ts";
export * from "./diff_str.ts";
export * from "./format.ts";
export * from "./styles.ts";
export * from "./types.ts";
