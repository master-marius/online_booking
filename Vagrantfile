# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/trusty64"

  config.ssh.insert_key = false
  config.ssh.shell = "bash -c 'BASH_ENV=/etc/profile exec bash'"

  config.vm.hostname = "online-booking"
  config.vm.network :private_network, ip: "192.168.3.100"
  config.vm.network "forwarded_port", guest: 3000, host: 3000, auto_correct: true
  config.vm.synced_folder ".", "/vagrant", type: "nfs"

  config.vm.provider :virtualbox do |vb|
    vb.name = "Online booking"
    vb.customize ['modifyvm', :id, '--memory', '2048']
  end

end