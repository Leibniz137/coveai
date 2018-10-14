sudo strace -ewrite -p "$(ps -aux | grep coveai | awk -F ' ' '{print $2}' | sed -n '1p')"
