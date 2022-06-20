const fs = require('fs');
// const _path = require('path');
const killPort = require('kill-port');
const colors = require('picocolors');
const { defineConfig, createLogger, loadEnv } = require('vite');
const { esbuildCommonjs } = require('@originjs/vite-plugin-commonjs');
const react = require('@vitejs/plugin-react');
const dts = require('vite-dts').default;
const reactSvgPlugin = require('vite-plugin-react-svg');
const PORT = process.env.PORT || 3000;

// const getPkg = () => {
//   const pkg = require('./package.json');

//   pkg.main = pkg.main || 'dist/index.js';
//   pkg.module = pkg.module || 'dist/index.es.js';
//   pkg.style = pkg.style || 'dist/index.css';
//   pkg.types = pkg.types || 'dist/index.d.ts';
//   pkg.source = pkg.source || 'src/App.tsx';

//   return pkg;
// };

const logger = createLogger('info', { allowClearScreen: false });

/**
 * Pick env vars which defined for react-scripts.
 *
 * @param {import('vite').ConfigEnv} env
 */
const getProcessEnv = ({ mode, command }) => {
  if (command === 'build') {
    // Leave it as is and pass it to webpack.
    return { 'process.env': 'process.env' };
  }

  const reactAppEnv = loadEnv(mode, '', ['REACT_APP_']);

  if (Object.keys(reactAppEnv).length) {
    return Object.fromEntries(
      Object.entries(reactAppEnv).map(([key, value]) => [
        `process.env.${key}`,
        JSON.stringify(value),
      ]),
    );
  } else {
    // const coloredEnvFileName = colors.yellow(colors.bold(`.env.${mode}.local`))
    // logger.warn(`Please add ${coloredEnvFileName} to the root of project.`, {
    //   timestamp: true,
    // })
  }
};

/**
 * Get valid localhost dev cert.
 *
 * @param {import('vite').ConfigEnv} env
 */
// eslint-disable-next-line
const getHttps = async ({ command }) => {
  if (command === 'serve') {
    const devcert = await import('devcert');
    return await devcert.certificateFor('localhost');
  }
};

/** Generate `tailwind.config.js` and `postcss.config.js` if needed. */
const ensureTailwindConfig = () => {
  const tailwindConfigFilename = 'tailwind.config.js';
  const postcssConfigFilename = 'postcss.config.js';

  if (!fs.existsSync(tailwindConfigFilename)) {
    const coloredConfigFileName = colors.cyan(colors.bold(tailwindConfigFilename));
    logger.info(`Generate ./${coloredConfigFileName}`, {
      timestamp: true,
    });
    const { name } = require('./package.json');
    fs.writeFileSync(
      tailwindConfigFilename,
      `/** @type {import('${name}').TailwindConfig} */
module.exports = { presets: [require('${name}/tailwind.config')] }`,
    );
  }

  if (!fs.existsSync(postcssConfigFilename)) {
    const coloredConfigFileName = colors.cyan(colors.bold(postcssConfigFilename));
    logger.info(`Generate ./${coloredConfigFileName}`, {
      timestamp: true,
    });
    fs.writeFileSync(
      postcssConfigFilename,
      `module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}`,
    );
  }
};

/**
 * @param {import('./vite.config').CreateConfigOptions} options
 * @returns {import('vite').UserConfigExport}
 */
const createConfig = (options = {}) => {
  const { base = '', tailwindcss } = options;

  return defineConfig(async (env) => {
    if (env.command === 'serve') {
      await killPort(PORT);
    }

    // const _pkg = getPkg();

    if (tailwindcss) {
      ensureTailwindConfig();
    }

    /** @type {import('vite').UserConfig} */
    const config = {
      clearScreen: false,

      base,

      define: {
        ...getProcessEnv(env),
      },

      envPrefix: 'REACT_APP_',

      resolve: {
        alias: [
          /**
           * Fix amplify build
           *
           * @see https://ui.docs.amplify.aws/getting-started/installation?platform=vue
           */
          {
            find: './runtimeConfig',
            replacement: './runtimeConfig.browser',
          },
        ],
      },

      plugins: [react(), dts(), reactSvgPlugin()],

      build: {
        // lib: {
        //   entry: _path.resolve(pkg.source),
        //   formats: ['cjs', 'es'],
        //   fileName: (format) =>
        //     _path.basename({ cjs: pkg.main, es: pkg.module }[format]),
        // },
        emptyOutDir: !process.argv.includes('--watch'),
        minify: false,
        sourcemap: true,
        // rollupOptions: {
        //   external: (id) => !id.startsWith('.') && !_path.isAbsolute(id),
        //   output: {
        //     assetFileNames: ({ name }) =>
        //       name === 'style.css' ? _path.basename(pkg.style) : name,
        //   },
        // },
      },

      esbuild: {
        loader: 'tsx',
        include: /src\/.+\.(j|t)sx?$/,
        exclude: [],
      },
      optimizeDeps: {
        esbuildOptions: {
          plugins: [
            esbuildCommonjs(['react-calendar', 'react-date-picker']),
            /**
             * Plugin to force trust `.js` as `.jsx`.
             *
             * @see https://github.com/vitejs/vite/discussions/3448#discussioncomment-749919
             */
            {
              name: 'load-js-files-as-jsx',
              setup(build) {
                build.onLoad({ filter: /src\/.+\.js$/ }, async (args) => ({
                  loader: 'tsx',
                  contents: fs.readFileSync(args.path, 'utf8'),
                }));
              },
            },
          ],
        },
      },

      server: {
        // https: await getHttps(env),
        port: PORT,
        strictPort: true,
      },
    };

    return config;
  });
};

export default createConfig({
  base: '/cash-clone/',
  tailwindcss: true,
});
