---
sidebar_position: 3
---

# Page

This command is used to generate page in a feature.

```bash
gits page [page_name] -f [feature_name]
```

for the example we will create page users on the feature master

```bash
gits page users -f master
```

The page users folder will be generated in `features/master/lib/users` automatically.

![File generated](../../../static/img/generate/page/user_page.png)

:::caution

Page will not be generated if:

- The feature that we enter does not exist
- The page name we entered already exists

:::
