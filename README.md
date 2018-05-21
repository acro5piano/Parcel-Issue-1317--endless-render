# What is this

A reproduction repository for parcel bundler issue.

Rebuild HMR results in endless render cycle (?) (React)

https://github.com/parcel-bundler/parcel/issues/1317

# Start

```
yarn install
yarn start
```

# Reproduction

- Check out the repo
- `git checkout reproduction-package-json`
- `yarn install`
- `yarn start`
- Open http://localhost:1234 and chrome developer tool > console (for confirmation)
- Open "package.json"
- Edit something and save

# Screenshot

![image](https://user-images.githubusercontent.com/10719495/40290955-b06d33ac-5cfc-11e8-8bd9-f71c81a0a881.png)
![image](https://user-images.githubusercontent.com/10719495/40290958-b6090a70-5cfc-11e8-82bc-fe3a77aa6ef4.png)

# What I did

```
yarn init -y .
yarn add typescript react react-dom
yarn add -D parcel-bundler babel-preset-react babel-plugin-env
```
