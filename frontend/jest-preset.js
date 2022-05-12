const path = require('path')
const { jsWithTsESM } = require('ts-jest/presets')

const jestTransformer = path.resolve(__dirname, './jest-transformer')

/** @type {import('./types').JestConfig} */
module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: false,
      isolatedModules: true,
    },
  },

  logHeapUsage: true,

  moduleNameMapper: {
    '\\.module\\.(css|pcss|postcss|less|sass|scss|styl)$': 'identity-obj-proxy',
    '\\.(css|pcss|postcss|less|sass|scss|styl)$': jestTransformer,
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': [
      jestTransformer,
      { type: 'filename' },
    ],
  },

  passWithNoTests: true,

  setupFilesAfterEnv: [path.resolve(__dirname, 'jest-setup.js')],

  testEnvironment: 'jsdom',

  transform: {
    ...jsWithTsESM.transform,
  },
}
