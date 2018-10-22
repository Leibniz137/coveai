# Steps to build:
#   git submodule init
#   git submodule update
#   docker build -t coveai -f Dockerfile ./compute_prover/server

FROM ubuntu
COPY linux-env.sh /tmp/
RUN apt-get -y update \
  && apt-get -y install sudo \
  && /tmp/linux-env.sh
WORKDIR /usr/local/src
COPY pequin .

COPY coveai_server.js pequin/pepper/
COPY icf_cy_pam_clustering.sfdl pequin/pepper/apps/
COPY includes/*.h pequin/pepper/
COPY libraries/boost pequin/pepper/
COPY libraries/leveldb pequin/pepper/

WORKDIR /usr/local/src/pequin/thirdparty/
RUN ./install_debian_ubuntu.sh && npm install express cors

WORKDIR /usr/local/src/pequin/pepper
CMD ["node", "coveai_server.js"]
