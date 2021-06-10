module.exports = {
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/exec", {
            "successCmd": "./server-build-script.sh ${nextRelease.version}",
        },
        "@semantic-release/changelog", {
            "changelogFile": "CHANGELOG.md"
        },
        "@semantic-release/git", {
            "npmPublish": false
        },
        "@semantic-release/git", {
            "assets": ["package.json", "CHANGELOG.md"],
            "message": "chore(release): ${nextRelease.version} [BUILD COMMIT]\n\n${nextRelease.notes}"
        },
        "@semantic-release/github",
    ],
    branches: ['main', 'next'],
    preset: 'angular'
}
