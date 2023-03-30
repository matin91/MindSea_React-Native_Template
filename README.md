# Template
> MindSea React Native Starter Pack!

[![Build](https://img.shields.io/badge/iOS%20Tested-success-brightgreen.svg)](https://github.com/MindSea/ManitobaRN)
[![Build](https://img.shields.io/badge/Android%20Tested-success-brightgreen.svg)](https://github.com/MindSea/ManitobaRN)


https://user-images.githubusercontent.com/5301627/228930405-832fa1ac-e2f3-48a3-beda-a1e0ca351744.mp4



## Installation :

```bash
# Install dependencies
> yarn

```

See [`environment`](#environment-setup-:globe_with_meridians:) section for how to configure env variables.

See [`scripts`](#scripts-:wrench:) section for how to run the app.

---

### Run the app

To run the app use one of the following scripts:

- `yarn android:dev`, to start the app on Android with the `development` environment variables.
- `yarn android:stage`, to start the app on Android with the `staging` environment variables.
- `yarn android:prod`, to start the app on Android with the `production` environment variables.

- `yarn ios:dev`, to start the app on iOS with the `development` environment variables.
- `yarn ios:stage`, to start the app on iOS with the `staging` environment variables.
- `yarn ios:prod`, to start the app on iOS with the `production` environment variables.

### Branch Organization
New releases are made whenever enough new features have accumulated on the `develop` branch. Before creating a new release, create a `staging` branch off of the `develop` branch, and ensure the following things have been taken care of:

All pending features that should be included in the upcoming release are merged.
Double-check that documentation is available and up-to-date for implemented features.
Check that the version number in the documentation matches Manitoba.
Then, merge the `staging` branch into `main`, squashing all commits, and tagging the new release. Afterwards, merge the `staging` branch back to `develop` so all changes in the `staging` branch are present in `develop`.


### To enabled React-Native (Fabric) new architecture

Check the official documentation [here](https://reactnative.dev/docs/new-architecture-intro)

---
✅ `React-query`<br/>
✅ `React-navigation v6`<br/>
✅ `Nativebase v3` as design system<br />
✅ `i18next`<br/>
✅ `Typescript`<br />

---
