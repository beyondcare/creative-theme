VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.box = "ubuntu/trusty64"
  config.vm.network "forwarded_port", guest: 8123, host: 8123
  config.vm.network "private_network", ip: "192.168.3.34"
  config.vm.synced_folder ".", "/var/www", create: true
  config.vm.provision :shell,
    :inline => "sudo apt-get update && sudo apt-get -y install build-essential git nodejs zlib1g-dev && sudo apt-get install -y python-software-properties && sudo apt-add-repository ppa:brightbox/ruby-ng -y && sudo apt-get update && sudo apt-get install -y ruby2.2 ruby2.2-dev && sudo gem install github-pages -V --no-ri --no-rdoc"
  config.ssh.forward_agent = true
end
