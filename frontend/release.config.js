/* eslint-disable no-template-curly-in-string */

/** @type {import('./types').ReleaseConfig} */
module.exports = {
  branches: [
    { name: 'main' },
    { name: "staging", prerelease: true},
  ],

  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/gitlab',
    [
      '@semantic-release/npm',
      {
        pkgRoot: '.',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'package-lock.json'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    [
      '@semantic-release/exec',
      {
        publishCmd:
          'echo "RELEASE_CHANNEL=${nextRelease.channel}" >> ../variables.env; echo "VERSION=${nextRelease.version}" >> ../variables.env',
      },
    ],
  ],
}
