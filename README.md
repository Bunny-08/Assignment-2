# Dental Checkup Application

A comprehensive web application for managing dental checkups, connecting patients with dentists, and generating dental reports.

## 📋 Overview

The Dental Checkup Application is a full-stack Next.js application that streamlines the process of requesting dental checkups, uploading dental images, and receiving professional feedback. It provides a platform for patients to connect with dentists, schedule appointments, and access their dental records.

## ✨ Features

- **User Authentication**
  - Registration and login for patients and dentists
  - Role-based access control

- **Dentist Directory**
  - Browse available dentists
  - View dentist profiles, specializations, and experience

- **Checkup Request System**
  - Request dental checkups from specific dentists
  - Upload dental images
  - Provide descriptions of dental issues

- **Results Management**
  - View checkup results
  - Filter by status (pending/completed)
  - Download results as PDF reports

- **Responsive Design**
  - Mobile-friendly interface
  - Dark/light mode support

## 🛠️ Tech Stack

- **Frontend**
  - Next.js 14 (App Router)
  - React
  - Tailwind CSS
  - shadcn/ui components
  - jsPDF (for PDF generation)

- **Backend**
  - Next.js API Routes
  - Server Components
  - Server Actions

- **Database**
  - MongoDB with Mongoose

- **Authentication**
  - (Prepared for NextAuth.js integration)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- MongoDB database (local or Atlas)

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/dental-checkup-app.git
   cd dental-checkup-app
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Create a `.env.local` file in the root directory with the following variables:
   \`\`\`
   MONGODB_URI=your_mongodb_connection_string
   \`\`\`

4. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |
| `NEXTAUTH_SECRET` | Secret for NextAuth.js (when implemented) | For production |
| `NEXTAUTH_URL` | URL for NextAuth.js (when implemented) | For production |

## 📝 Usage

### For Patients

1. Register as a patient
2. Browse the list of dentists
3. Request a checkup from a dentist
4. Upload dental images (optional)
5. View checkup results when available
6. Download PDF reports of checkup results

### For Dentists

1. Register as a dentist
2. View incoming checkup requests
3. Review patient information and images
4. Provide diagnosis and recommendations
5. Mark checkups as completed

## 🔄 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/checkup` | GET | Get all checkups (with optional filters) |
| `/api/checkup` | POST | Create a new checkup request |
| `/api/checkup/[id]` | GET | Get a specific checkup |
| `/api/checkup/[id]` | PUT | Update a checkup (add results) |
| `/api/checkup/[id]` | DELETE | Delete a checkup |
| `/api/upload` | POST | Upload dental images |

## 📦 Project Structure

\`\`\`
dental-checkup-app/
├── app/                  # Next.js App Router
│   ├── api/              # API routes
│   ├── checkup/          # Checkup-related pages
│   ├── dentists/         # Dentist directory
│   ├── login/            # Login page
│   ├── register/         # Registration page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable UI components
├── lib/                  # Utility functions
├── models/               # Mongoose models
├── public/               # Static assets
└── README.md             # This file
\`\`\`

## 🚢 Deployment

### Deploying to Vercel

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Add the required environment variables in the Vercel dashboard
4. Deploy!

Alternatively, use the Vercel CLI:

\`\`\`bash
vercel
\`\`\`

## 🔮 Future Enhancements

- Email notifications for checkup updates
- Real-time chat between patients and dentists
- Calendar integration for appointment scheduling
- Payment processing for premium consultations
- Mobile app version

## 📄 License

[MIT](LICENSE)

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
#   A s s i g n m e n t - 2  
 