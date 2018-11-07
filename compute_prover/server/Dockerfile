FROM thenateway/pequin-pepper:bf546c9d9de3e5f2c5b7d2e139b9459ad88a1c38

WORKDIR /usr/local/src
RUN apt-get install npm \
  && npm install express cors
COPY icf_cy_pam_clustering.sfdl ./pequin/pepper/apps/
COPY icf_cy_pam_clustering_v_inp_gen.h ./pequin/pepper/apps/
COPY coveai_server.js .
COPY run.sh .
CMD ["./run.sh"]
ENV DOCKER true
COPY includes ./pepper_deps/include
COPY libraries/leveldb ./pepper_deps/include/leveldb
