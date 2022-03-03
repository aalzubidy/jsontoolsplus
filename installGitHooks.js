const fs = require('fs');

try {
  const preCommitFile = fs.readFileSync('./pre-commit.sh', 'utf8');
  fs.writeFileSync('.git/hooks/pre-commit', preCommitFile, { mode: 0o755 });
  console.log('Added pre-commit hooks');
} catch (error) {
  console.log('Could not add pre-commit hooks');
  console.log(error);
}
