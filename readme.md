# Description

This is the GitHub page for my Portfolio. It showcases the work that I feel best demonstrates my ability and the skill that I've learned in my time at Full Sail. The website itself is created with basic HTML5, with CSS3 and a bit of jQuery used for styling purposes. My projects themselves have descriptions of their purpose as well as the technologies used to create them.

# Local Installation

Clone this repository into a project directory of your local machine
```
git clone https://github.com/ma-singh/ma-singh.github.io.git
```

Enter the repository you just brought down into your machine
```
cd ma-singh.github.io
```

## Testing the Project

While you can test your code locally with purely static files using either Mozilla Firefox or Google Chrome's browser, it's best to create a local development environment by using [Vagrant](https://www.vagrantup.com/downloads.html) and running the Ansible playbook that has been provided here.

To do so, you will need Ansible, which you can do with pip, the Python package manager.
```
sudo easy_install pip
```

Now you can install Ansible
```
sudo pip install ansible
```

Now edit or create your Ansible hosts file
```
nano /etc/ansible/hosts
```

Add your local development server to the list of hosts
```
[web]
localhost
<IP_ADDRESS>
```

You can now run the ansible playbook
```
ansible-playbook nginx.yml
```

After the playbook runs, your Vagrant server should be up and running. You should be able to spin it up and switch to the directory you will clone the codebase into
```
cd /var/www
```

This is where you would clone the codebase to
```
git clone https://github.com/ma-singh/ma-singh.github.io.git
```

Now enter the directory you just created
```
cd ma-singh.github.io
```

With the codebase cloned into this directory, you should be able to view the project in your browser by accessing your Vagrant server.

# Workflow and Development

Create a development branch. Any features you develop will branch out from here.
```
git checkout -b development
```

Create a new feature branch to work in
```
git checkout -b <FEATURE_NAME>
```

When finished developing and testing, merge your branch back into development
```
git checkout development
git merge <FEATURE_NAME>
```

Push the development branch you made your commits in to GitHub.
```
git push origin development
```

# Deployment

## Tagging Releases

Switch to the production branch to tag releases
```
git checkout -b production
```

Tag a stable release
```
git tag -a <VERSION_NUMBER> -m "[version_message]"
```

Push the release to GitHub
```
git push origin --tags
```

## Deploying a Release

Switch to the master branch
```
git checkout master
```

Get the latest stable release
```
git pull origin <VERSION_NUMBER>
```

Add the Staging and Production servers to your list of remote repositories
```
git remote add staging ssh://[username]@<STAGING_IP_ADDRESS>:/var/repos/ma-singh.github.io
git remote add production ssh://[username]@<PRODUCTION_IP_ADDRESS>:/var/repos/ma-singh.github.io
```

Push to the designated server
```
git push <server> master
```
