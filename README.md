# Rail For Less

A fork of [rail-for-less](https://github.com/tikkisean/rail-for-less)

This fork allows you to run the most recent version locally (as of 04/20/2024 😎).

## Pre-requisites

* Node.js
* npm or yarn
* Docker & Docker Compose (only for option 1)

## Instructions

### Option 1: Docker Compose

1. Clone this repository & traverse to the directory
```bash
git clone https://github.com/luisegarduno/rail-for-less.git; cd rail-for-less
```

2. Grant permission to the script & run it :slightly_smiling_face:
```bash
sudo chmod +x Initialize.sh; ./Initialize.sh
```

3. Done 🎉 - Visit http://localhost:3000/


4. To stop simply stop the docker container
```bash
docker compose down
```

---------------------------------

### Option 2: Manual (using yarn)

1. Clone this repository & traverse to the directory
```bash
git clone https://github.com/luisegarduno/rail-for-less.git; cd rail-for-less/frontend
```

2. Install dependencies
```bash
yarn
```

3. Start the server
```bash
yarn start
```

3. Done 🎉 - Visit http://localhost:3000/

--------------------------------------

### Option 3: Manual (using npm)

1. Clone this repository & traverse to the directory
```bash
git clone https://github.com/luisegarduno/rail-for-less.git; cd rail-for-less/frontend
```

2. Delete the `yarn.lock` file to avoid warnings/conflicts
```bash
rm -rf yarn.lock
```

2. Install dependencies
```bash
npm install
```

3. Start the server
```bash
npm start
```

4. Done 🎉 - Visit http://localhost:3000/
