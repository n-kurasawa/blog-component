import typescript from "@rollup/plugin-typescript";
import replace from "@rollup/plugin-replace";

export default {
  input: "src/index.tsx",
  output: {
    dir: "dist",
    format: "esm",
  },
  plugins: [
    typescript(),
    replace({
      preventAssignment: true,
      values: {
        "react/jsx-runtime": "react/jsx-runtime.js",
      },
    }),
  ],
};
