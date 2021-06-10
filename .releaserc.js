module.exports = {
    plugins: [
        "@semantic-release/commit-analyzer",
        ["@semantic-release/release-notes-generator"],
        ["@semantic-release/exec", {
            "prepareCmd": "./server-build-script.sh ${nextRelease.version}",
        }],
        ["@semantic-release/git", {
            "assets": ["package.json"],
           "message": "chore(release): ${nextRelease.version} [BUILD COMMIT]\n\n${nextRelease.notes}"
        }],
        "@semantic-release/github",
    ],
    branches: ['main', 'next'],
    preset: 'angular'
}
