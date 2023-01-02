---
sidebar_position: 1
---
# API
This command is used to generate the API on a page
```bash
gits api [api_name] -p [page_name] -f [feature_name]
```
for the example we will generate an API named get_users on the feature master's users page.
```bash
gits api get_users -p users -f master
```

:::info

Generated folders/files:

- Models
- Entities
- Datasource
- Repositories
- UseCase
- BLoC
  
Customize models and entities, and add the end-points and BLoC to our cubit manually.

:::

:::tip

Use the json to dart feature for more complete generated results, please check the following link **[Json2Dart](./json2dart)**

:::

:::caution

API will not be generated if:

- The feature that we enter does not exist
- The page we entered does not exist
- The API name we entered already exists

:::