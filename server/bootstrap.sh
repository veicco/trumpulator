
# download the package lists from the repositories
apt-get update


# --- python ---

# set default python version to 3.4
ln -sf /usr/bin/python3.4 /usr/bin/python

# install pip
apt-get install -y python3-pip

# --- apache ---

# install packages
apt-get install -y apache2 libapache2-mod-wsgi

# remove default webroot
rm -rf /var/www

# symlink project as webroot
ln -fs /vagrant /var/www

# setup hosts file
VHOST=$(cat <<EOF
<VirtualHost *:80>
  DocumentRoot "/vagrant"
  ServerName localhost
  <Directory /vagrant>
    AllowOverride All
    Order Allow,Deny
    Allow From All
  </Directory>
</VirtualHost>
EOF
)
echo "${VHOST}" > /etc/apache2/sites-available/default

# enable apache rewrite module
a2enmod rewrite

# --- Required python modules ---
pip3 install -r /vagrant/requirements.txt

# tasks
cd /vagrant && python manage.py syncdb --noinput
cd /vagrant && python manage.py migrate

# Run server and static file watcher in screen
su - vagrant -c "cd /vagrant && screen -S server -d -m python manage.py runserver 0.0.0.0:8000"
su - vagrant -c "cd /vagrant && screen -S watcher -d -m python manage.py watchstatic"

# --- restart apache ---

service apache2 restart
