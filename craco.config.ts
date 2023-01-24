import path from "path";

module.exports = {
  webpack: {
    alias: {
      "@constants": path.resolve(__dirname, "src/constants"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
};
