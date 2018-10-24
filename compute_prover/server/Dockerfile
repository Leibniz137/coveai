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

RUN apt-get install npm
RUN npm install express cors
# add these after RUN because they're most likely to change
WORKDIR /usr/local/src
COPY icf_cy_pam_clustering.sfdl ./pequin/pepper/apps/
COPY icf_cy_pam_clustering_v_inp_gen.h ./pequin/pepper/apps/
COPY coveai_server.js .
CMD ["node", "coveai_server.js"]
