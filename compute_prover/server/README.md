compute_prover
==============

### Build:
```
git submodule init
git submodule update
docker build -t coveai .
```

### Test:
Step One
```
docker run -p 3000:3000 coveai
```

Step Two

http://localhost:3000/keygen

Step Three

http://localhost:3000/prove

Step Four

http://localhost:3000/verify
