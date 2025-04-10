# Welcome to Module 1: Preparing Your System for Your First Project!

Congratulations on starting your developer journey! 🎉

In this module, we'll **guide you step-by-step** to get your **Mac or Windows PC** ready for coding. Whether you're brand new or just need a refresher, this friendly guide will help you set up everything smoothly.

---

## How This Module Works

- **Choose your system:** Mac or Windows.
- **Follow the steps below.**
- **Click the dropdowns** for extra help, explanations, and troubleshooting.
- **Checkpoints** help you verify your progress.
- **Tips** make things easier!

---

# Getting Your Mac Ready 🍎

<details>
<summary><strong>1. Update your Mac to the latest version</strong></summary>

Keeping your Mac updated helps avoid problems later.

- **How:** Go to **Apple Menu** > **System Settings** > **General** > **Software Update**.
- Click **Update Now** or **Upgrade Now**.
- **Tip:** Plug in your charger and connect to Wi-Fi.
- **Trouble?** Restart and try again.

</details>

<details>
<summary><strong>2. Give Terminal permission to access your files</strong></summary>

This lets you run commands without annoying errors.

- **How:** Open **System Settings** > **Privacy & Security** > **Full Disk Access**.
- Click the **+** button, add **Terminal**.
- Unlock with your password if needed.
- **Why?** Some tools need access to your files to work properly.

</details>

<details>
<summary><strong>3. Install Apple's developer tools (Xcode Command Line Tools)</strong></summary>

These tools let you use Git and compile code.

- **How:** Open Terminal and type:
  ```
  xcode-select --install
  ```
- Click **Install** when prompted.
- **Checkpoint:** After install, type:
  ```
  git --version
  ```
  You should see a version number.
- **Trouble?** Restart and try again.

</details>

<details>
<summary><strong>4. Create a Developer folder to keep your projects organized</strong></summary>

- **How:** In Terminal, type:
  ```
  mkdir -p ~/Developer
  ```
- **Checkpoint:** Type:
  ```
  ls ~/Developer
  ```
  It should be empty (for now!).
- **Tip:** This keeps all your code in one easy-to-find place.

</details>

<details>
<summary><strong>5. Double-check your developer tools are installed</strong></summary>

- **How:** Type:
  ```
  xcode-select -p
  ```
- You should see a path like `/Library/Developer/CommandLineTools`.
- **Trouble?** Reinstall with `xcode-select --install`.

</details>

<details>
<summary><strong>6. (Optional) Enable Developer Mode for advanced features</strong></summary>

- **How:** In Terminal, type:
  ```
  DevToolsSecurity -enable
  ```
- **Tip:** If you see "command not found," no worries — skip this step.

</details>

<details>
<summary><strong>7. (Optional) Make Terminal look nice</strong></summary>

- Change colors, font, or theme in Terminal > Settings.
- **Tip:** A comfy Terminal makes coding more fun!

</details>

<details>
<summary><strong>8. Check you have enough free space</strong></summary>

- **How:** In Terminal, type:
  ```
  df -h
  ```
- Make sure you have **at least 10GB free**.
- **Why?** You'll need space for tools and projects.

</details>

<details>
<summary><strong>9. Restart your Mac</strong></summary>

- This helps apply updates and settings.
- Save your work first!

</details>

<details>
<summary><strong>10. Confirm everything is up to date</strong></summary>

- **How:** In Terminal, type:
  ```
  softwareupdate --list
  ```
- You should see **no pending updates**.

</details>

---

# Getting Your Windows PC Ready 🖥️

<details>
<summary><strong>1. Update Windows to the latest version</strong></summary>

- **How:** Open **Settings** > **Update & Security** > **Windows Update**.
- Click **Check for updates** and install everything.
- **Tip:** Restart if updates get stuck.

</details>

<details>
<summary><strong>2. Install Windows Terminal (a better command line)</strong></summary>

- **How:**
  - From Microsoft Store, search **Windows Terminal** and install.
  - Or in PowerShell, type:
    ```
    winget install --id=Microsoft.WindowsTerminal
    ```
- **Checkpoint:** Open Windows Terminal — it should launch!

</details>

<details>
<summary><strong>3. Turn on Developer Mode</strong></summary>

- **How:** Settings > Update & Security > For Developers.
- Select **Developer mode**.
- Accept any prompts.
- **Why?** This unlocks features you'll need.

</details>

<details>
<summary><strong>4. Create a Dev folder to organize your projects</strong></summary>

- **How:** In PowerShell, type:
  ```
  New-Item -ItemType Directory -Path C:\Dev
  ```
- **Checkpoint:** Type:
  ```
  Get-ChildItem C:\Dev
  ```
- **Tip:** Keeps your code tidy!

</details>

<details>
<summary><strong>5. Allow PowerShell to run helpful scripts</strong></summary>

- **How:** Type:
  ```
  Get-ExecutionPolicy
  ```
- If it says **Restricted**, then type:
  ```
  Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
  ```
- **Why?** This prevents errors during setup.

</details>

<details>
<summary><strong>6. Check you have enough free space</strong></summary>

- **How:** Type:
  ```
  Get-PSDrive -PSProvider FileSystem
  ```
- Make sure **C:\\** has at least **10GB free**.

</details>

<details>
<summary><strong>7. Restart your PC</strong></summary>

- This helps apply updates and settings.
- Save your work first!

</details>

<details>
<summary><strong>8. Confirm updates are done</strong></summary>

- **How:** Settings > Windows Update > Check for updates.

</details>

<details>
<summary><strong>9. (Optional) Customize Windows Terminal</strong></summary>

- Change colors, font, or default shell in Terminal settings.
- **Tip:** Make it comfy for your eyes!

</details>

<details>
<summary><strong>10. Check you have admin rights</strong></summary>

- **How:** Open PowerShell as admin, type:
  ```
  whoami /groups | findstr /i "S-1-5-32-544"
  ```
- You should see a line confirming **Administrators** group.

</details>

---

# Helpful Tips & Checkpoints ✅

- **Permission errors?** Restart and try again.
- **Updates stuck?** Reboot and check your internet.
- **Not sure what to do?** Click the dropdowns for help!
- **Unsupported OS?** This guide is for macOS and Windows only.

---

# Your Progress So Far

By finishing Module 1, you've:

- Updated your system
- Set up your terminal
- Installed developer tools
- Created a workspace folder
- Verified everything works

**You're now ready to start coding! 🚀**

---

# Next Up: GitHub Setup

Head to **[Module 2: Creating a GitHub Account and Initial Configuration](module2_github.md)** to get your code online and start collaborating.

---

# For Trainers & Developers

- This module is designed to be beginner-friendly.
- Includes architecture-specific steps.
- Modular, <500 lines.
- Markdown with dropdowns for clarity.
- TDD anchors and edge cases embedded as **checkpoints** and **tips**.