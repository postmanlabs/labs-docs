#!/bin/bash
files=`(git fetch origin master:master) && (git diff --name-only master)`
for x in $files;
do
	if [ ${x: -3} == ".md" ]
	then
		node_modules/.bin/markdownlint $x
	fi
done