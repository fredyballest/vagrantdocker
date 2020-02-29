# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
  config.vm.network "forwarded_port", guest: 80, host: 80
  config.vm.network "forwarded_port", guest: 3000, host: 3000
  config.vm.network "forwarded_port", guest: 5000, host: 5000
  config.vm.synced_folder "./multicont", "/home/fredyball"
  config.vm.provision  "docker"
  config.vm.provision "shell", path: "script.sh"
  config.vm.provider :virtualbox do |vb|
  vb.customize [ 'modifyvm', :id, '--name', 'tesisfinal' ]
  vb.memory = 4096
  vb.cpus = 1  
  end
end  