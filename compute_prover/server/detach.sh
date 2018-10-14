sudo kill "$(ps -aux | grep strace | awk -F ' ' '{print $2}' | sed -n '1p')"
