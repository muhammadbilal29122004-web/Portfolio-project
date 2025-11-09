# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, JavaScript, and Node.js backend.

## Features

- ✨ Modern and beautiful design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Smooth animations and transitions
- 🚀 Fast and lightweight
- ♿ Accessible design
- 📧 Contact form with WhatsApp integration
- 💬 WhatsApp message sending
- 📮 Email integration
- 🎯 Smooth scrolling navigation
- 🔧 Backend API with Express.js

## Sections

1. **Hero Section** - Introduction and call-to-action
2. **About Section** - Personal information and stats
3. **Skills Section** - Technical skills with progress bars
4. **Projects Section** - Showcase of projects
5. **Contact Section** - Contact form and information

## Customization

### Personal Information
1. Open `index.html`
2. Update the following:
   - Name in hero section (line 28)
   - Job title (line 29)
   - About section content (lines 70-76)
   - Contact information (lines 201-209)
   - Social media links (lines 43-46)

### Skills
- Edit the skills in the skills section (lines 95-136)
- Adjust the progress bar widths (style="width: X%")

### Projects
- Update project cards (lines 146-186)
- Add your project links
- Modify project tags

### Colors
- Edit the CSS variables in `styles.css` (lines 7-14)
- Main colors: `--primary-color` and `--secondary-color`

## Contact Integration

### WhatsApp Integration
- When users click "Send Message" button, the form data is formatted and opens WhatsApp with a pre-filled message
- WhatsApp number: +92 311 3254286
- Message includes: Name, Email, Subject, and Message

### Email Integration
- Email icon in hero section opens default email client
- Email: muhammadadbilal29122004@gmail.com
- Contact form can also send emails via backend (optional)

## Setup & Installation

### Frontend Only (Simple)

1. Open `index.html` directly in a web browser
2. WhatsApp and email links will work immediately

### With Backend Server

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   - Copy `.env.example` to `.env`
   - Update email credentials (for email functionality):
     ```
     EMAIL_USER=your_email@gmail.com
     EMAIL_PASS=your_app_password
     ```
   - For Gmail, generate an App Password:
     - Go to Google Account settings
     - Security > 2-Step Verification
     - App passwords > Generate app password

3. **Start the Server**
   ```bash
   npm start
   ```
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

4. **Access the Website**
   - Open http://localhost:3000 in your browser

## Backend API Endpoints

### POST /api/contact
Send contact form data via email
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I'm interested in..."
}
```

### POST /api/whatsapp
Generate WhatsApp URL with message
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I'm interested in..."
}
```

### GET /api/health
Health check endpoint

## How It Works

1. **Contact Form Submission**
   - User fills out the contact form
   - On submit, form data is formatted
   - WhatsApp opens with pre-filled message
   - User can send directly via WhatsApp

2. **Email Integration**
   - Click email icon to open default email client
   - Pre-filled with your email address

3. **Backend (Optional)**
   - Server can send emails via nodemailer
   - Logs contact form submissions
   - Provides API endpoints for extended functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Free to use for personal and commercial projects.

---

Made with ❤️ for your portfolio

