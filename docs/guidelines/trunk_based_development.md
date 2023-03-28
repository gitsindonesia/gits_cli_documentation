---
sidebar_position: 4
---

# Trunk Based Development

Trunk based development has become SOP to implement. Learn for more SOP Trunk Based Development [here](https://bit.ly/3FRzx2g)

## Summary

A source-control branching model, where developers collaborate on code in a single branch called ‘trunk’ *, resist any pressure to create other long-lived development branches by employing documented techniques. They therefore avoid merge hell, do not break the build, and live happily ever after.

* main for the Git community since 2020 (master with unsavory connotations before)

## Shared branches off mainline/main/trunk are bad at any release cadence

![Shared branches off mainline/main/trunk are bad at any release cadence](https://trunkbaseddevelopment.com/trunk1a.png)

## Trunk-Based Development For Smaller Teams

![Trunk-Based Development For Smaller Teams](https://trunkbaseddevelopment.com/trunk1b.png)

## Scaled Trunk-Based Development

![Scaled Trunk-Based Development](https://trunkbaseddevelopment.com/trunk1c.png)

## Elaboration, Claims and Caveats

![Elaboration, Claims and Caveats](https://trunkbaseddevelopment.com/ix_key.png)

Trunk-Based Development is a key enabler of Continuous Integration and by extension Continuous Delivery. When individuals on a team are committing their changes to the trunk multiple times a day it becomes easy to satisfy the core requirement of Continuous Integration that all team members commit to trunk at least once every 24 hours. This ensures the codebase is always releasable on demand and helps to make Continuous Delivery a reality.

The dividing line between small team Trunk-Based Development and scaled Trunk-Based Development is a subject to team size and commit rate consideration. The precise moment a dev team is no longer “small” and has transitioned to “scaled” is subject to practitioner debate. Regardless, teams perform a full “pre integrate” build (compile, unit tests, integration tests) on their dev workstations before committing/pushing for others (or bots) to see.

## References

* <https://trunkbaseddevelopment.com/>
