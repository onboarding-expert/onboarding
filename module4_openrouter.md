# Welcome to Module 4: Setting Up Your OpenRouter Account and API Key! 🔑

You're doing amazing! Now, let's connect your development environment to **OpenRouter**, so you can use powerful AI tools in your projects.

---

## What is OpenRouter?

OpenRouter is a **gateway to AI models**. It lets your apps:

- **Generate text, code, or images**
- **Analyze data**
- **Automate tasks**
- **Build smart features**

Think of it as your **AI superpower**!

---

## Why Do You Need an API Key?

An **API key** is like a **secret password** that lets your apps talk to OpenRouter securely.

- Keeps your account safe
- Tracks your usage
- Needed for all AI features

---

## What Will You Achieve in This Module?

- Create an OpenRouter account
- Generate a secure API key
- Store it safely on your computer
- Test your connection
- Learn how to use AI in your projects!

---

## How This Module Works

- **Choose your system:** Mac or Windows.
- **Follow the steps below.**
- **Click the dropdowns** for extra help, explanations, and troubleshooting.
- **Checkpoints** help you verify your progress.
- **Tips** make things easier!

---

# Creating Your OpenRouter Account

<details>
<summary><strong>1. Sign up for OpenRouter</strong></summary>

- Go to [openrouter.ai](https://openrouter.ai).
- Click **Sign Up**.
- Use your email or GitHub account.
- Verify your email.
- **Tip:** Use the same email as GitHub for simplicity.

</details>

<details>
<summary><strong>2. Generate your API key</strong></summary>

- After logging in, go to **API Keys**.
- Click **Create new key**.
- Name it (e.g., "My Dev Machine").
- Copy the key somewhere safe!
- **Warning:** Treat it like a password — don't share it.

</details>

---

# Storing Your API Key Securely

## On macOS 🍎

<details>
<summary><strong>3. Create a `.env` file to store your key</strong></summary>

- **How:** In Terminal, navigate to your project folder, then type:
  ```
  echo "OPENROUTER_API_KEY=your_key_here" >> .env
  ```
- Replace `your_key_here` with your real API key.
- **Checkpoint:** Type:
  ```
  cat .env
  ```
  You should see your key.
- **Tip:** The dot in `.env` hides the file by default.

</details>

<details>
<summary><strong>4. Keep your `.env` file private</strong></summary>

- Add `.env` to your `.gitignore` file:
  ```
  echo ".env" >> .gitignore
  ```
- **Why?** So you don't accidentally share your secret key.

</details>

<details>
<summary><strong>5. Test your API key with curl</strong></summary>

- **How:** In Terminal, type:
  ```
  curl -H "Authorization: Bearer your_key_here" https://openrouter.ai/api/test
  ```
- Replace with your real key.
- **Success:** You should get a response from OpenRouter.
- **Trouble?** Double-check your key and internet connection.

</details>

---

## On Windows 🪟

<details>
<summary><strong>3. Create a `.env` file to store your key</strong></summary>

- **How:** In PowerShell, navigate to your project folder, then type:
  ```
  Add-Content -Path .env -Value 'OPENROUTER_API_KEY=your_key_here'
  ```
- Replace `your_key_here` with your real API key.
- **Checkpoint:** Type:
  ```
  Get-Content .env
  ```
- **Tip:** The dot hides the file in some editors.

</details>

<details>
<summary><strong>4. Keep your `.env` file private</strong></summary>

- Add `.env` to your `.gitignore` file:
  ```
  Add-Content -Path .gitignore -Value '.env'
  ```
- **Why?** So you don't accidentally share your secret key.

</details>

<details>
<summary><strong>5. Test your API key with curl</strong></summary>

- **How:** In PowerShell, type:
  ```
  curl -H "Authorization: Bearer your_key_here" https://openrouter.ai/api/test
  ```
- Replace with your real key.
- **Success:** You should get a response.
- **Trouble?** Double-check your key and internet.

</details>

---

# More About OpenRouter and API Keys 🤖🔑

OpenRouter connects your apps to **powerful AI models** like GPT-4, DALL·E, and more.

- Your **API key** controls access and tracks usage.
- You can **create multiple keys** for different projects.
- **Keep keys secret!** Never share them publicly.
- If a key is lost or leaked, **revoke it immediately** in your OpenRouter dashboard.
- You can **monitor usage and billing** in your account.
- OpenRouter supports **rate limits** and **quotas** to manage costs.

### Example Use Cases:

- **Chatbots** that answer questions
- **Code generators** that help you write code
- **Image generators** for creative projects
- **Data analysis** and automation

---

# Helpful Tips & Checkpoints ✅

- **Never share your API key publicly!**
- **Lost your key?** Revoke it and create a new one.
- **Permission errors?** Run Terminal/PowerShell as admin.
- **Not sure?** Click dropdowns for help!

---

# Your Progress So Far

By finishing Module 4, you've:

- Created an OpenRouter account
- Generated and stored your API key securely
- Tested your connection
- Learned how OpenRouter powers your AI features

**You're ready to use AI in your projects! 🤖**

---

# Next Up: Installing VS Code and Roo Extension

Head to **[Module 5: Installing VS Code, Roo Extension, and Final Setup](module5_vscode_roo.md)** to finish your setup.

---

# For Trainers & Developers

- Beginner-friendly, step-by-step.
- Architecture-specific instructions.
- Modular, <500 lines.
- Markdown with dropdowns.
- TDD anchors as **checkpoints** and **tips**.