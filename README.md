# ollama-ui

Simple HTML UI for Ollama, with added functionality by The Man Studios!

May be a bit broken, still working on porting and fixing things.

## Current changes
* Removes annoying checksum verification, unnessassary chrome extension and extra files.
* Lightly changes theming.
* Header and page title now say the name of the model instead of just "chat with ollama/llama2".

## Planned features:
* Image processing for multimodal models.
* Image generation (Possibly using InvokeAI?)
* Fix Bootstrap UI engine by switching to only CSS for theming.
* Native apps through TAURI

## Usage

```
git clone https://github.com/ollama-ui/ollama-ui
cd ollama-ui
./start.sh
```

