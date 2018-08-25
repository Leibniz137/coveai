compute_prover
==============

repo usage:

> cd coveai/

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
