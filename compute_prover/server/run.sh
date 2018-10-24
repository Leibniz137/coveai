#!/bin/bash

# pass verified_app as first argument or default to default_verified_app's content
default_verified_app="icf_cy_pam_clustering.sfdl"
verified_app=${1:-${default_verified_app}}

trap on_exit INT

# clean submodule
function on_exit() {
  # no need to clean and no git repo either (which causes error)
  if [ -z ${DOCKER+x} ]; then
    cd pequin/pepper && \
    git reset --hard && \
    git clean -x -f -d
    exit $?
  fi
}

# enable precedence of environment variables
sed -i 's,DEPSDIR := ,DEPSDIR ?= ,' pequin/pepper/Makefile

# copy new verified_app
if [ -f "${verified_app}" ]; then
  cp "${verified_app}" "pequin/pepper/apps/"
fi

DEPSDIR="$(pwd)/pepper_deps" node coveai_server.js "${verified_app%.*}"

on_exit

