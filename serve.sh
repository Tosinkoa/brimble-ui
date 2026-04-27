#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
PORT="${PORT:-8080}"
exec python3 -m http.server "$PORT" --directory public
