#!/bin/bash
# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.


tmp=$(mktemp)

grep -or "\[START [a-zA-Z0-9_]*\]" samples/**/src >$tmp

# use associative array to track tags
declare -A tags

# track errors
errors_duplicate=()
errors_lint=()

while read l; do
    path=$(echo "$l" | cut -d: -f1)

    # use package name without file extension
    package=$(dirname $path)

    # region tag including START
    region=$(echo "$l" | cut -d: -f2)

    if [ "${tags[$region]}" == "" ]; then
        tags[$region]=$package
    else
        if [ "${tags[$region]}" != "$package" ]; then
            errors_duplicate+=("duplicate for $region: $package conflicts with ${tags[$region]}")
        fi
    fi

    # Check if begins with [START maps_*]
    if [ "${region:7:5}" != "maps_" ]; then
        errors_lint+=("region tag should start with maps_: $region $path")
    fi
done <$tmp

if [ "${#errors_duplicate[@]}" == "0" ] && [ "${#errors_lint[@]}" == "0" ]; then
    echo -e "\033[32m Passed: Region tags passed checks!\033[0m"
    exit 0
fi

# print errors
(
    IFS=$'\n'
    echo -e "\033[31m Failed: Invalid region tags!"
    echo "${errors_duplicate[*]}"
    echo "${errors_lint[*]}"
    echo -e "\033[0m"
)

exit 1