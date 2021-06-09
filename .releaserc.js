module.exports = {
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/github",
        ["@semantic-release/npm", {
            npmPublish: false
        }],
        ["@semantic-release/release-notes-generator"],
        ["@semantic-release/git", {
            "assets": ["package.json"],
           "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }],
        // ["@semantic-release/exec", {
        //     "prepareCmd": "./server-build-script.sh ${nextRelease.version}",
        // }],
    ],
    branches: ['main', 'next'],
    preset: 'angular'
}
