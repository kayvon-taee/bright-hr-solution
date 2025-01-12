#!/bin/bash

echo "Running cypress tests"

npm run dev & npx wait-on http://localhost:5173
npm run e2e:chrome
kill http://localhost:5173

echo "Running Jest tests..."
npm run test

echo "All tests have finished"


