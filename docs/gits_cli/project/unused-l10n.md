---
sidebar_position: 13
---

# Unused-l10n

This command aims to find the l10n key that is not used in the code.

```bash
gits unused-l10n
```

:::info

This command only displays unused l10n keys, not to delete unused l10n keys.

:::

Output if no unused l10n key is found:

```bash
Checking unused l10n
📦 Total Packages: 12
---------------------------------------

Total unused: 0
unused-l10n
SUCCESS
```

Output if an unused l10n key is found:

```bash
Checking unused l10n
📦 Total Packages: 12
---------------------------------------

Total unused: 6
---------------------------
messageOnboarding1
messageOnboarding2
messageOnboarding3
titleOnboarding1
titleOnboarding2
titleOnboarding3
unused-l10n
SUCCESS
```

here the results obtained are 6 namely `messageOnboarding1`, `messageOnboarding2`, `messageOnboarding3`, `titleOnboarding1`, `titleOnboarding2` & `titleOnboarding3`. You can find out which l10n key is not used, so you can take the next action whether to delete it or use it at a later time.
