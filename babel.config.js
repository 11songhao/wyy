module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  piugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true,
      },
      "vant",
    ],
  ],
};
