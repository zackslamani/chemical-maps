sudo -i
if [ ! -f /etc/apache2/conf/httpd.conf ]; then
  sudo apt-get update
  sudo apt-get install apache2
fi
echo 'Enter the path for install (must be a web folder)'
read install_path
sudo chown -R root:www-data $install_path
sudo chmod -R 770 $install_path
sudo apt-get install php php-mbstring
echo "Retriving Package ..."
svn co https://projets3.ens.math-info.univ-paris5.fr/svn/2017-l2ap1
cd 2017-l2ap1/trunk
