#!/bin/bash
set -euxo pipefail

function check_file {
	echo "Checking $1"
	npx eslint --print-config "$1" | npx eslint-config-prettier-check
}

# files=($(find src/ -type f -name "*.js*"))
# for file in "${files[@]}"; do
# 	npx eslint --print-config "$file" | npx eslint-config-prettier-check
# done

export -f check_file
find src/ -type f -name "*.js*" | xargs -I{} -n 1 -P 10 bash -c 'check_file {}'
