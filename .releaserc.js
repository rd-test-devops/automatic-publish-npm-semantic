module.exports = {
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/exec", {
            "prepareCmd": "./server-build-script.sh ${nextRelease.version}",
        },
        "@semantic-release/changelog", {
            "changelogFile": "CHANGELOG.md"
        },
        "@semantic-release/npm", {
            "npmPublish": false
        },
        "@semantic-release/git", {
            "assets": ["package.json", "CHANGELOG.md"],
            "message": "chore(release): ${nextRelease.version} [BUILD SPEC]\n\n${nextRelease.notes}"
        },
        "@semantic-release/github",
    ],
    branches: ['main', 'next'],
    preset: 'angular'
}
