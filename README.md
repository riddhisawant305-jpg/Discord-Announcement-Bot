# Discord Announcement Bot

## 📌 Project Name
Discord Announcement Bot

## 👨‍💻 Developed By
Riddhi Rahul Sawant

---

## 🚀 Project Overview
This project is a Discord Announcement Bot integrated with a web interface. It allows users to send announcements from a simple webpage, which are then automatically delivered to a Discord channel using a bot.

---

## ⚙️ Features
- Web-based announcement interface
- Real-time Discord message posting
- Backend API using Express.js
- Discord bot integration
- Easy-to-use UI
- Secure environment variable handling

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- Discord.js
- HTML, CSS, JavaScript
- dotenv

---

---
## 📁 Project Structure

discord-announcement-bot/
│── assets/
│   ├── ui.png
│   ├── terminal.png
│   └── discord.png
│
│── bot/
│
│── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
│── .env
│── server.js
│── package.json
│── package-lock.json
│── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/riddhisawant305-jpg/Discord-Announcement-Bot.git
```
### Install Dependencies

```bash
npm install
```

### Run the Project

```bash
node server.js
```

Open your browser and visit:

```text
http://localhost:3000
```
## 🔄 How It Works
1. User enters title and message on website
2. Frontend sends POST request to server
3. Server processes request
4. Discord bot sends message to channel

---

## 📷 Project Output

### 🖥️ Frontend UI
![Frontend UI](ui.png)

### 💻 Terminal Logs
![Terminal Logs](terminal.png)

### 💬 Discord Message Output
![Discord Output](discord.png)

---

## 🚀 Future Improvements

- Add support for scheduling announcements to be sent automatically at a specified date and time.
- Allow users to select different Discord servers and channels from the web interface.
- Enable sending rich embeds, images, and file attachments along with announcements.
- Deploy the application on a cloud platform for 24/7 availability and remote access.
