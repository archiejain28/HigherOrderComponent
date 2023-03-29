module.exports = {
    moduleDirectories: [
        "node_modules"
    ],
     moduleFileExtensions: [
        "js",
        "json",
        "jsx",
        "ts",
        "tsx",
     ],
     transform: {
        //  "^.+\\.(ts|tsx)$": "ts-jest",
        //  "^.+\\.(js)$": "babel-jest",
         "\\.js$": "<rootDir>/node_modules/babel-jest" // Use <rootDir> . 
     },
     testPathIgnorePatterns: [
        "/node_modules/(?!(framework7))"
      ],
}
