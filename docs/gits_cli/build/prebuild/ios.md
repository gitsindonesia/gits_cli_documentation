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

## Migration

To migrate from previous version just add the file `ios/deployment/appstore_deployment.json` which was described earlier then in `.gitlab-ci.yml`

```diff title=".gitlab-ci.yml"
.build-ios:
  stage: build_ios
  resource_group: build_and_deploy_ios
  allow_failure: false
  script:
    # Get version name & build number from tag
    - IFS='-' # Read the split words into an array based on dash delimiter.
    - read -a strarr <<< "$CI_COMMIT_TAG"
    - VERSION_NAME=${strarr[1]}
    - BUILD_NUMBER=${strarr[2]}
    # Setup key ios
-   - echo "$APP_STORE_JSON" > "$PATH_APP_STORE_JSON"
+   - gits_cli prebuild ios -f ${CI_ENVIRONMENT_NAME}
    # Change working directory to ios
    - cd ios
    # Set up code signing settings on Xcode project.
    - chmod +x deployment/provisioning.sh
    - ./deployment/provisioning.sh
    - pod install --repo-update
    # Change working directory to root
    - cd ..
    # Build ipa
    - gits_cli build ipa -f ${CI_ENVIRONMENT_NAME} --build-number=$BUILD_NUMBER --build-name=$VERSION_NAME --export-options-plist="$PATH_EXPORT_OPTIONS_PLISTS"
  # artifacts: # If you want to generate artifacts, uncomment this script.
  #   paths:
  #   - $PATH_IPA
```
