local:
	rsync -aP --delete htdocs/ /Applications/MAMP/htdocs/weihnachten

install:
	rsync -aP --delete htdocs/ marcoliverteschke.de@marcoliverteschke.de:/var/www/weihnachten2011.marcoliverteschke.de/home/htdocs
