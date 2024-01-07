#!/bin/bash
echo "Opening browser... (You may need to refresh the page)"
sleep 1

make && xdg-open http://localhost:8000/
