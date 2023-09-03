FROM mcr.microsoft.com/dotnet/sdk:7.0

WORKDIR /app

RUN groupadd -g 1000 app
RUN useradd -u 1000 -ms /bin/bash -g app app

USER app

RUN dotnet tool install --global dotnet-ef
ENV PATH "$PATH:/home/app/.dotnet/tools"
