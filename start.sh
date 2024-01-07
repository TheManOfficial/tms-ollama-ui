#!/bin/bash

stop_server() {
    echo "Stopping server..."
    exit 0
}

trap stop_server SIGINT

echo "Opening browser... (You may need to refresh the page)"
sleep 2

xdg-open http://localhost:3000/ &
python3 -m http.server --bind 127.0.0.1 3000

