---
sidebar_position: 1
---

# Pre Build Ios

This command aims to generate an ios configuration file before the build process is carried out, usually used for CI/CD needs.

Here is 1 file needed which is in `ios/deployment/appstore_deployment.json`:

```json
{
  "dev": {
    "email_identity": "ios@gits.id",
    "itc_team_id": "96184904",
    "team_id": "P53KJ6MXZH",
    "provisioning_profiles": "Gits Flutter Starter Kit"
  },
  "stag": {
    "email_identity": "ios@gits.id",
    "itc_team_id": "96184904",
    "team_id": "P53KJ6MXZH",
    "provisioning_profiles": "Gits Flutter Starter Kit"
  },
  "prod": {
    "email_identity": "ios@gits.id",
    "itc_team_id": "96184904",
    "team_id": "P53KJ6MXZH",
    "provisioning_profiles": "Gits Flutter Starter Kit"
  }
}
```

Here are flavors `dev`, `stag` and `prod`.

- `email_identity` is email used to identity in runner
- `itc_team_id` is  App Store Connect Team ID
- `team_id` is Developer Portal Team ID
- `provisioning_profiles` is Name of Provisioning Profile

If so, do the command:

```bash
gits prebuild ios -f [flavor]
```

## Generate Results

There are 3 files that will be generated from this ios prebuild:

- `ios/fastlane/Appfile`
- `ios/Runner.xcodeproj/project.pbxproj`
- `ios/ExportOptions.plist`

## Options

- Flavor/Environment :  
  
| Flavor/Environment | Alternative | Description |
|----------|-------------|-------------|
| `-f dev` | `--flavor dev` | Pre Build project on dev environment (Default) |
| `-f stag` | `--flavor stag` | Pre Build project on staging environment|
| `-f prod` | `--flavor prod` | Pre Build project on production environment |
