import { UserConfigExport } from 'vite'

export interface CreateConfigOptions {
  /**
   * Base public path when served in development or production. Valid values include:
   *
   * - Absolute URL pathname, e.g. `/foo/`
   * - Full URL, e.g. `https://foo.com/`
   * - Empty string or `./` (for embedded deployment)
   *
   * @default '/'
   * @see https://vitejs.dev/config/#base
   */
  base?: string

  /**
   * A utility-first CSS framework.
   *
   * @default false
   * @see https://tailwindcss.com/
   */
  tailwindcss?: boolean
}

export const createConfig: (options?: CreateConfigOptions) => UserConfigExport
