# Separate dockerfile for pequin/pepper library
# to prevent accidental recompiles using docker image cache
#
# To build:
#   docker build -t pequin-pepper -f pequin.Dockerfile .
FROM ubuntu
COPY apt.conf /etc/apt/apt.conf.d/docker-install
ENV SOURCE_ROOT /usr/local/src
WORKDIR $SOURCE_ROOT
COPY pequin pequin

# need to be in pequin/ for install_debian_ubuntu.sh
# to successfully install
WORKDIR $SOURCE_ROOT/pequin/

# cmake is necessary because the version of pequin submodule used predates this commit:
# https://github.com/pepper-project/pequin/commit/bf546c9d9de3e5f2c5b7d2e139b9459ad88a1c38
RUN apt-get update \
  && apt-get install cmake git sudo \
  && ./install_debian_ubuntu.sh
