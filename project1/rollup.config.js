import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import execute from "rollup-plugin-execute";

const packageJson = require("./package.json");

export default defineConfig({
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    execute("yalc push"),
  ],
  external: ["react"],
});
