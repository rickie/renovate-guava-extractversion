module.exports = {
    $schema: "https://docs.renovatebot.com/renovate-schema.json",
    token: process.env.GITHUB_TOKEN,
    onboarding: false,
    repositories: ["rickie/renovate-guava-extractversion"],
    requireConfig: false,
    gitAuthor: "Bot <bot@example.com>",
    commitMessageAction: "Upgrade",
    commitMessageTopic: "{{depName}}",
    commitMessageExtra: "{{currentVersion}} -> {{newVersion}}",
    enabledManagers: ["maven"],
    packageRules: [
        {
            "customChangelogUrl": "https://github.com/google/guava",
            "depName": "Guava",
            "versioning": "regex:^(?<major>\\d+)\\.(?<minor>\\d+)(\\.(?<patch>\\d+))?-(?<compatibility>jre)$",
            "matchPackageNames": [
                "com.google.guava:guava",
                "com.google.guava:guava-bom"
            ]
        }
    ],
};
