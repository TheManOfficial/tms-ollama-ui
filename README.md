# The Man Studios' Ollama UI

Project is basically dead, sorry.

Simple HTML/Electron UI for Ollama, with added functionality by The Man Studios!


## Current changes
* Removes annoying checksum verification, unnessassary chrome extension and extra files.
* Lightly changes theming.
* Header and page title now say the name of the model instead of just "chat with ollama/llama2".
* Native applications through Electron.

## Installation
Make sure you install Ollama!
```
curl https://ollama.ai/install.sh | sh
```
### Run in browser
```
git clone https://github.com/TheManStudios/tms-ollama-ui
cd tms-ollama-ui
chmod +x start.sh
./start.sh
```

### Building native app
1. Install npm and git.

Debian/Ubuntu:
```
sudo apt install npm git 
```
Fedora/RHEL/OpenSUSE
```
sudo dnf install npm git 
```
Arch Linux
```
sudo pacman -S npm git
```
2. Clone the repo.
```
git clone https://github.com/TheManStudios/tms-ollama-ui
cd tms-ollama-ui
```
3. Install dependencies.
```
npm install
```
4. Build the application.
```
npm run make
```

Note: MacOS is not officially supported, it may or may not function as intended.

Note: Ollama does not currently support Windows natively. You can use [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) to install Ollama on Windows.
