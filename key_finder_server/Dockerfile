FROM mcr.microsoft.com/dotnet/sdk:7.0

RUN dotnet tool install --global dotnet-ef
RUN echo "export PATH=$PATH:/root/.dotnet/tools" >> /root/.bashrc

WORKDIR /app

RUN groupadd -g 1000 app
RUN useradd -u 1000 -ms /bin/bash -g app app

USER app