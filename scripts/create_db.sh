#!/bin/sh

cd ../key_finder_server/api
#rm sqlite.db
touch sqlite.db
cd ../repository
dotnet ef --startup-project ../api/api.csproj database update
