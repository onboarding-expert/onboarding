/**
 * Step data for all modules, split by OS.
 * Each module: { title, mac: [steps], windows: [steps], general: [steps] }
 * Each step: { title, content }
 */
const modules = [
  {
    title: "Module 1: Preparation for Development",
    mac: [
      {
        title: "1. Update your Mac to the latest version",
        content: `
          <ul>
            <li><b>How:</b> Apple Menu > System Settings > General > Software Update</li>
            <li>Click <b>Update Now</b> or <b>Upgrade Now</b>.</li>
            <li><b>Tip:</b> Plug in your charger and connect to Wi-Fi.</li>
            <li><b>Trouble?</b> Restart and try again.</li>
          </ul>
        `
      },
      {
        title: "2. Give Terminal permission to access your files",
        content: `
          <ul>
            <li><b>How:</b> System Settings > Privacy &amp; Security > Full Disk Access</li>
            <li>Click the + button, add Terminal.</li>
            <li>Unlock with your password if needed.</li>
            <li><b>Why?</b> Some tools need access to your files to work properly.</li>
          </ul>
        `
      },
      {
        title: "3. Install Apple's developer tools (Xcode Command Line Tools)",
        content: `
          <ul>
            <li><b>How:</b> Open Terminal and type:<br>
            <code>xcode-select --install</code></li>
            <li>Click <b>Install</b> when prompted.</li>
            <li><b>Checkpoint:</b> After install, type:<br>
            <code>git --version</code><br>
            You should see a version number.</li>
            <li><b>Trouble?</b> Restart and try again.</li>
          </ul>
        `
      },
      {
        title: "4. Create a Developer folder to keep your projects organized",
        content: `
          <ul>
            <li><b>How:</b> In Terminal, type:<br>
            <code>mkdir -p ~/Developer</code></li>
            <li><b>Checkpoint:</b> Type:<br>
            <code>ls ~/Developer</code><br>
            It should be empty (for now!).</li>
            <li><b>Tip:</b> This keeps all your code in one easy-to-find place.</li>
          </ul>
        `
      },
      {
        title: "5. Double-check your developer tools are installed",
        content: `
          <ul>
            <li><b>How:</b> Type:<br>
            <code>xcode-select -p</code></li>
            <li>You should see a path like <code>/Library/Developer/CommandLineTools</code>.</li>
            <li><b>Trouble?</b> Reinstall with <code>xcode-select --install</code>.</li>
          </ul>
        `
      },
      {
        title: "6. (Optional) Enable Developer Mode for advanced features",
        content: `
          <ul>
            <li><b>How:</b> In Terminal, type:<br>
            <code>DevToolsSecurity -enable</code></li>
            <li><b>Tip:</b> If you see "command not found," no worries — skip this step.</li>
          </ul>
        `
      },
      {
        title: "7. (Optional) Make Terminal look nice",
        content: `
          <ul>
            <li>Change colors, font, or theme in Terminal > Settings.</li>
            <li><b>Tip:</b> A comfy Terminal makes coding more fun!</li>
          </ul>
        `
      },
      {
        title: "8. Check you have enough free space",
        content: `
          <ul>
            <li><b>How:</b> In Terminal, type:<br>
            <code>df -h</code></li>
            <li>Make sure you have <b>at least 10GB free</b>.</li>
            <li><b>Why?</b> You'll need space for tools and projects.</li>
          </ul>
        `
      },
      {
        title: "9. Restart your Mac",
        content: `
          <ul>
            <li>This helps apply updates and settings.</li>
            <li>Save your work first!</li>
          </ul>
        `
      },
      {
        title: "10. Confirm everything is up to date",
        content: `
          <ul>
            <li><b>How:</b> In Terminal, type:<br>
            <code>softwareupdate --list</code></li>
            <li>You should see <b>no pending updates</b>.</li>
          </ul>
        `
      }
    ],
    windows: [
      {
        title: "1. Update Windows to the latest version",
        content: `
          <ul>
            <li><b>How:</b> Settings > Update &amp; Security > Windows Update</li>
            <li>Click <b>Check for updates</b> and install everything.</li>
            <li><b>Tip:</b> Restart if updates get stuck.</li>
          </ul>
        `
      },
      {
        title: "2. Install Windows Terminal (a better command line)",
        content: `
          <ul>
            <li><b>How:</b> From Microsoft Store, search <b>Windows Terminal</b> and install.<br>
            Or in PowerShell, type:<br>
            <code>winget install --id=Microsoft.WindowsTerminal</code></li>
            <li><b>Checkpoint:</b> Open Windows Terminal — it should launch!</li>
          </ul>
        `
      },
      {
        title: "3. Turn on Developer Mode",
        content: `
          <ul>
            <li><b>How:</b> Settings > Update &amp; Security > For Developers.</li>
            <li>Select <b>Developer mode</b>.</li>
            <li>Accept any prompts.</li>
            <li><b>Why?</b> This unlocks features you'll need.</li>
          </ul>
        `
      },
      {
        title: "4. Create a Dev folder to organize your projects",
        content: `
          <ul>
            <li><b>How:</b> In PowerShell, type:<br>
            <code>New-Item -ItemType Directory -Path C:\\Dev</code></li>
            <li><b>Checkpoint:</b> Type:<br>
            <code>Get-ChildItem C:\\Dev</code></li>
            <li><b>Tip:</b> Keeps your code tidy!</li>
          </ul>
        `
      },
      {
        title: "5. Allow PowerShell to run helpful scripts",
        content: `
          <ul>
            <li><b>How:</b> Type:<br>
            <code>Get-ExecutionPolicy</code></li>
            <li>If it says <b>Restricted</b>, then type:<br>
            <code>Set-ExecutionPolicy RemoteSigned -Scope CurrentUser</code></li>
            <li><b>Why?</b> This prevents errors during setup.</li>
          </ul>
        `
      },
      {
        title: "6. Check you have enough free space",
        content: `
          <ul>
            <li><b>How:</b> Type:<br>
            <code>Get-PSDrive -PSProvider FileSystem</code></li>
            <li>Make sure <b>C:\\</b> has at least <b>10GB free</b>.</li>
          </ul>
        `
      },
      {
        title: "7. Restart your PC",
        content: `
          <ul>
            <li>This helps apply updates and settings.</li>
            <li>Save your work first!</li>
          </ul>
        `
      },
      {
        title: "8. Confirm updates are done",
        content: `
          <ul>
            <li><b>How:</b> Settings > Windows Update > Check for updates.</li>
          </ul>
        `
      },
      {
        title: "9. (Optional) Customize Windows Terminal",
        content: `
          <ul>
            <li>Change colors, font, or default shell in Terminal settings.</li>
            <li><b>Tip:</b> Make it comfy for your eyes!</li>
          </ul>
        `
      },
      {
        title: "10. Check you have admin rights",
        content: `
          <ul>
            <li><b>How:</b> Open PowerShell as admin, type:<br>
            <code>whoami /groups | findstr /i "S-1-5-32-544"</code></li>
            <li>You should see a line confirming <b>Administrators</b> group.</li>
          </ul>
        `
      }
    ]
  },
  {
    title: "Module 2: Getting Started with GitHub",
    mac: [
      {
        title: "1. Sign up for a free GitHub account",
        content: `
          <ul>
            <li>Go to <a href="https://github.com" target="_blank">github.com</a></li>
            <li>Click <b>Sign up</b>.</li>
            <li>Enter your email, create a username and password.</li>
            <li>Verify your email (check your inbox!).</li>
            <li><b>Tip:</b> Pick a username you'll be happy with — it's public!</li>
          </ul>
        `
      },
      {
        title: "2. Install Git using Homebrew",
        content: `
          <ul>
            <li><b>How:</b> Open Terminal, type:<br>
            <code>brew install git</code></li>
            <li><b>Checkpoint:</b> After install, type:<br>
            <code>git --version</code><br>
            You should see a version number.</li>
            <li><b>Trouble?</b> Run <code>brew update</code> then try again.</li>
          </ul>
        `
      },
      {
        title: "3. Configure your Git identity",
        content: `
          <ul>
            <li><b>How:</b> In Terminal, type:<br>
            <code>git config --global user.name "Your Name"</code><br>
            <code>git config --global user.email "your.email@example.com"</code></li>
            <li>Replace with your real name and email (same as GitHub).</li>
            <li><b>Checkpoint:</b> Verify with:<br>
            <code>git config --global --list</code></li>
          </ul>
        `
      },
      {
        title: "4. Generate an SSH key for secure connections",
        content: `
          <ul>
            <li><b>How:</b> In Terminal, type:<br>
            <code>ssh-keygen -t ed25519 -C "your.email@example.com"</code></li>
            <li>Press <b>Enter</b> to accept defaults.</li>
            <li><b>Tip:</b> Use a passphrase for extra security (or leave blank).</li>
            <li><b>Checkpoint:</b> Your key is saved in <code>~/.ssh/id_ed25519.pub</code>.</li>
          </ul>
        `
      },
      {
        title: "5. Add your SSH key to the ssh-agent",
        content: `
          <ul>
            <li><b>How:</b><br>
            <code>eval "$(ssh-agent -s)"</code><br>
            <code>ssh-add --apple-use-keychain ~/.ssh/id_ed25519</code></li>
            <li><b>Tip:</b> This saves your passphrase in the keychain.</li>
          </ul>
        `
      },
      {
        title: "6. Add your SSH key to GitHub",
        content: `
          <ul>
            <li><b>How:</b></li>
            <li>Copy your key:<br>
            <code>pbcopy < ~/.ssh/id_ed25519.pub</code></li>
            <li>Go to <b>GitHub > Settings > SSH and GPG keys > New SSH key</b>.</li>
            <li>Paste and save.</li>
            <li><b>Checkpoint:</b> You should see your new key listed.</li>
          </ul>
        `
      },
      {
        title: "7. Test your SSH connection",
        content: `
          <ul>
            <li><b>How:</b> In Terminal, type:<br>
            <code>ssh -T git@github.com</code></li>
            <li><b>Success:</b> You should see a welcome message.</li>
            <li><b>Trouble?</b> Double-check your key is added and try again.</li>
          </ul>
        `
      },
      {
        title: "8. Create your first repository!",
        content: `
          <ul>
            <li>On GitHub, click <b>New</b> (top left).</li>
            <li>Name your repo (e.g., <code>hello-world</code>).</li>
            <li>Add a description.</li>
            <li>Choose <b>Public</b> or <b>Private</b>.</li>
            <li>Click <b>Create repository</b>.</li>
            <li><b>Tip:</b> Add a README to explain your project.</li>
          </ul>
        `
      },
      {
        title: "9. Clone your repo to your Mac",
        content: `
          <ul>
            <li><b>How:</b> Copy the SSH URL from GitHub.</li>
            <li>In Terminal, type:<br>
            <code>git clone git@github.com:yourusername/hello-world.git</code></li>
            <li><b>Checkpoint:</b> You should see a new folder with your repo.</li>
          </ul>
        `
      }
    ],
    windows: [
      {
        title: "1. Sign up for a free GitHub account",
        content: `
          <ul>
            <li>Go to <a href="https://github.com" target="_blank">github.com</a></li>
            <li>Click <b>Sign up</b>.</li>
            <li>Enter your email, create a username and password.</li>
            <li>Verify your email.</li>
            <li><b>Tip:</b> Pick a username you'll be happy with!</li>
          </ul>
        `
      },
      {
        title: "2. Install Git using Chocolatey",
        content: `
          <ul>
            <li><b>How:</b> Open PowerShell as admin, type:<br>
            <code>choco install git</code></li>
            <li><b>Checkpoint:</b> After install, type:<br>
            <code>git --version</code><br>
            You should see a version number.</li>
            <li><b>Trouble?</b> Run <code>choco upgrade git</code>.</li>
          </ul>
        `
      },
      {
        title: "3. Configure your Git identity",
        content: `
          <ul>
            <li><b>How:</b> In PowerShell, type:<br>
            <code>git config --global user.name "Your Name"</code><br>
            <code>git config --global user.email "your.email@example.com"</code></li>
            <li>Replace with your real info.</li>
            <li><b>Checkpoint:</b> Verify with:<br>
            <code>git config --global --list</code></li>
          </ul>
        `
      },
      {
        title: "4. Generate an SSH key",
        content: `
          <ul>
            <li><b>How:</b> In PowerShell, type:<br>
            <code>ssh-keygen -t ed25519 -C "your.email@example.com"</code></li>
            <li>Press <b>Enter</b> to accept defaults.</li>
            <li><b>Tip:</b> Use a passphrase or leave blank.</li>
            <li><b>Checkpoint:</b> Your key is saved in <code>%USERPROFILE%\\.ssh\\id_ed25519.pub</code>.</li>
          </ul>
        `
      },
      {
        title: "5. Add your SSH key to the ssh-agent",
        content: `
          <ul>
            <li><b>How:</b><br>
            <code>Start-Service ssh-agent</code><br>
            <code>ssh-add $env:USERPROFILE\\.ssh\\id_ed25519</code></li>
            <li><b>Tip:</b> You may need to run PowerShell as admin.</li>
          </ul>
        `
      },
      {
        title: "6. Add your SSH key to GitHub",
        content: `
          <ul>
            <li><b>How:</b></li>
            <li>Open your key:<br>
            <code>Get-Content $env:USERPROFILE\\.ssh\\id_ed25519.pub | clip</code></li>
            <li>Go to <b>GitHub > Settings > SSH and GPG keys > New SSH key</b>.</li>
            <li>Paste and save.</li>
            <li><b>Checkpoint:</b> Your key should appear on GitHub.</li>
          </ul>
        `
      },
      {
        title: "7. Test your SSH connection",
        content: `
          <ul>
            <li><b>How:</b> In PowerShell, type:<br>
            <code>ssh -T git@github.com</code></li>
            <li><b>Success:</b> You should see a welcome message.</li>
            <li><b>Trouble?</b> Double-check your key is added.</li>
          </ul>
        `
      },
      {
        title: "8. Create your first repository!",
        content: `
          <ul>
            <li>On GitHub, click <b>New</b>.</li>
            <li>Name it, add a description.</li>
            <li>Choose <b>Public</b> or <b>Private</b>.</li>
            <li>Click <b>Create repository</b>.</li>
            <li><b>Tip:</b> Add a README.</li>
          </ul>
        `
      },
      {
        title: "9. Clone your repo to your PC",
        content: `
          <ul>
            <li>Copy the SSH URL.</li>
            <li>In PowerShell, type:<br>
            <code>git clone git@github.com:yourusername/hello-world.git</code></li>
            <li><b>Checkpoint:</b> You should see a new folder with your repo.</li>
          </ul>
        `
      }
    ]
  },
  {
    title: "Module 3: Setting Up Your Development Environment",
    mac: [
      {
        title: "1. Install Homebrew (the macOS package manager)",
        content: `
          <ul>
            <li><b>How:</b> Open Terminal, paste this command, then press Enter:<br>
            <code>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</code></li>
            <li>Follow the prompts.</li>
            <li><b>Checkpoint:</b> After install, type:<br>
            <code>brew --version</code></li>
            <li><b>Trouble?</b> Visit <a href="https://brew.sh" target="_blank">brew.sh</a> for help.</li>
          </ul>
        `
      },
      {
        title: "2. Update Homebrew",
        content: `
          <ul>
            <li><b>How:</b> In Terminal, type:<br>
            <code>brew update</code></li>
            <li><b>Why?</b> Makes sure you get the latest software.</li>
          </ul>
        `
      },
      {
        title: "3. Install essential developer tools",
        content: `
          <ul>
            <li><b>How:</b> In Terminal, type:<br>
            <code>brew install node python git</code></li>
            <li><b>Checkpoint:</b> Check versions:<br>
            <code>node --version</code><br>
            <code>python3 --version</code><br>
            <code>git --version</code></li>
          </ul>
        `
      },
      {
        title: "4. Verify your PATH is set correctly",
        content: `
          <ul>
            <li><b>How:</b> In Terminal, type:<br>
            <code>echo $PATH</code></li>
            <li>You should see <code>/usr/local/bin</code> or <code>/opt/homebrew/bin</code>.</li>
            <li><b>Tip:</b> This lets you run installed tools easily.</li>
          </ul>
        `
      },
      {
        title: "5. (Optional) Explore more packages",
        content: `
          <ul>
            <li><b>How:</b> Visit <a href="https://brew.sh" target="_blank">brew.sh</a> or type:<br>
            <code>brew search</code></li>
            <li><b>Tip:</b> You can install databases, editors, and more!</li>
          </ul>
        `
      }
    ],
    windows: [
      {
        title: "1. Install Chocolatey (the Windows package manager)",
        content: `
          <ul>
            <li><b>How:</b> Open PowerShell as admin, paste this command, then press Enter:<br>
            <code>Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))</code></li>
            <li><b>Checkpoint:</b> After install, type:<br>
            <code>choco --version</code></li>
            <li><b>Trouble?</b> Visit <a href="https://chocolatey.org/install" target="_blank">chocolatey.org/install</a> for help.</li>
          </ul>
        `
      },
      {
        title: "2. Update Chocolatey",
        content: `
          <ul>
            <li><b>How:</b> In PowerShell, type:<br>
            <code>choco upgrade chocolatey</code></li>
            <li><b>Why?</b> Keeps Chocolatey itself up to date.</li>
          </ul>
        `
      },
      {
        title: "3. Install essential developer tools",
        content: `
          <ul>
            <li><b>How:</b> In PowerShell, type:<br>
            <code>choco install nodejs python git</code></li>
            <li><b>Checkpoint:</b> Check versions:<br>
            <code>node --version</code><br>
            <code>python --version</code><br>
            <code>git --version</code></li>
          </ul>
        `
      },
      {
        title: "4. Verify your PATH is set correctly",
        content: `
          <ul>
            <li><b>How:</b> In PowerShell, type:<br>
            <code>$env:Path</code></li>
            <li>You should see paths including <code>C:\\Program Files\\nodejs</code> and <code>Python</code>.</li>
            <li><b>Tip:</b> This lets you run installed tools easily.</li>
          </ul>
        `
      },
      {
        title: "5. (Optional) Explore more packages",
        content: `
          <ul>
            <li><b>How:</b> Visit <a href="https://community.chocolatey.org/packages" target="_blank">chocolatey.org/packages</a>.</li>
            <li><b>Tip:</b> You can install editors, databases, and more!</li>
          </ul>
        `
      }
    ]
  },
  {
    title: "Module 4: Setting Up Your OpenRouter Account and API Key",
    mac: [
      {
        title: "1. Sign up for OpenRouter",
        content: `
          <ul>
            <li>Go to <a href="https://openrouter.ai" target="_blank">openrouter.ai</a></li>
            <li>Click <b>Sign Up</b>.</li>
            <li>Use your email or GitHub account.</li>
            <li>Verify your email.</li>
            <li><b>Tip:</b> Use the same email as GitHub for simplicity.</li>
          </ul>
        `
      },
      {
        title: "2. Generate your API key",
        content: `
          <ul>
            <li>After logging in, go to <b>API Keys</b>.</li>
            <li>Click <b>Create new key</b>.</li>
            <li>Name it (e.g., "My Dev Machine").</li>
            <li>Copy the key somewhere safe!</li>
            <li><b>Warning:</b> Treat it like a password — don't share it.</li>
          </ul>
        `
      },
      {
        title: "3. Create a .env file to store your key",
        content: `
          <ul>
            <li><b>How:</b> In Terminal, navigate to your project folder, then type:<br>
            <code>echo "OPENROUTER_API_KEY=your_key_here" >> .env</code></li>
            <li>Replace <code>your_key_here</code> with your real API key.</li>
            <li><b>Checkpoint:</b> Type:<br>
            <code>cat .env</code><br>
            You should see your key.</li>
            <li><b>Tip:</b> The dot in <code>.env</code> hides the file by default.</li>
          </ul>
        `
      },
      {
        title: "4. Keep your .env file private",
        content: `
          <ul>
            <li>Add <code>.env</code> to your <code>.gitignore</code> file:<br>
            <code>echo ".env" >> .gitignore</code></li>
            <li><b>Why?</b> So you don't accidentally share your secret key.</li>
          </ul>
        `
      },
      {
        title: "5. Test your API key with curl",
        content: `
          <ul>
            <li><b>How:</b> In Terminal, type:<br>
            <code>curl -H "Authorization: Bearer your_key_here" https://openrouter.ai/api/test</code></li>
            <li>Replace with your real key.</li>
            <li><b>Success:</b> You should get a response from OpenRouter.</li>
            <li><b>Trouble?</b> Double-check your key and internet connection.</li>
          </ul>
        `
      }
    ],
    windows: [
      {
        title: "1. Sign up for OpenRouter",
        content: `
          <ul>
            <li>Go to <a href="https://openrouter.ai" target="_blank">openrouter.ai</a></li>
            <li>Click <b>Sign Up</b>.</li>
            <li>Use your email or GitHub account.</li>
            <li>Verify your email.</li>
            <li><b>Tip:</b> Use the same email as GitHub for simplicity.</li>
          </ul>
        `
      },
      {
        title: "2. Generate your API key",
        content: `
          <ul>
            <li>After logging in, go to <b>API Keys</b>.</li>
            <li>Click <b>Create new key</b>.</li>
            <li>Name it (e.g., "My Dev Machine").</li>
            <li>Copy the key somewhere safe!</li>
            <li><b>Warning:</b> Treat it like a password — don't share it.</li>
          </ul>
        `
      },
      {
        title: "3. Create a .env file to store your key",
        content: `
          <ul>
            <li><b>How:</b> In PowerShell, navigate to your project folder, then type:<br>
            <code>Add-Content -Path .env -Value 'OPENROUTER_API_KEY=your_key_here'</code></li>
            <li>Replace <code>your_key_here</code> with your real API key.</li>
            <li><b>Checkpoint:</b> Type:<br>
            <code>Get-Content .env</code><br>
            You should see your key.</li>
            <li><b>Tip:</b> The dot hides the file in some editors.</li>
          </ul>
        `
      },
      {
        title: "4. Keep your .env file private",
        content: `
          <ul>
            <li>Add <code>.env</code> to your <code>.gitignore</code> file:<br>
            <code>Add-Content -Path .gitignore -Value '.env'</code></li>
            <li><b>Why?</b> So you don't accidentally share your secret key.</li>
          </ul>
        `
      },
      {
        title: "5. Test your API key with curl",
        content: `
          <ul>
            <li><b>How:</b> In PowerShell, type:<br>
            <code>curl -H "Authorization: Bearer your_key_here" https://openrouter.ai/api/test</code></li>
            <li>Replace with your real key.</li>
            <li><b>Success:</b> You should get a response.</li>
            <li><b>Trouble?</b> Double-check your key and internet.</li>
          </ul>
        `
      }
    ]
  },
  {
    title: "Module 5: Installing VS Code, Roo Extension, and Final Setup",
    mac: [
      {
        title: "1. Install VS Code using Homebrew",
        content: `
          <ul>
            <li><b>How:</b> In Terminal, type:<br>
            <code>brew install --cask visual-studio-code</code></li>
            <li><b>Checkpoint:</b> After install, open VS Code from Applications.</li>
            <li><b>Tip:</b> You can also download from <a href="https://code.visualstudio.com" target="_blank">code.visualstudio.com</a>.</li>
          </ul>
        `
      },
      {
        title: "2. Install Prettier and Roo extensions",
        content: `
          <ul>
            <li>Click the <b>Extensions</b> icon (4 squares) in VS Code sidebar.</li>
            <li>Search for and install <b>Prettier</b> and <b>Roo</b>.</li>
            <li><b>Checkpoint:</b> Extensions should appear in sidebar.</li>
          </ul>
        `
      },
      {
        title: "3. Link your OpenRouter API key to Roo",
        content: `
          <ul>
            <li>Open Roo extension settings.</li>
            <li>Find <b>API Key</b> field.</li>
            <li>Paste your OpenRouter API key (from Module 4).</li>
            <li><b>Tip:</b> Keep your key private!</li>
          </ul>
        `
      },
      {
        title: "4. Test Roo with a sample prompt",
        content: `
          <ul>
            <li>Create a new file or open a folder.</li>
            <li>Type a comment like:<br>
            <code># Write a Python function to add two numbers</code></li>
            <li>Use Roo to generate code.</li>
            <li><b>Success:</b> Roo suggests code snippets!</li>
            <li><b>Trouble?</b> Check your API key and internet connection.</li>
          </ul>
        `
      },
      {
        title: "5. Customize VS Code (optional)",
        content: `
          <ul>
            <li>Open <b>Settings</b> (gear icon > Settings).</li>
            <li>Adjust font size, theme, tab size, etc.</li>
            <li><b>Tip:</b> Make it comfy for your eyes!</li>
          </ul>
        `
      },
      {
        title: "6. (Optional) Sync your settings",
        content: `
          <ul>
            <li>Sign in with GitHub or Microsoft account.</li>
            <li>Enable <b>Settings Sync</b>.</li>
            <li><b>Why?</b> Keeps your setup across devices.</li>
          </ul>
        `
      }
    ],
    windows: [
      {
        title: "1. Install VS Code using Chocolatey",
        content: `
          <ul>
            <li><b>How:</b> In PowerShell as admin, type:<br>
            <code>choco install vscode</code></li>
            <li><b>Checkpoint:</b> After install, open VS Code from Start menu.</li>
            <li><b>Tip:</b> You can also download from <a href="https://code.visualstudio.com" target="_blank">code.visualstudio.com</a>.</li>
          </ul>
        `
      },
      {
        title: "2. Install Prettier and Roo extensions",
        content: `
          <ul>
            <li>Click the <b>Extensions</b> icon (4 squares) in VS Code sidebar.</li>
            <li>Search for and install <b>Prettier</b> and <b>Roo</b>.</li>
            <li><b>Checkpoint:</b> Extensions should appear in sidebar.</li>
          </ul>
        `
      },
      {
        title: "3. Link your OpenRouter API key to Roo",
        content: `
          <ul>
            <li>Open Roo extension settings.</li>
            <li>Find <b>API Key</b> field.</li>
            <li>Paste your OpenRouter API key (from Module 4).</li>
            <li><b>Tip:</b> Keep your key private!</li>
          </ul>
        `
      },
      {
        title: "4. Test Roo with a sample prompt",
        content: `
          <ul>
            <li>Create a new file or open a folder.</li>
            <li>Type a comment like:<br>
            <code># Write a Python function to add two numbers</code></li>
            <li>Use Roo to generate code.</li>
            <li><b>Success:</b> Roo suggests code snippets!</li>
            <li><b>Trouble?</b> Check your API key and internet connection.</li>
          </ul>
        `
      },
      {
        title: "5. Customize VS Code (optional)",
        content: `
          <ul>
            <li>Open <b>Settings</b> (gear icon > Settings).</li>
            <li>Adjust font size, theme, tab size, etc.</li>
            <li><b>Tip:</b> Make it comfy for your eyes!</li>
          </ul>
        `
      },
      {
        title: "6. (Optional) Sync your settings",
        content: `
          <ul>
            <li>Sign in with GitHub or Microsoft account.</li>
            <li>Enable <b>Settings Sync</b>.</li>
            <li><b>Why?</b> Keeps your setup across devices.</li>
          </ul>
        `
      }
    ]
  },
  {
    title: "Module 6: Build Your Personal Website with AI",
    general: [
      {
        title: "1. Gather your background info with AI",
        content: `
          <ul>
            <li>Use Roo or OpenRouter chat to answer:</li>
            <li>What's your <b>full name</b>?</li>
            <li>What's your <b>professional background</b>?</li>
            <li>What <b>skills</b> do you have?</li>
            <li>What <b>projects</b> are you proud of?</li>
            <li>What are your <b>career goals</b>?</li>
            <li>Any <b>fun facts</b> or hobbies?</li>
            <li><b>Tip:</b> The more details, the better your website!</li>
          </ul>
        `
      },
      {
        title: "2. Generate your website content with AI",
        content: `
          <ul>
            <li>Ask AI to:</li>
            <li>Write a <b>short professional bio</b>.</li>
            <li>List your <b>skills</b>.</li>
            <li>Summarize your <b>top projects</b>.</li>
            <li>Suggest a <b>color scheme</b> and layout ideas.</li>
            <li><b>Example prompt:</b> "Based on my background, generate a professional bio, skills list, and project summaries for my personal website."</li>
          </ul>
        `
      },
      {
        title: "3. Create your website files",
        content: `
          <ul>
            <li>Use the provided template in <code>src/website/index.html</code>.</li>
            <li>Replace placeholder text with your AI-generated content.</li>
            <li>Edit <code>src/website/style.css</code> with your preferred colors and styles.</li>
          </ul>
        `
      },
      {
        title: "4. Preview and customize your website",
        content: `
          <ul>
            <li>Open <code>src/website/index.html</code> in your browser.</li>
            <li>Check layout, colors, and content.</li>
            <li>Edit HTML and CSS as needed.</li>
          </ul>
        `
      },
      {
        title: "5. Troubleshoot common issues",
        content: `
          <ul>
            <li><b>Website won't open?</b> Make sure you open <code>index.html</code> in a browser.</li>
            <li><b>Styles not showing?</b> Check the CSS link path.</li>
            <li><b>Text looks weird?</b> Edit your content or styles.</li>
            <li><b>Images not loading?</b> Check file paths and extensions.</li>
          </ul>
        `
      },
      {
        title: "6. Next steps",
        content: `
          <ul>
            <li>Add images or a profile picture.</li>
            <li>Link to your GitHub, LinkedIn, or resume.</li>
            <li>Add more pages (blog, contact, etc.).</li>
            <li>Learn about publishing online (GitHub Pages, Netlify, etc.).</li>
          </ul>
        `
      }
    ]
  }
];

