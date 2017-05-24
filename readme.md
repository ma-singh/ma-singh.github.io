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
