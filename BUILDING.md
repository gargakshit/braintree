### Building

---

- Windows

  - Requirements
    - Node v14.9.0
    - Yarn
    - A windows machine
  - How to build
    - Clone the repo
    - Checkout to the `develop` branch
    - Navigate to the directory where you cloned BrainTree
    - ```batch
      yarn # Installs all the dependencies
      yarn electron-pack-win # Packages the app
      ```

- MacOS
  - Requirements
    - Node v14.9.0
    - Yarn
    - A MacOS machine
  - How to build
    - Clone the repo
    - Checkout to the `develop` branch
    - Navigate to the directory where you cloned BrainTree
    - ```bash
      yarn # Installs all the dependencies
      yarn electron-pack-mac # Packages the app
      ```

---

### Footnotes

We include a `.nvmrc` file, and highly encourage to use nvm to get consistent builds across all machines.
