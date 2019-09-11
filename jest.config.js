module.exports = {
  "collectCoverageFrom": [
    "src/**/*.{js,jsx}",
  ],
  "reporters" : [
    ["jest-junit", {
      "outputName": "junit.xml",
      "outputDirectory": "coverage",
    }],
  ]
}
