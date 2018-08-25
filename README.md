coveai
======

repo usage:

> git submodule init

> git submodule update

> cd compute_prover/server/

> cp coveai_server.js pequin/pepper/

> cp includes/*.h pequin/pepper 

> cp -r libraries/boost pequin/pepper/

> cp -r libraries/leveldb pequin/pepper/

> cd pequin/thirdparty/

> ./install_pepper_deps.sh

> cd ../pepper/

> npm install express cors 

> node coveai_server.js


unit test:

Step One

http://localhost:3000/keygen

Step Two

http://localhost:3000/prove

Step Three

http://localhost:3000/verify


docker usage:

1) docker pull gleim/clustering:v0.1

2) docker run -p 49160:3000 gleim/clustering:v0.1

3) http://localhost:49160/keygen

4) http://localhost:49160/prove

5) http://localhost:49160/verify


note:  repo & docker usage tested on Ubuntu 16.04 64-bit
