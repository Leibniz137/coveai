FROM ubuntu
COPY apt.conf /etc/apt/apt.conf.d/docker-install
COPY linux-env.sh /tmp/
WORKDIR /usr/local/src
COPY pequin pequin

# COPY build.sh .
COPY run.sh .

# need to be in pequin/ for install_debian_ubuntu.sh
# to successfully install
WORKDIR /usr/local/src/pequin/

# cmake is necessary because the version of pequin submodule used predates this commit:
# https://github.com/pepper-project/pequin/commit/bf546c9d9de3e5f2c5b7d2e139b9459ad88a1c38
RUN apt-get update \
  && apt-get install cmake git sudo \
  && ./install_debian_ubuntu.sh

# WORKDIR /usr/local/src/pequin/pepper
#
# # add these after RUN because they're most likely to change
# COPY coveai_server.js .
# CMD ["node", "coveai_server.js"]
#
# COPY icf_cy_pam_clustering.sfdl pequin/pepper/apps/
