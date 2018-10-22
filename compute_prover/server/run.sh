#!/bin/bash


trap on_exit INT

# clean submodule
function on_exit() {
  cd pequin/pepper && \
  git reset --hard && \
  git clean -x -f -d
  exit $?
}

# enable precedence of environment variables
sed -i 's,DEPSDIR := ,DEPSDIR ?= ,' pequin/pepper/Makefile
# copy new app
cp icf_cy_pam_clustering.sfdl pequin/pepper/apps

DEPSDIR="$(pwd)/pepper_deps" node coveai_server.js

on_exit

