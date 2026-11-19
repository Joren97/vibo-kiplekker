FROM mcr.microsoft.com/devcontainers/typescript-node:26
RUN adduser --disabled-password --gecos '' vscode \
    && adduser vscode sudo \
    && echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
USER vscode
WORKDIR /home/vscode