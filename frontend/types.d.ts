import * as eslint from 'eslint'
import * as postcss from 'postcss'

export type ESLintConfig = eslint.Linter.Config

// export type { InitialOptionsTsJest as JestConfig } from 'ts-jest'

export type { Config as PrettierConfig } from 'prettier'

export type PostCSSConfig = postcss.ProcessOptions & { plugins?: postcss.Plugin[] }

export type { Options as ReleaseConfig } from 'semantic-release'

export type { TailwindConfig } from 'tailwindcss/tailwind-config'
