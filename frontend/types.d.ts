import * as postcss from 'postcss'

// export type { InitialOptionsTsJest as JestConfig } from 'ts-jest'

export type PostCSSConfig = postcss.ProcessOptions & { plugins?: postcss.Plugin[] }

export type { Options as ReleaseConfig } from 'semantic-release'

export type { TailwindConfig } from 'tailwindcss/tailwind-config'
