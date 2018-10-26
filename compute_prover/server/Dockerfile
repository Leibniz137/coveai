FROM thenateway/pequin-pepper:bf546c9d9de3e5f2c5b7d2e139b9459ad88a1c38

RUN apt-get install npm
WORKDIR /usr/local/src
RUN npm install express cors
# add these after RUN because they're most likely to change
COPY icf_cy_pam_clustering.sfdl ./pequin/pepper/apps/
COPY icf_cy_pam_clustering_v_inp_gen.h ./pequin/pepper/apps/
COPY coveai_server.js .
COPY run.sh .
CMD ["./run.sh"]
ENV DOCKER true
COPY includes ./pepper_deps/include
COPY libraries/leveldb ./pepper_deps/include/leveldb
