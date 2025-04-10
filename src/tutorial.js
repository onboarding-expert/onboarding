const moduleSteps = [
  // Module 1: Preparation for Development
  [
    {
      title: "Update your operating system",
      content: `
        <p><strong>Step 1 of 10 in Module 1: Preparation for Development</strong></p>
        <p>Keep your computer secure and compatible by updating to the latest version.</p>
        <ul>
          <li><strong>macOS:</strong> System Settings > General > Software Update</li>
          <li><strong>Windows:</strong> Settings > Update & Security > Windows Update</li>
        </ul>
        <p>Restart if prompted.</p>
      `
    },
    {
      title: "Enable Terminal/PowerShell permissions",
      content: `
        <p><strong>Step 2 of 10 in Module 1</strong></p>
        <p>Give your command line tool the access it needs.</p>
        <ul>
          <li><strong>macOS:</strong> System Settings > Privacy & Security > Full Disk Access > Add Terminal</li>
          <li><strong>Windows:</strong> Run PowerShell as administrator</li>
        </ul>
      `
    },
    {
      title: "Install developer tools",
      content: `
        <p><strong>Step 3 of 10 in Module 1</strong></p>
        <p>Install the tools needed for coding.</p>
        <ul>
          <li><strong>macOS:</strong> Open Terminal and run <code>xcode-select --install</code></li>
          <li><strong>Windows:</strong> Install Windows Terminal from the Microsoft Store or run <code>winget install --id=Microsoft.WindowsTerminal</code></li>
        </ul>
      `
    },
    {
      title: "Create a Developer folder",
      content: `
        <p><strong>Step 4 of 10 in Module 1</strong></p>
        <p>Organize your projects in a dedicated folder.</p>
        <ul>
          <li><strong>macOS:</strong> <code>mkdir -p ~/Developer</code></li>
          <li><strong>Windows:</strong> <code>New-Item -ItemType Directory -Path C:\\Dev</code></li>
        </ul>
      `
    },
    {
      title: "Verify CLI tools",
      content: `
        <p><strong>Step 5 of 10 in Module 1</strong></p>
        <p>Check that your developer tools are installed:</p>
        <ul>
          <li><strong>macOS:</strong> <code>git --version</code>, <code>xcode-select -p</code></li>
          <li><strong>Windows:</strong> <code>git --version</code></li>
        </ul>
      `
    },
    {
      title: "Enable Developer Mode (optional)",
      content: `
        <p><strong>Step 6 of 10 in Module 1</strong></p>
        <ul>
          <li><strong>macOS:</strong> <code>DevToolsSecurity -enable</code> (ignore if not found)</li>
          <li><strong>Windows:</strong> Settings > Update & Security > For Developers > Developer mode</li>
        </ul>
      `
    },
    {
      title: "Customize Terminal (optional)",
      content: `
        <p><strong>Step 7 of 10 in Module 1</strong></p>
        <p>Change colors, font, or theme in Terminal/PowerShell settings.</p>
      `
    },
    {
      title: "Check disk space",
      content: `
        <p><strong>Step 8 of 10 in Module 1</strong></p>
        <ul>
          <li><strong>macOS:</strong> <code>df -h</code></li>
          <li><strong>Windows:</strong> <code>Get-PSDrive -PSProvider FileSystem</code></li>
        </ul>
        <p>Ensure you have at least 10GB free.</p>
      `
    },
    {
      title: "Restart your system",
      content: `
        <p><strong>Step 9 of 10 in Module 1</strong></p>
        <p>Apply updates and settings by restarting your computer.</p>
      `
    },
    {
      title: "Confirm setup",
      content: `
        <p><strong>Step 10 of 10 in Module 1</strong></p>
        <ul>
          <li><strong>macOS:</strong> <code>softwareupdate --list</code> (should show no pending updates)</li>
          <li><strong>Windows:</strong> Settings > Windows Update > Check for updates</li>
        </ul>
      `
    }
  ],
  // Module 2: GitHub & Git Setup
  [
    {
      title: "Create a GitHub account",
      content: `
        <p><strong>Step 1 of 9 in Module 2: GitHub & Git Setup</strong></p>
        <p>Sign up at <a href="https://github.com" target="_blank">github.com</a> and verify your email.</p>
      `
    },
    {
      title: "Install Git",
      content: `
        <p><strong>Step 2 of 9 in Module 2</strong></p>
        <ul>
          <li><strong>macOS:</strong> <code>brew install git</code></li>
          <li><strong>Windows:</strong> <code>choco install git</code></li>
        </ul>
        <p>Check with <code>git --version</code></p>
      `
    },
    {
      title: "Configure your Git identity",
      content: `
        <p><strong>Step 3 of 9 in Module 2</strong></p>
        <p>Set your name and email for commits:</p>
        <pre>git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"</pre>
      `
    },
    {
      title: "Generate an SSH key",
      content: `
        <p><strong>Step 4 of 9 in Module 2</strong></p>
        <ul>
          <li><strong>macOS/Windows:</strong> <code>ssh-keygen -t ed25519 -C "your.email@example.com"</code></li>
        </ul>
        <p>Press Enter to accept defaults.</p>
      `
    },
    {
      title: "Add SSH key to agent",
      content: `
        <p><strong>Step 5 of 9 in Module 2</strong></p>
        <ul>
          <li><strong>macOS:</strong> <code>eval "$(ssh-agent -s)"</code> then <code>ssh-add --apple-use-keychain ~/.ssh/id_ed25519</code></li>
          <li><strong>Windows:</strong> <code>Start-Service ssh-agent</code> then <code>ssh-add $env:USERPROFILE\\.ssh\\id_ed25519</code></li>
        </ul>
      `
    },
    {
      title: "Add your SSH key to GitHub",
      content: `
        <p><strong>Step 6 of 9 in Module 2</strong></p>
        <p>Copy your public key and add it to GitHub > Settings > SSH and GPG keys.</p>
        <ul>
          <li><strong>macOS:</strong> <code>pbcopy < ~/.ssh/id_ed25519.pub</code></li>
          <li><strong>Windows:</strong> <code>Get-Content $env:USERPROFILE\\.ssh\\id_ed25519.pub | clip</code></li>
        </ul>
      `
    },
    {
      title: "Test your SSH connection to GitHub",
      content: `
        <p><strong>Step 7 of 9 in Module 2</strong></p>
        <p>Run <code>ssh -T git@github.com</code> and look for a welcome message.</p>
      `
    },
    {
      title: "Create your first repository",
      content: `
        <p><strong>Step 8 of 9 in Module 2</strong></p>
        <p>On GitHub, click <strong>New</strong>, name your repo, and create it.</p>
      `
    },
    {
      title: "Clone your repository",
      content: `
        <p><strong>Step 9 of 9 in Module 2</strong></p>
        <p>Copy the SSH URL from GitHub and run:</p>
        <pre>git clone git@github.com:yourusername/your-repo.git</pre>
      `
    }
  ],
  // Module 3: Package Managers
  [
    {
      title: "Install a package manager",
      content: `
        <p><strong>Step 1 of 5 in Module 3: Package Managers</strong></p>
        <ul>
          <li><strong>macOS (Homebrew):</strong> <code>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</code></li>
          <li><strong>Windows (Chocolatey):</strong> <code>Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))</code></li>
        </ul>
      `
    },
    {
      title: "Update your package manager",
      content: `
        <p><strong>Step 2 of 5 in Module 3</strong></p>
        <ul>
          <li><strong>macOS:</strong> <code>brew update</code></li>
          <li><strong>Windows:</strong> <code>choco upgrade chocolatey</code></li>
        </ul>
      `
    },
    {
      title: "Install Node.js, Python, and Git",
      content: `
        <p><strong>Step 3 of 5 in Module 3</strong></p>
        <ul>
          <li><strong>macOS:</strong> <code>brew install node python git</code></li>
          <li><strong>Windows:</strong> <code>choco install nodejs python git</code></li>
        </ul>
      `
    },
    {
      title: "Verify your PATH",
      content: `
        <p><strong>Step 4 of 5 in Module 3</strong></p>
        <p>Make sure you can run <code>node --version</code>, <code>python --version</code>, and <code>git --version</code> from any folder.</p>
      `
    },
    {
      title: "Explore more packages (optional)",
      content: `
        <p><strong>Step 5 of 5 in Module 3</strong></p>
        <ul>
          <li><strong>macOS:</strong> <code>brew search</code></li>
          <li><strong>Windows:</strong> Visit <a href="https://community.chocolatey.org/packages" target="_blank">chocolatey.org/packages</a></li>
        </ul>
      `
    }
  ],
  // Module 4: OpenRouter
  [
    {
      title: "Create an OpenRouter account",
      content: `
        <p><strong>Step 1 of 6 in Module 4: OpenRouter</strong></p>
        <p>Sign up at <a href="https://openrouter.ai" target="_blank">openrouter.ai</a> and verify your email.</p>
      `
    },
    {
      title: "Generate your API key",
      content: `
        <p><strong>Step 2 of 6 in Module 4</strong></p>
        <p>In OpenRouter, go to API Keys, create a new key, and copy it.</p>
      `
    },
    {
      title: "Store your API key in .env",
      content: `
        <p><strong>Step 3 of 6 in Module 4</strong></p>
        <ul>
          <li><strong>macOS:</strong> <code>echo "OPENROUTER_API_KEY=your_key_here" >> .env</code></li>
          <li><strong>Windows:</strong> <code>Add-Content -Path .env -Value 'OPENROUTER_API_KEY=your_key_here'</code></li>
        </ul>
      `
    },
    {
      title: "Add .env to .gitignore",
      content: `
        <p><strong>Step 4 of 6 in Module 4</strong></p>
        <p>Prevent your API key from being committed:</p>
        <pre>echo ".env" >> .gitignore</pre>
      `
    },
    {
      title: "Test your API key",
      content: `
        <p><strong>Step 5 of 6 in Module 4</strong></p>
        <p>Run <code>curl -H "Authorization: Bearer your_key_here" https://openrouter.ai/api/test</code> to check your connection.</p>
      `
    },
    {
      title: "Learn about OpenRouter",
      content: `
        <p><strong>Step 6 of 6 in Module 4</strong></p>
        <p>OpenRouter lets you use AI for code, chatbots, and more! Explore its features and documentation.</p>
      `
    }
  ],
  // Module 5: VS Code & Roo
  [
    {
      title: "Install Visual Studio Code",
      content: `
        <p><strong>Step 1 of 7 in Module 5: VS Code & Roo</strong></p>
        <ul>
          <li><strong>macOS:</strong> <code>brew install --cask visual-studio-code</code></li>
          <li><strong>Windows:</strong> <code>choco install vscode</code></li>
        </ul>
      `
    },
    {
      title: "Open VS Code",
      content: `
        <p><strong>Step 2 of 7 in Module 5</strong></p>
        <p>Launch Visual Studio Code from your Applications or Start menu.</p>
      `
    },
    {
      title: "Install Prettier and Roo extensions",
      content: `
        <p><strong>Step 3 of 7 in Module 5</strong></p>
        <p>In VS Code, go to Extensions and search for <strong>Prettier</strong> and <strong>Roo</strong>. Click Install.</p>
      `
    },
    {
      title: "Link your OpenRouter API key in Roo",
      content: `
        <p><strong>Step 4 of 7 in Module 5</strong></p>
        <p>Open Roo extension settings and paste your API key.</p>
      `
    },
    {
      title: "Test Roo in VS Code",
      content: `
        <p><strong>Step 5 of 7 in Module 5</strong></p>
        <p>Open a file, type a comment (e.g., <code>// Write a function to add two numbers</code>), and use Roo to generate code.</p>
      `
    },
    {
      title: "Customize VS Code (optional)",
      content: `
        <p><strong>Step 6 of 7 in Module 5</strong></p>
        <p>Adjust font size, theme, and settings for comfort.</p>
      `
    },
    {
      title: "Sync your settings (optional)",
      content: `
        <p><strong>Step 7 of 7 in Module 5</strong></p>
        <p>Sign in to VS Code and enable Settings Sync to keep your setup across devices.</p>
      `
    }
  ],
  // Module 6: Personal Website
  [
    {
      title: "Chat with AI to gather your info",
      content: `
        <p><strong>Step 1 of 8 in Module 6: Personal Website</strong></p>
        <p>Use Roo or OpenRouter chat to answer:</p>
        <ul>
          <li>What's your name?</li>
          <li>What's your background?</li>
          <li>What are your skills and projects?</li>
        </ul>
      `
    },
    {
      title: "Generate your website content",
      content: `
        <p><strong>Step 2 of 8 in Module 6</strong></p>
        <p>Ask the AI to write your bio, skills list, and project summaries.</p>
      `
    },
    {
      title: "Create your website files",
      content: `
        <p><strong>Step 3 of 8 in Module 6</strong></p>
        <ul>
          <li>Create <code>index.html</code> and <code>style.css</code></li>
          <li>Paste your content into the HTML template</li>
        </ul>
      `
    },
    {
      title: "Paste content into template",
      content: `
        <p><strong>Step 4 of 8 in Module 6</strong></p>
        <p>Fill in your HTML and CSS files with your generated content.</p>
      `
    },
    {
      title: "Preview your website",
      content: `
        <p><strong>Step 5 of 8 in Module 6</strong></p>
        <p>Open <code>index.html</code> in your browser and check your site!</p>
      `
    },
    {
      title: "Troubleshoot common issues",
      content: `
        <p><strong>Step 6 of 8 in Module 6</strong></p>
        <ul>
          <li><strong>Styles not showing?</strong> Check your <code><link rel="stylesheet" href="style.css"></code></li>
          <li><strong>Website won't open?</strong> Make sure you're opening <code>index.html</code></li>
        </ul>
      `
    },
    {
      title: "Add images, links, or more pages",
      content: `
        <p><strong>Step 7 of 8 in Module 6</strong></p>
        <p>Enhance your site with images, social links, or extra pages.</p>
      `
    },
    {
      title: "Publish your website (optional)",
      content: `
        <p><strong>Step 8 of 8 in Module 6</strong></p>
        <p>Learn about publishing online with GitHub Pages, Netlify, or similar services.</p>
      `
    }
  ]
];

// Flatten all module steps into a single array for navigation
const steps = moduleSteps.flat();

let currentStep = 0;

function renderStep() {
  const step = steps[currentStep];
  document.getElementById('step-card').innerHTML = `
    <h2>${step.title}</h2>
    ${step.content}
  `;
  document.getElementById('progress').textContent = `Task ${currentStep + 1} of ${steps.length}`;
  document.getElementById('prev-btn').disabled = currentStep === 0;
  document.getElementById('next-btn').textContent = currentStep === steps.length - 1 ? "Finish" : "Next";
}

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

// Initial render
renderStep();