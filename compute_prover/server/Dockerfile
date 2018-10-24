FROM pequin-pepper

RUN apt-get install npm
RUN npm install express cors
# add these after RUN because they're most likely to change
WORKDIR /usr/local/src
COPY icf_cy_pam_clustering.sfdl ./pequin/pepper/apps/
COPY icf_cy_pam_clustering_v_inp_gen.h ./pequin/pepper/apps/
COPY coveai_server.js .
COPY run.sh .
CMD ["./run.sh"]
