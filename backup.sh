wget --recursive --level=10 https://tel.directory.gov.hk/index_CHI.html?accept_disclaimer=yes
date=$(date '+%Y-%m-%d %H:%M:%S')
git add .
git commit -m "Version $date"
git push origin master
