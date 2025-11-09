# Setup Instructions (Urdu/Hindi)

## Quick Start (Sabse Aasan Tarika)

### Option 1: Frontend Only (Sirf HTML - WhatsApp aur Email kaam karega)

1. `index.html` file ko browser mein kholo
2. Bas! WhatsApp aur email links kaam kar rahe hain

### Option 2: Backend ke Saath (Full Setup)

1. **Node.js Install Karo** (agar nahi hai)
   - https://nodejs.org se download karo

2. **Terminal/Command Prompt Mein Jaao**
   ```bash
   cd portfolio
   ```

3. **Dependencies Install Karo**
   ```bash
   npm install
   ```

4. **Server Start Karo**
   ```bash
   npm start
   ```

5. **Browser Mein Kholo**
   - http://localhost:3000

## WhatsApp Integration

- Jab koi "Send Message" button par click karega:
  - Form data WhatsApp message mein convert hoga
  - WhatsApp web/app khulega
  - Message pre-filled hoga
  - User directly send kar sakta hai

## Email Integration

- Email icon par click karne se:
  - Default email client khulega
  - Email address: muhammadadbilal29122004@gmail.com
  - User directly email bhej sakta hai

## Backend Setup (Optional - Email ke liye)

Agar email backend se bhejna hai:

1. **.env file banao**
   - `.env.example` ko copy karo aur `.env` naam do
   
2. **Gmail App Password Generate Karo**
   - Google Account settings mein jao
   - Security > 2-Step Verification
   - App passwords > Generate app password
   - Password ko `.env` file mein paste karo

3. **.env file update karo**
   ```
   EMAIL_USER=muhammadadbilal29122004@gmail.com
   EMAIL_PASS=your_app_password_here
   ```

## Features

✅ WhatsApp message sending
✅ Email integration
✅ Contact form
✅ Backend API (optional)
✅ Responsive design
✅ Modern UI/UX

## Troubleshooting

### WhatsApp nahi khul raha?
- Check karo ki WhatsApp installed hai
- Phone number sahi hai: 923113254286

### Email nahi ja rahi?
- .env file check karo
- App password sahi hai ya nahi
- Gmail 2-Step Verification enabled hai ya nahi

### Server start nahi ho raha?
- Node.js installed hai ya nahi check karo
- `npm install` run kiya hai ya nahi
- Port 3000 already use ho raha hai ya nahi

---

**Note**: Frontend only setup bhi kaam karega - WhatsApp aur email direct links se kaam karenge!

