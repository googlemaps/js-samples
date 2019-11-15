#!/bin/bash

set -euo pipefail

files=`cat src/index.full.html | grep -oP '[a-zA-Z-_]*\\.css' | sed 's/css/scss/g'`

skip="$LERNA_PACKAGE_NAME.scss"

imports=""
count=0

for f in $files; do
    if [ "$f" == "$skip" ];
    then 
        echo "skip $skip" 
    else
        old=`echo $f | sed 's/scss/css/g'`
        echo $old
        # copy shared css
        if [ -f "../../shared/scss/$f" ]; then
            echo "skipping copy of $f"
        else
        mv /..[HIDDEN]../_css/${old} ../../shared/scss/${f}
        fi
        if [ $count == 0 ]; then
            imports="@import '../../../shared/scss/${f}';\n"
        else
            imports="${imports}@import '../../../shared/scss/${f}';\n"
        fi
        count=$((count + 1))    
    fi
done

exit 0

head -n 17 src/style.scss > src/style.tmp.scss
echo -e $imports >> src/style.tmp.scss
sed -n "$((18))"',$p' src/style.scss >> src/style.tmp.scss

mv src/style.tmp.scss src/style.scss