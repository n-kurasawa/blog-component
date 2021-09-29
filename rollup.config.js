import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss-modules";

export default {
  input: "src/index.tsx",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [
    postcss({
      plugins: [
        require("@tailwindcss/postcss7-compat"),
        require("autoprefixer"),
      ],
      sourceMap: false,
      minimize: true,
      modules: {
        generateScopedName: "[local]",
      },
    }),
    commonjs(),
    resolve(),
    typescript(),
  ],
  external: ["react", "react-dom", "react/jsx-runtime.js"],
};
