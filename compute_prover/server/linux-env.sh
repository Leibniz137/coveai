# run as privileged user
set -e

apt update
apt upgrade
apt dist-upgrade
apt install -y curl
apt install -y python-minimal
apt install -y libz-dev
# Ubuntu 16.04 libsnark dependencies
apt-get install -y build-essential \
  cmake \
  git \
  libgmp3-dev \
  libprocps-dev \
  python-markdown \
  libboost-all-dev \
  libssl-dev
apt install -y pkg-config
# node package manager
apt install -y npm
# node.js
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
apt install -y nodejs
# java
apt install -y default-jre
apt install -y default-jdk
apt install -y ant
apt install -y golang-go
