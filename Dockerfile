FROM xrpllabsofficial/xrpld

ENTRYPOINT rippled -a --start --conf=/shared/rippled.cfg