// --- Code block rendering utility (unchanged) ---
function codeBlock(code, id) {
  return `
    <div class="code-block" id="code-block-${id}">
      <button class="copy-btn" onclick="copyCode('${id}')">Copy</button>
      ${code}
    </div>
  `;
}

window.copyCode = function(id) {
  const code = document.querySelector(`#code-block-${id}`).textContent.replace('Copy', '').trim();
  navigator.clipboard.writeText(code);
  const btn = document.querySelector(`#code-block-${id} .copy-btn`);
  btn.textContent = "Copied!";
  setTimeout(() => { btn.textContent = "Copy"; }, 1200);
};

document.addEventListener('DOMContentLoaded', () => {
  // --- OS selection and step logic ---
  let selectedOS = null; // "mac" | "windows"
  let steps = [];
  let currentStep = 0;

  // Build the steps array based on OS selection
  function buildStepsForOS(os) {
    const result = [];
    for (let i = 0; i < modules.length; ++i) {
      const mod = modules[i];
      if (mod.general) {
        // Module 6: general steps (not OS-specific)
        for (const step of mod.general) {
          result.push({ ...step, module: mod.title });
        }
      } else if (mod[os]) {
        for (const step of mod[os]) {
          result.push({ ...step, module: mod.title });
        }
      }
    }
    return result;
  }

  // Render the current step
  function renderStep() {
    if (!steps.length) return;
    const step = steps[currentStep];
    document.getElementById('step-card').innerHTML = `
      <h2>${step.title}</h2>
      <div style="margin-bottom:8px;color:#0070f3;font-size:1rem;">${step.module}</div>
      ${step.content}
    `;
    document.getElementById('progress').textContent = `Task ${currentStep + 1} of ${steps.length}`;
    document.getElementById('prev-btn').disabled = currentStep === 0;
    document.getElementById('next-btn').textContent = currentStep === steps.length - 1 ? "Finish" : "Next";
  }

  // Navigation controls
  document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      renderStep();
    }
  });

  document.getElementById('next-btn').addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      renderStep();
    } else {
      // Optionally, show a restart or summary
      currentStep = 0;
      renderStep();
    }
  });

  // Hotkeys: n for next, b for back
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (!steps.length) return;
    if (e.key === 'n' || e.key === 'N') {
      if (currentStep < steps.length - 1) {
        currentStep++;
        renderStep();
      }
    }
    if (e.key === 'b' || e.key === 'B') {
      if (currentStep > 0) {
        currentStep--;
        renderStep();
      }
    }
  });

  // --- OS selection logic ---
  function handleOSSelect(os) {
    selectedOS = os;
    steps = buildStepsForOS(os);
    currentStep = 0;
    document.getElementById('os-select-panel').style.display = 'none';
    document.getElementById('onboarding-instructions-dropdown').style.display = 'none';
    document.getElementById('onboarding-instructions-dropdown-tutorial').style.display = '';
    document.getElementById('tutorial-content').style.display = '';
    renderStep();
  }

  document.getElementById('select-mac-btn').addEventListener('click', () => handleOSSelect('mac'));
  document.getElementById('select-win-btn').addEventListener('click', () => handleOSSelect('windows'));

  // On load, show only OS selection panel
  document.getElementById('os-select-panel').style.display = '';
  document.getElementById('onboarding-instructions-dropdown').style.display = '';
  document.getElementById('onboarding-instructions-dropdown-tutorial').style.display = 'none';
  document.getElementById('tutorial-content').style.display = 'none';
});