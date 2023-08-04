---
sidebar_position: 7
---

# Innovation Idea

- Local Database ✅

    Buat generator untuk local database untuk mempermudah pengerjakan fitur local tanpa effort lebih.

    Done: lihat lebih detail di [local2dart](../gits_cli/generate/local2dart)
- CI/CD iOS Different Flavor ✅

    Issue terjadi di ios ketika running ci/cd berbeda flavor masih memerlukan pengeditan manual via xcode pada fastlane & project.pbxproj pada bagian bundle id & provosioning profile sehingga tidak dinamis.

    Done: lihat lebih detail di [prebuild ios](../gits_cli/build/prebuild/ios)
- Simple Route

    Buat route yang sekarang menjadi lembih simple untuk digunakan, karena saat ini route yang kita gunakan cukup complek dan tricky untuk digunakan.
- Remove flutter_local_notifications in gits_inspector

    Saat ini gits_inspector masih memiliki dependency ke flutter_local_notifications terjadi issue jika project yang kita kerjakan menggunakan dependency yang sama hal ini akan terjadi double init dan terjadi issue karena flutter_local_notifications merupakan singleton dan tidak bisa dibedakan instancenya.

    Solusinya buat notification yang standalone untuk gits_inspector tanpa ada dependency ke flutter_local_notifications / dependency notification lainnya.
