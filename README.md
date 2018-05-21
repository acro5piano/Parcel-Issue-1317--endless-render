# What is this

A reproduction repository for parcel bundler issue.

Rebuild HMR results in endless render cycle (?) (React)

https://github.com/parcel-bundler/parcel/issues/1317

# Reproduction

```
yarn init -y .
yarn add parcel-bundler typescript react react-dom
yarn add babel babel-preset-react babel-plugin-env
```
