#!/bin/bash

cd RandomX
mkdir -p build && cd build
cmake -DARCH=native ..
make
