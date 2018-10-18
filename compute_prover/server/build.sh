#!/bin/bash

# missing libraries (Debian testing)
#sudo apt install libevent-dev libopenmpi-dev libhwloc-dev libboost-program-options-dev

# install in current directory
# overriding flags that wouldn't allow libfmt to compile (-Werror)
(HOME_HACK=$(pwd) && \
  cd pequin/thirdparty && \
  DBG='-g -Wall -Wextra -Wno-unused-parameter' HOME=${HOME_HACK} ./install_pepper_deps.sh)

