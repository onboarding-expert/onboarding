# Welcome to Module 2: Getting Started with GitHub! 🐙

Awesome job finishing Module 1! Now, let's get you set up with **GitHub**, the world's most popular platform for sharing and collaborating on code.

By the end of this module, you'll have:

- A GitHub account
- Git installed and configured
- An SSH key for secure connections
- Your first repository ready to go!

---

## How This Module Works

- **Choose your system:** Mac or Windows.
- **Follow the steps below.**
- **Click the dropdowns** for extra help, explanations, and troubleshooting.
- **Checkpoints** help you verify your progress.
- **Tips** make things easier!

---

# What is GitHub?

GitHub is like **social media for code**. It lets you:

- Save your projects online
- Share code with others
- Collaborate on teams
- Track changes and history

---

# Getting Set Up on macOS 🍎

<details>
<summary><strong>1. Sign up for a free GitHub account</strong></summary>

- Go to [github.com](https://github.com).
- Click **Sign up**.
- Enter your email, create a username and password.
- Verify your email (check your inbox!).
- **Tip:** Pick a username you'll be happy with — it's public!

</details>

<details>
<summary><strong>2. Install Git using Homebrew</strong></summary>

- **How:** Open Terminal, type:
  ```
  brew install git
  ```
- **Checkpoint:** After install, type:
  ```
  git --version
  ```
  You should see a version number.
- **Trouble?** Run `brew update` then try again.

</details>

<details>
<summary><strong>3. Configure your Git identity</strong></summary>

- **How:** In Terminal, type:
  ```
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```
- Replace with your real name and email (same as GitHub).
- **Checkpoint:** Verify with:
  ```
  git config --global --list
  ```

</details>

<details>
<summary><strong>4. Generate an SSH key for secure connections</strong></summary>

- **How:** In Terminal, type:
  ```
  ssh-keygen -t ed25519 -C "your.email@example.com"
  ```
- Press **Enter** to accept defaults.
- **Tip:** Use a passphrase for extra security (or leave blank).
- **Checkpoint:** Your key is saved in `~/.ssh/id_ed25519.pub`.

</details>

<details>
<summary><strong>5. Add your SSH key to the ssh-agent</strong></summary>

- **How:**
  ```
  eval "$(ssh-agent -s)"
  ssh-add --apple-use-keychain ~/.ssh/id_ed25519
  ```
- **Tip:** This saves your passphrase in the keychain.

</details>

<details>
<summary><strong>6. Add your SSH key to GitHub</strong></summary>

- **How:**
  - Copy your key:
    ```
    pbcopy < ~/.ssh/id_ed25519.pub
    ```
  - Go to **GitHub** > **Settings** > **SSH and GPG keys** > **New SSH key**.
  - Paste and save.
- **Checkpoint:** You should see your new key listed.

</details>

<details>
<summary><strong>7. Test your SSH connection</strong></summary>

- **How:** In Terminal, type:
  ```
  ssh -T git@github.com
  ```
- **Success:** You should see a welcome message.
- **Trouble?** Double-check your key is added and try again.

</details>

<details>
<summary><strong>8. Create your first repository!</strong></summary>

- On GitHub, click **New** (top left).
- Name your repo (e.g., `hello-world`).
- Add a description.
- Choose **Public** or **Private**.
- Click **Create repository**.
- **Tip:** Add a README to explain your project.

</details>

<details>
<summary><strong>9. Clone your repo to your Mac</strong></summary>

- **How:** Copy the SSH URL from GitHub.
- In Terminal, type:
  ```
  git clone git@github.com:yourusername/hello-world.git
  ```
- **Checkpoint:** You should see a new folder with your repo.

</details>

---

# Getting Set Up on Windows 🖥️

<details>
<summary><strong>1. Sign up for a free GitHub account</strong></summary>

- Go to [github.com](https://github.com).
- Click **Sign up**.
- Enter your email, create a username and password.
- Verify your email.
- **Tip:** Pick a username you'll be happy with!

</details>

<details>
<summary><strong>2. Install Git using Chocolatey</strong></summary>

- **How:** Open PowerShell as admin, type:
  ```
  choco install git
  ```
- **Checkpoint:** After install, type:
  ```
  git --version
  ```
- **Trouble?** Run `choco upgrade git`.

</details>

<details>
<summary><strong>3. Configure your Git identity</strong></summary>

- **How:** In PowerShell, type:
  ```
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```
- Replace with your real info.
- **Checkpoint:** Verify with:
  ```
  git config --global --list
  ```

</details>

<details>
<summary><strong>4. Generate an SSH key</strong></summary>

- **How:** In PowerShell, type:
  ```
  ssh-keygen -t ed25519 -C "your.email@example.com"
  ```
- Press **Enter** to accept defaults.
- **Tip:** Use a passphrase or leave blank.
- **Checkpoint:** Your key is saved in `%USERPROFILE%\.ssh\id_ed25519.pub`.

</details>

<details>
<summary><strong>5. Add your SSH key to the ssh-agent</strong></summary>

- **How:**
  ```
  Start-Service ssh-agent
  ssh-add $env:USERPROFILE\.ssh\id_ed25519
  ```
- **Tip:** You may need to run PowerShell as admin.

</details>

<details>
<summary><strong>6. Add your SSH key to GitHub</strong></summary>

- **How:**
  - Open your key:
    ```
    Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub | clip
    ```
  - Go to **GitHub** > **Settings** > **SSH and GPG keys** > **New SSH key**.
  - Paste and save.
- **Checkpoint:** Your key should appear on GitHub.

</details>

<details>
<summary><strong>7. Test your SSH connection</strong></summary>

- **How:** In PowerShell, type:
  ```
  ssh -T git@github.com
  ```
- **Success:** You should see a welcome message.
- **Trouble?** Double-check your key is added.

</details>

<details>
<summary><strong>8. Create your first repository!</strong></summary>

- On GitHub, click **New**.
- Name it, add a description.
- Choose **Public** or **Private**.
- Click **Create repository**.
- **Tip:** Add a README.

</details>

<details>
<summary><strong>9. Clone your repo to your PC</strong></summary>

- Copy the SSH URL.
- In PowerShell, type:
  ```
  git clone git@github.com:yourusername/hello-world.git
  ```
- **Checkpoint:** You should see a new folder with your repo.

</details>

---

# Helpful Tips & Checkpoints ✅

- **Forgot your GitHub password?** Use password reset.
- **SSH issues?** Double-check your key is added to GitHub.
- **Permission errors?** Try running Terminal/PowerShell as admin.
- **Not sure?** Click dropdowns for help!

---

# Your Progress So Far

By finishing Module 2, you've:

- Created a GitHub account
- Installed and configured Git
- Set up SSH keys
- Made your first repository

**You're ready to start sharing code! 🚀**

---

# Next Up: Setting Up Your Development Environment

Head to **[Module 3: Setting Up the Local Machine with Package Managers](module3_package_managers.md)** to install the tools you'll need.

---

# For Trainers & Developers

- Beginner-friendly, step-by-step.
- Architecture-specific instructions.
- Modular, <500 lines.
- Markdown with dropdowns.
- TDD anchors as **checkpoints** and **tips**.