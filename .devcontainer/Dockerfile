# Create a Jekyll container for GitHub Pages
# See this for current supported versions: https://pages.github.com/versions/
FROM ruby:3

# Install infernal CAs
#
# Per the [man page][man]
# > Certificates must be in PEM format and have a .crt extension in order to be
# > included by update-ca-certificates. Furthermore, all certificates with a .crt
# > extension found below /usr/local/share/ca-certificates are also included and
# > implicitly trusted.
# > 
# > To add one or more certificates to the machine, copy the certificates in PEM 
# > format with the *.crt extension to /usr/local/share/ca-certificates. There
# > should be one certificate per file, and not multiple certificates in a single
# > file. Then run update-ca-certificates to merge the new certificates into the
# > existing machine store at /etc/ssl/certs.
#
# [man]: https://manpages.debian.org/trixie/ca-certificates/update-ca-certificates.8.en.html
ARG CUSTOM_CA_PATH=ca
COPY --chown=root:root ${CUSTOM_CA_PATH}/ /usr/local/share/ca-certificates/
RUN ls -l /usr/local/share/ca-certificates/ \
    && update-ca-certificates