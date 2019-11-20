#!/bin/bash

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