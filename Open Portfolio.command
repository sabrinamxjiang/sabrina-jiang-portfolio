#!/bin/zsh

cd -- "$(dirname "$0")" || exit 1

PORT=8000
while [ "$PORT" -le 8010 ]; do
  URL="http://127.0.0.1:${PORT}/"
  EXISTING_PAGE=$(curl --silent --fail --max-time 1 "$URL" 2>/dev/null)
  if [ $? -ne 0 ]; then
    break
  fi
  if print -r -- "$EXISTING_PAGE" | grep -q "Sabrina Jiang | Supply Chain Portfolio"; then
    open "$URL"
    exit 0
  fi
  PORT=$((PORT + 1))
done

if [ "$PORT" -gt 8010 ]; then
  echo "Could not find an available local preview port between 8000 and 8010."
  echo "Close another local server and try again."
  read -r "?Press Return to close."
  exit 1
fi

URL="http://127.0.0.1:${PORT}/"

python3 -m http.server "$PORT" --bind 127.0.0.1 &
SERVER_PID=$!

cleanup() {
  kill "$SERVER_PID" >/dev/null 2>&1
}
trap cleanup EXIT INT TERM

sleep 1
open "$URL"

echo "Sabrina Jiang Portfolio is open at $URL"
echo "Keep this window open while viewing the website."
echo "Press Control-C to stop the local preview."

wait "$SERVER_PID"
