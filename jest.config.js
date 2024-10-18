module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  // Add this if you're using ES modules
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  // If you are using Babel
  // transform: {
  //   '^.+\\.jsx?$': 'babel-jest',
  // },
};
