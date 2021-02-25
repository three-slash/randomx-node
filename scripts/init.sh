#!/bin/bash

if [ ! -d .git ]; then
  git init
  git remote add origin https://github.com/three-dash/randomx-node
  git submodule add https://github.com/tevador/RandomX RandomX
fi;
git submodule update --init --recursive
