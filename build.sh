#!/bin/bash

# clean current build files
cd public/build && rm background.* bundle.* injection.*

# rebuild
npm run build
