compute_prover
==============

## repo usage:

```
git clone --recurse-submodules https://github.com/ConsenSys/coveai.git
cd coveai/compute_prover/server/

# native:
./build.sh
./run.sh

# with docker:
docker build -t pequin-pepper -f pequin.Dockerfile .
docker build -t coveai .
docker run --rm -p 3000:3000 coveai
```

## unit test:

### Step One

http://localhost:3000/keygen

### Step Two

http://localhost:3000/prove

### Step Three

http://localhost:3000/verify
