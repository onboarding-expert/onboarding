# Mac Developer Onboarding Guide

## Table of Contents

- [Introduction](#introduction)
- [Module 1: Preparation for Development](#module-1-preparation-for-development)
  - [macOS Steps](#macos-steps)
  - [Windows Steps](#windows-steps)
- [Module 2: Creating a GitHub Account and Initial Configuration](#module-2-creating-a-github-account-and-initial-configuration)
  - [macOS Steps](#macos-steps-1)
  - [Windows Steps](#windows-steps-1)
- [Module 3: Setting Up the Local Machine with Package Managers](#module-3-setting-up-the-local-machine-with-package-managers)
  - [macOS Steps (Homebrew)](#macos-steps-homebrew)
  - [Windows Steps (Chocolatey)](#windows-steps-chocolatey)
- [Module 4: Setting Up an OpenRouter Account and API Key](#module-4-setting-up-an-openrouter-account-and-api-key)
  - [macOS Steps](#macos-steps-2)
  - [Windows Steps](#windows-steps-2)
- [Module 5: Installing VS Code, Roo Extension, and Final Setup](#module-5-installing-vs-code-roo-extension-and-final-setup)
  - [macOS Steps](#macos-steps-3)
  - [Windows Steps](#windows-steps-3)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This guide provides a comprehensive onboarding plan for new developers setting up a development environment on macOS or Windows. It covers everything from initial system preparation to installing Visual Studio Code (VS Code) with the Roo extension and integrating an OpenRouter API key.

---

### Module 1 Prompt: Preparation for Development
Prompt: "Generate a detailed set of 12-16 step-by-step instructions for preparing a brand-new system for development, dynamically tailored to the user's architecture (macOS or Windows). For macOS, include updating the OS via System Settings, enabling Terminal permissions, installing Xcode via `xcode-select --install`, and creating a `~/Developer` folder. For Windows, cover updating via Settings, installing Windows Terminal, enabling Developer Mode, and setting up a `C:\Dev` folder. Provide beginner-friendly explanations, architecture-specific commands, and troubleshooting tips (e.g., macOS permission errors, Windows UAC prompts). Format steps with GitHub-compatible Markdown headings like `#### macOS Steps` and `#### Windows Steps`."

---

### Module 2 Prompt: Creating a GitHub Account and Initial Configuration
Prompt: "Create a detailed list of 10-14 instructions for setting up a new GitHub account and configuring Git, tailored to macOS and Windows. For both, include signing up at github.com, verifying email, and creating a first repository. For macOS, install Git via Homebrew (`brew install git`), configure with `git config --global`, and set up SSH with `ssh-keygen`. For Windows, install Git via Chocolatey (`choco install git`), configure in PowerShell, and generate an SSH key. Include architecture-specific paths (e.g., `~/.ssh` for macOS, `%USERPROFILE%\.ssh` for Windows) and troubleshooting (e.g., SSH key permissions). Use GitHub Markdown subheadings `#### macOS Steps` and `#### Windows Steps`."

---

### Module 3 Prompt: Setting Up the Local Machine with Package Managers
Prompt: "Provide a comprehensive set of 14-18 instructions for setting up a development environment using package managers, dynamically adjusted for macOS (Homebrew) and Windows (Chocolatey). For macOS, install Homebrew with `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`, update it (`brew update`), and install tools like `node` and `python`. For Windows, install Chocolatey via PowerShell (`Set-ExecutionPolicy Bypass -Scope CurrentUser -Force; iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex`), update it (`choco upgrade chocolatey`), and install similar tools. Include PATH updates, verification steps, and troubleshooting (e.g., macOS Ventura compatibility, Windows admin rights). Use Markdown subheadings `#### macOS Steps (Homebrew)` and `#### Windows Steps (Chocolatey)`."

---

### Module 4 Prompt: Setting Up an OpenRouter Account and API Key
Prompt: "Write a detailed 10-14 step guide for creating an OpenRouter account and obtaining an API key, with steps tailored to macOS and Windows. For both, cover signing up at openrouter.ai, generating an API key, and storing it securely (macOS: `.env` file with `echo "OPENROUTER_API_KEY=your_key_here" >> .env`; Windows: PowerShell with `Add-Content -Path .env -Value 'OPENROUTER_API_KEY=your_key_here'`). Test the key with a curl command adjusted for each OS (macOS: Terminal, Windows: PowerShell). Include security tips and common error fixes. Format with GitHub Markdown subheadings `#### macOS Steps` and `#### Windows Steps`."

---

### Module 5 Prompt: Installing VS Code, Roo Extension, and Final Setup
Prompt: "Generate a detailed 14-18 step instruction set for installing Visual Studio Code, configuring it, and adding the Roo extension, tailored to macOS and Windows. For macOS, install VS Code via `brew install --cask visual-studio-code`, open it, and add extensions like ‘Prettier’ and ‘Roo’. For Windows, install via `choco install vscode`, launch it, and install the same extensions. Guide the user through linking the OpenRouter API key, testing Roo with a sample project, and customizing settings (e.g., `settings.json`). Include troubleshooting (e.g., extension conflicts) and use Markdown subheadings `#### macOS Steps` and `#### Windows Steps`."

---

## Contributing

Contributions are welcome! Please submit a pull request or open an issue in this repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.