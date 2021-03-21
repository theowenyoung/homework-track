#!/bin/bash

echo $MESSAGE
echo $COUNT
git config user.name $USERNAME
git config user.email $EMAIL
echo "Start to create $COUNT commits"
for (( c=1; c<=$COUNT; c++ ))
do  
   echo "Create $c empty commit"
   git commit --allow-empty -m "$MESSAGE"
   echo "Success to create $c empty commit"
done
