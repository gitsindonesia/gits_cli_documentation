---
sidebar_position: 8
---

# Unit Test
This command is used to generate a test file for a feature
```bash
gits unit-test [unit_test_name] -f [feature_name]
```
for the example, we create a unit test with the name users in the feature master.
```bash
gits unit-test users -f master
```
The unit test file will automatically be generated in `features/master/test/user_test`

:::caution

The unit test file will not be generated if the feature name we enter does not exist.
:::