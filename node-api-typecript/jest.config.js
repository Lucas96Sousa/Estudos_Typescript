/* eslint-disable no-undef */
const  {resolve} = require('path')
const root = resolve(__dirname)

module.exports = {
    rootDir: root,
    displayName: 'root-tests',
    testMatch: ['<rootDir>/src/**/*.tests.ts'],
    testEnvironmentc: 'node',
    clearMocks: true,
    preset: 'ts-jest',
    moduleNameMapper: {
        '@src/(.*)': '<rootDir>src/$1',
        '@test(.*)': '<rootDir>/test/$1'
    },
};