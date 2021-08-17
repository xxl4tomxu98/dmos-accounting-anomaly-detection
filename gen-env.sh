#!/bin/bash

# Recreate config file
rm -rf ./env-config.js
touch ./env-config.js

# Add assignment 
echo "window._env_ = {" >> ./env-config.js

  # Read value of current variable if exists as Environment variable
  value=$(printf '%s\n' "${DEPLOY_VER}")
  # Otherwise use value from hardcoded
  [[ -z $value ]] && value=0.0.0
  
  # Append configuration property to JS file
  echo " DEPLOY_VER: \"$value\"," >> ./env-config.js

echo "}" >> ./env-config.js