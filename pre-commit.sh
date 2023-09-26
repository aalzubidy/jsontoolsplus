#!/bin/bash

# exit on any failure in the pipeline
set -e

echo "-------------Started: Pre-Commit Hooks-------------"

# Check branch name
BRANCH=`git branch | grep \* | cut -d ' ' -f2`
IFS="/"
TYPE=($BRANCH)

# Run NPM Version to update package.json and package-lock.json
if [ "${TYPE[0]}" = "patch" ]; then
	echo "Updating to a patch version"
	npm --no-git-tag-version version patch
elif [ "${TYPE[0]}" = "minor" ]; then
	echo "Updating to a minor version"
	npm --no-git-tag-version version minor
elif [ "${TYPE[0]}" = "major" ]; then
	echo "Updating to a major version"
	npm --no-git-tag-version version major
else
	echo "Following default for master and updating to a patch version."
	npm --no-git-tag-version version patch
fi

# Delete old package-lock.json
# rm -rf package-lock.json

# Build application
# npm install
npm run build

# Add new git files to the commit
git add package.json package-lock.json

echo "-------------Finished: Pre-Commit Hooks-------------"
