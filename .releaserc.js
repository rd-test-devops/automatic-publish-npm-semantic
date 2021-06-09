module.exports = {
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/github",
        ["@semantic-release/exec", {
            "prepareCmd": "./server-build-script.sh ${nextRelease.version}",
        }],
        ["@semantic-release/release-notes-generator"],
        ["@semantic-release/git", {
            "assets": ["package.json"],
           "message": "chore(release): ${nextRelease.version} [BUILD COMMIT]\n\n${nextRelease.notes}"
        }],
    ],
    branches: ['main', 'next'],
    preset: 'angular'
}
