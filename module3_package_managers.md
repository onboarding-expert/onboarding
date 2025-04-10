# Welcome to Module 3: Setting Up Your Development Environment! 🛠️

Great work so far! Now, let's install the tools you'll use every day as a developer.

---

## Why Use a Package Manager?

Package managers like **Homebrew** (Mac) and **Chocolatey** (Windows) make installing software **fast, easy, and safe**.

- **One command** installs or updates software.
- Avoids risky downloads from random websites.
- Keeps everything **up to date** with minimal effort.
- Saves you **hours** over manual installs.

---

## What Will You Achieve in This Module?

- Install a package manager on your system.
- Use it to install **Node.js**, **Python**, **Git**, and more.
- Learn how to update and manage your tools easily.
- Get ready to build and run real projects!

---

## Example: Installing a Tool with Homebrew

Once Homebrew is installed, you can install almost any developer tool with a single command.

For example, to install **wget** (a tool to download files):

```bash
brew install wget
```

To update it later:

```bash
brew upgrade wget
```

To uninstall:

```bash
brew uninstall wget
```

**It's that simple!**

---

## How This Module Works

- **Choose your system:** Mac or Windows.
- **Follow the steps below.**
- **Click the dropdowns** for extra help, explanations, and troubleshooting.
- **Checkpoints** help you verify your progress.
- **Tips** make things easier!

---

# Setting Up on macOS with Homebrew 🍎

<details>
<summary><strong>1. Install Homebrew (the macOS package manager)</strong></summary>

- **How:** Open Terminal, paste this command, then press Enter:
  ```
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```
- Follow the prompts.
- **Checkpoint:** After install, type:
  ```
  brew --version
  ```
- **Trouble?** Visit [brew.sh](https://brew.sh) for help.

</details>

<details>
<summary><strong>2. Update Homebrew</strong></summary>

- **How:** In Terminal, type:
  ```
  brew update
  ```
- **Why?** Makes sure you get the latest software.

</details>

<details>
<summary><strong>3. Install essential developer tools</strong></summary>

- **How:** In Terminal, type:
  ```
  brew install node python git
  ```
- **Checkpoint:** Check versions:
  ```
  node --version
  python3 --version
  git --version
  ```

</details>

<details>
<summary><strong>4. Verify your PATH is set correctly</strong></summary>

- **How:** In Terminal, type:
  ```
  echo $PATH
  ```
- You should see `/usr/local/bin` or `/opt/homebrew/bin`.
- **Tip:** This lets you run installed tools easily.

</details>

<details>
<summary><strong>5. (Optional) Explore more packages</strong></summary>

- **How:** Visit [brew.sh](https://brew.sh) or type:
  ```
  brew search
  ```
- **Tip:** You can install databases, editors, and more!

</details>

---

# Setting Up on Windows with Chocolatey 🪟

<details>
<summary><strong>1. Install Chocolatey (the Windows package manager)</strong></summary>

- **How:** Open PowerShell as admin, paste this command, then press Enter:
  ```
  Set-ExecutionPolicy Bypass -Scope Process -Force; `
  [System.Net.ServicePointManager]::SecurityProtocol = `
  [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; `
  iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
  ```
- **Checkpoint:** After install, type:
  ```
  choco --version
  ```
- **Trouble?** Visit [chocolatey.org](https://chocolatey.org/install) for help.

</details>

<details>
<summary><strong>2. Update Chocolatey</strong></summary>

- **How:** In PowerShell, type:
  ```
  choco upgrade chocolatey
  ```
- **Why?** Keeps Chocolatey itself up to date.

</details>

<details>
<summary><strong>3. Install essential developer tools</strong></summary>

- **How:** In PowerShell, type:
  ```
  choco install nodejs python git
  ```
- **Checkpoint:** Check versions:
  ```
  node --version
  python --version
  git --version
  ```

</details>

<details>
<summary><strong>4. Verify your PATH is set correctly</strong></summary>

- **How:** In PowerShell, type:
  ```
  $env:Path
  ```
- You should see paths including `C:\Program Files\nodejs` and `Python`.
- **Tip:** This lets you run installed tools easily.

</details>

<details>
<summary><strong>5. (Optional) Explore more packages</strong></summary>

- **How:** Visit [chocolatey.org/packages](https://community.chocolatey.org/packages).
- **Tip:** You can install editors, databases, and more!

</details>

---

# Helpful Tips & Checkpoints ✅

- **Permission errors?** Run Terminal/PowerShell as admin.
- **Network issues?** Check your internet connection.
- **Not sure?** Click dropdowns for help!

---

# Your Progress So Far

By finishing Module 3, you've:

- Installed a package manager
- Installed key developer tools
- Verified everything works

**You're ready to start building! 🚀**

---

# Next Up: Setting Up Your OpenRouter Account

Head to **[Module 4: Setting Up an OpenRouter Account and API Key](module4_openrouter.md)** to connect your AI tools.

---

# For Trainers & Developers

- Beginner-friendly, step-by-step.
- Architecture-specific instructions.
- Modular, <500 lines.
- Markdown with dropdowns.
- TDD anchors as **checkpoints** and **tips**.