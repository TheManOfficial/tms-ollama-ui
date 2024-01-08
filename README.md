# The Man Studios' Ollama UI

Simple HTML/Electron UI for Ollama, with added functionality by The Man Studios!

May be a bit broken, still working on porting and fixing things.

## Current changes
* Removes annoying checksum verification, unnessassary chrome extension and extra files.
* Lightly changes theming.
* Header and page title now say the name of the model instead of just "chat with ollama/llama2".
* Native applications through Electron.

## Planned features:
* Image processing for multi-modal models.
* Image generation (Possibly using InvokeAI?)
* Fix Bootstrap UI engine by switching to only CSS for theming.

## Installation
Make sure you install Ollama!
```
curl https://ollama.ai/install.sh | sh
```
### Run in browser
```
git clone https://github.com/ollama-ui/ollama-ui
cd ollama-ui
chmod +x start.sh
./start.sh
```
### Pre-built native app
Pre-built native Electron applications will be provided soon. For now, build it yourself.

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
3. Build the application.
```
npm run make
```

Note: MacOS is not officially supported, it may or may not function as intended.

Note: Ollama does not currently support Windows.
