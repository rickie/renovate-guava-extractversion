#!/usr/bin/env bash

set -e -u -o pipefail

config_path="$(dirname "$(readlink -f "${0}")")/config.js"

docker run --rm \
  -v "${config_path}:/usr/src/app/config.js" \
  -e LOG_LEVEL=debug -e GITHUB_TOKEN="${GITHUB_TOKEN}" \
  renovate/renovate
