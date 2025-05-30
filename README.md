# 🔐 API Authentication Practice with Express.js

This project is a practical full-stack exercise built with **Node.js**, **Express.js**, and **EJS**, designed to interact with the [Secrets API](https://secrets-api.appbrewery.com) using all major HTTP methods and **Bearer Token Authentication**.

It includes a clean frontend interface to test `GET`, `POST`, `PUT`, `PATCH`, and `DELETE` operations — all from a styled web form.

---

## 🧠 What I Learned

- How to authenticate with an API using a Bearer token
- How to make HTTP requests with Axios (GET, POST, PUT, PATCH, DELETE)
- How to build a dynamic form interface using EJS and CSS
- How to secure sensitive credentials using environment variables (`.env`)

---

## 🚀 Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [EJS](https://ejs.co/)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [dotenv](https://www.npmjs.com/package/dotenv) *(for .env support)*

---

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/kawther27/api-auth-practice.git
   cd api-auth-practice
2. **Install dependencies**
       ```bash
       npm install
3. **Create a .env file in the root of your project and add your Bearer token:**
       ```bash
       BEARER_TOKEN=your_token_here
4. **Run the application**
     ```bash
     nodemon index.js
5. **Open your browser and go to:**
      ```bash
      http://localhost:3000
🔐 How to Get Your Own Bearer Token
To use this app with your own API token:

1. **Make a POST request to the token endpoint:**
      ```bash
      POST https://secrets-api.appbrewery.com/get-auth-token
      With body:
        {
         "username": "yourUsername",
          "password": "yourPassword"
        }
2. **You can use Postman or code:**
       ```bash
             axios.post("https://secrets-api.appbrewery.com/get-auth-token", {
             username: "yourUsername",
             password: "yourPassword" }).then(res => console.log(res.data.token));

3. **Copy your token and paste it into your .env file like this:**
         ```bash
         BEARER_TOKEN=your_token_here
🧪 How to Use the App
Enter values into the form fields:

Id: the secret’s ID

Secret: your secret text

Score: a number between 1–10

Click one of the following buttons:

✅ GET – fetch a secret by ID

➕ POST – create a new secret

🔄 PUT – replace an existing secret

🩹 PATCH – update a part of the secret

❌ DELETE – delete a secret by ID

The result is displayed at the top of the page.

🛡️ Securing Your Token with .env
To keep your token safe:

1. **Install dotenv**
   ```bash
       npm install dotenv

2. **Create a .env file:**
  ```bash
   BEARER_TOKEN=your_token_here

3. **In your index.js, add this at the top:**
   ```bash
    import dotenv from "dotenv";
    dotenv.config();
    const yourBearerToken = process.env.BEARER_TOKEN;
4. **In .gitignore, be sure to add:**

 ```bash
    .env


👩‍💻 Author
Kawther Khlif
Front-End Developer | Full-Stack Enthusiast
GitHub: @kawther27

📄 License
This project is for educational purposes only.
API provided by App Brewery - Secrets API