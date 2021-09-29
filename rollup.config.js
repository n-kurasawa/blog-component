import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import postcss from "rollup-plugin-postcss-modules";

export default {
  input: "src/index.tsx",
  output: {
    dir: "dist",
    format: "esm",
  },
  plugins: [
    postcss({
      // plugins: require('./postcss.config').plugins,
      plugins: [
        require("@tailwindcss/postcss7-compat"),
        require("autoprefixer"),
      ],
      // modules: true,
      sourceMap: false,
      // extract: false,
      minimize: true,
      modules: {
        // see generateScopedName options here
        // https://github.com/css-modules/postcss-modules
        generateScopedName: "[local]",
      },
    }),
    commonjs(),
    resolve(),
    typescript(),
    replace({
      preventAssignment: true,
      values: {
        "react/jsx-runtime": "react/jsx-runtime.js",
      },
    }),
  ],
  external: ["react", "react-dom", "react/jsx-runtime.js"],
};
