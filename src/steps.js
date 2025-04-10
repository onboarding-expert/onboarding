/**
 * Step data for all modules, split by OS.
 * Each module: { title, mac: [steps], windows: [steps], general: [steps] }
 * Each step: { title, content }
 * For brevity, only a few steps per module are shown as examples.
 * In production, all steps from the markdowns should be included.
 */
export const modules = [
  {
    title: "Module 1: Preparation for Development",
    mac: [
      {
        title: "Update your Mac to the latest version",
        content: `
          <p>Keeping your Mac updated helps avoid problems later.</p>
          <ul>
            <li><b>How:</b> Apple Menu > System Settings > General > Software Update</li>
            <li>Click <b>Update Now</b> or <b>Upgrade Now</b>.</li>
            <li><b>Tip:</b> Plug in your charger and connect to Wi-Fi.</li>
            <li><b>Trouble?</b> Restart and try again.</li>
          </ul>
        `
      },
      {
        title: "Give Terminal permission to access your files",
        content: `
          <p>This lets you run commands without annoying errors.</p>
          <ul>
            <li><b>How:</b> System Settings > Privacy &amp; Security > Full Disk Access</li>
            <li>Click the + button, add Terminal.</li>
            <li>Unlock with your password if needed.</li>
            <li><b>Why?</b> Some tools need access to your files to work properly.</li>
          </ul>
        `
      },
      // ... (add all 10 Mac steps from module1_preparation.md)
    ],
    windows: [
      {
        title: "Update Windows to the latest version",
        content: `
          <ul>
            <li><b>How:</b> Settings > Update &amp; Security > Windows Update</li>
            <li>Click <b>Check for updates</b> and install everything.</li>
            <li><b>Tip:</b> Restart if updates get stuck.</li>
          </ul>
        `
      },
      {
        title: "Install Windows Terminal (a better command line)",
        content: `
          <ul>
            <li><b>How:</b> From Microsoft Store, search <b>Windows Terminal</b> and install.<br>
            Or in PowerShell, type:<br>
            <code>winget install --id=Microsoft.WindowsTerminal</code></li>
            <li><b>Checkpoint:</b> Open Windows Terminal — it should launch!</li>
          </ul>
        `
      },
      // ... (add all 10 Windows steps from module1_preparation.md)
    ]
  },
  {
    title: "Module 2: Getting Started with GitHub",
    mac: [
      {
        title: "Sign up for a free GitHub account",
        content: `
          <ul>
            <li>Go to <a href="https://github.com" target="_blank">github.com</a></li>
            <li>Click <b>Sign up</b>, enter your email, username, and password.</li>
            <li>Verify your email.</li>
            <li><b>Tip:</b> Pick a username you'll be happy with — it's public!</li>
          </ul>
        `
      },
      // ... (add all Mac steps from module2_github.md)
    ],
    windows: [
      {
        title: "Sign up for a free GitHub account",
        content: `
          <ul>
            <li>Go to <a href="https://github.com" target="_blank">github.com</a></li>
            <li>Click <b>Sign up</b>, enter your email, username, and password.</li>
            <li>Verify your email.</li>
            <li><b>Tip:</b> Pick a username you'll be happy with!</li>
          </ul>
        `
      },
      // ... (add all Windows steps from module2_github.md)
    ]
  },
  {
    title: "Module 3: Setting Up Your Development Environment",
    mac: [
      {
        title: "Install Homebrew (the macOS package manager)",
        content: `
          <ul>
            <li><b>How:</b> Open Terminal, paste:<br>
            <code>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</code></li>
            <li>Follow the prompts.</li>
            <li><b>Checkpoint:</b> After install, type <code>brew --version</code></li>
          </ul>
        `
      },
      // ... (add all Mac steps from module3_package_managers.md)
    ],
    windows: [
      {
        title: "Install Chocolatey (the Windows package manager)",
        content: `
          <ul>
            <li><b>How:</b> Open PowerShell as admin, paste:<br>
            <code>Set-ExecutionPolicy Bypass -Scope Process -Force; ...</code></li>
            <li><b>Checkpoint:</b> After install, type <code>choco --version</code></li>
          </ul>
        `
      },
      // ... (add all Windows steps from module3_package_managers.md)
    ]
  },
  {
    title: "Module 4: Setting Up Your OpenRouter Account and API Key",
    mac: [
      {
        title: "Sign up for OpenRouter",
        content: `
          <ul>
            <li>Go to <a href="https://openrouter.ai" target="_blank">openrouter.ai</a></li>
            <li>Click <b>Sign Up</b>, use your email or GitHub account.</li>
            <li>Verify your email.</li>
          </ul>
        `
      },
      // ... (add all Mac steps from module4_openrouter.md)
    ],
    windows: [
      {
        title: "Sign up for OpenRouter",
        content: `
          <ul>
            <li>Go to <a href="https://openrouter.ai" target="_blank">openrouter.ai</a></li>
            <li>Click <b>Sign Up</b>, use your email or GitHub account.</li>
            <li>Verify your email.</li>
          </ul>
        `
      },
      // ... (add all Windows steps from module4_openrouter.md)
    ]
  },
  {
    title: "Module 5: Installing VS Code, Roo Extension, and Final Setup",
    mac: [
      {
        title: "Install VS Code using Homebrew",
        content: `
          <ul>
            <li><b>How:</b> In Terminal, type:<br>
            <code>brew install --cask visual-studio-code</code></li>
            <li><b>Checkpoint:</b> After install, open VS Code from Applications.</li>
          </ul>
        `
      },
      // ... (add all Mac steps from module5_vscode_roo.md)
    ],
    windows: [
      {
        title: "Install VS Code using Chocolatey",
        content: `
          <ul>
            <li><b>How:</b> In PowerShell as admin, type:<br>
            <code>choco install vscode</code></li>
            <li><b>Checkpoint:</b> After install, open VS Code from Start menu.</li>
          </ul>
        `
      },
      // ... (add all Windows steps from module5_vscode_roo.md)
    ]
  },
  {
    title: "Module 6: Build Your Personal Website with AI",
    general: [
      {
        title: "Start a Conversation with the AI",
        content: `
          <p>Use your Roo extension or OpenRouter chat to answer these questions:</p>
          <ul>
            <li>What's your <b>full name</b>?</li>
            <li>What's your <b>professional background</b>?</li>
            <li>What <b>skills</b> do you have?</li>
            <li>What <b>projects</b> are you proud of?</li>
            <li>What are your <b>career goals</b>?</li>
            <li>Any <b>fun facts</b> or hobbies?</li>
          </ul>
        `
      },
      // ... (add all steps from module6_personal_website.md)
    ]
  }
];