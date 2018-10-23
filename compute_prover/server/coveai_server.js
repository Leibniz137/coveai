const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { spawn } = require('child_process');

/*
APPs That Fail:
const math_app = 'genome_snp_freq';
const math_app = 'ridge_regression';
const math_app = 'face_detect_hamming';
const math_app = 'tolling';
const math_app = 'kmpsearch_flat';
const math_app = 'merge_sort';
const math_app = 'email_history';
const math_app = 'hashfree_test';
const math_app = 'horspool_flat';

APPs That Succeed:
const math_app = 'dna_align';
const math_app = 'mm_pure_arith';
const math_app = 'kmpsearch';
const math_app = 'kmpsearch_dfa';
const math_app = 'horspool';
const math_app = 'mergesort_merkle';

*/

// best for DApp demo (3 constraints)
//const math_app = 'hello_world';

// timing more like real-life (million+ constraints)
//const math_app = 'dna_align';

// best real-life use case/usability combination
//const math_app = 'pam_clustering';

// best real-life use case
var args = process.argv.slice(2);
if (args[0]) math_app = args[0];
else         math_app = 'icf_cy_pam_clustering';

const work_dir = 'pequin/pepper';

const app = express();
app.use(cors())
app.get('/keygen', (request, response) => {
  // initialization phase one: verifier compile and setup
  const verifier_setup = spawn('./pepper_compile_and_setup_V.sh', [`${math_app}`, `${math_app}.vkey`, `${math_app}.pkey`], {cwd: `${work_dir}`});
  var keygen_setup_result = 0;

  var fileStream = fs.createWriteStream('./output.log', {flags: 'a'});
  verifier_setup.stdout.pipe(fileStream);

  verifier_setup.stdout.on('data', (data) => {
    console.log(`verifier keygen output: ${data}`);

    keygen_setup_result = data[0];
  });

  verifier_setup.stderr.on('data', (data) => {
    console.log(`verifier keygen error: ${data}`);
  });

  // initialization phase one complete
  verifier_setup.on('close', (code) => {
    // initialization phase two: prover compile and setup
    const prover_setup = spawn('./pepper_compile_and_setup_P.sh', [`${math_app}`], {cwd: `${work_dir}`});

    prover_setup.stdout.on('data', (data) => {
      console.log(`prover keygen output: ${data}`);
    });

    prover_setup.stderr.on('data', (data) => {
      console.log(`prover keygen error: ${data}`);
    });

    // initialization phase two complete
    prover_setup.on('close', (code) => {

      // initialization phase three: generate input
      const input_setup = spawn(`./bin/pepper_verifier_${math_app}`, ['gen_input', `${math_app}.inputs`], {cwd: `${work_dir}`});

      input_setup.stdout.on('data', (data) => {
        console.log(`input_gen keygen output: ${data}`);
      });

      input_setup.stderr.on('data', (data) => {
        console.log(`input_gen keygen error: ${data}`);
      });

      // initialization phase three complete
      input_setup.on('close', (code) => {
        console.log(`initialization process exit code ${code}`);
      });
    });
  });

  response.json(
    {message: keygen_setup_result}
  );
});


app.get('/prove', (request, response) => {

  const prover = spawn(`./bin/pepper_prover_${math_app}`, ['prove', `${math_app}.pkey`, `${math_app}.inputs`, `${math_app}.outputs`, `${math_app}.proof`], {cwd: `${work_dir}`});
  var prover_result = 0;

  prover.stdout.on('data', (data) => {
    console.log(`prove output: ${data}`);
    prover_result = data[0];
  });

  prover.stderr.on('data', (data) => {
    console.log(`prove error: ${data}`);
  });

  prover.on('close', (code) => {
    console.log(`prove process exit code ${code}`);
  });

  response.json(
    {message: prover_result}
  );
});


app.get('/verify', (request, response) => {

  const verifier = spawn(`./bin/pepper_verifier_${math_app}`, ['verify', `${math_app}.vkey`, `${math_app}.inputs`, `${math_app}.outputs`, `${math_app}.proof`], {cwd: `${work_dir}`});
  var verifier_result = 0;

  verifier.stdout.on('data', (data) => {
    console.log(`verify output: ${data}`);
    verifier_result = data[0];
  });

  verifier.stderr.on('data', (data) => {
    console.log(`verify error: ${data}`);
  });

  verifier.on('close', (code) => {
    console.log(`verify process exit code ${code}`);
  });

  response.json(
    {message: verifier_result}
  );
});


app.listen(3000, () => console.log('Listening on 3000'));

