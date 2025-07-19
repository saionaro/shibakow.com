/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ["master"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: [
          {
            path: "release.zip",
            label: "build_<%= nextRelease.name %>",
          },
        ],
      },
    ],
    "@semantic-release/git",
  ],
};
