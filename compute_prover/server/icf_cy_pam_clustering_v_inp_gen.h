

void icf_cy_pam_clustering_input_gen (mpq_t * input_q, int num_inputs) {

    for (int i = 0; i < num_inputs; i++) {
    	// original
        //mpq_set_ui(input_q[i], rand(), 1);
    	
    	// binary [0,1]
        mpq_set_ui(input_q[i], rand()%2, 1);
    }
}
