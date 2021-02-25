#!/bin/bash

if [ -d .git ]; then
  git init
fi;
git submodule update --init --recursive
