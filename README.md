# Escape The Matrix - Learning Management System

> A comprehensive, full-stack Learning Management System (LMS) with role-based access control, course management, and a complete assessment system featuring assignments, quizzes, and discussions.

<div align="center">

**[Live Application](https://escape-the-matrix-id9n.vercel.app/)** | **[Repository](https://github.com/niiazmorshed/Escape-The-Matrix)** | **[Developer](https://github.com/niiazmorshed)**

</div>

<div align="center">

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

## Testing Credentials

<div align="center">

### Quick Start - Use These Accounts to Test the Platform

</div>

| Role        | Email                       | Password | Access Level                   |
| ----------- | --------------------------- | -------- | ------------------------------ |
| **Admin**   | `niaz@gmail.com`            | `1234Aa` | Full platform access           |
| **Teacher** | `erwin.smith4733@gmail.com` | `1234Aa` | Course & assessment management |
| **Student** | `levi@gmail.com`            | `1234Aa` | Enroll & complete courses      |

<details>
<summary><b>Click to see detailed capabilities for each role</b></summary>

### Admin Account

**Email:** `niaz@gmail.com` | **Password:** `1234Aa`

**Capabilities:**

- Approve/reject teacher requests
- Approve/reject course submissions
- View and manage all users
- Access platform-wide analytics
- Full system control

### Teacher Account

**Email:** `erwin.smith4733@gmail.com` | **Password:** `1234Aa`

**Capabilities:**

- Create and manage courses
- Create assessments (assignments, quizzes, discussions)
- View student submissions
- Grade student work
- Track class analytics

### Student Account

**Email:** `levi@gmail.com` | **Password:** `1234Aa`

**Capabilities:**

- Enroll in courses
- View and complete assessments
- Submit assignments and take quizzes
- View grades and feedback
- Track personal progress

</details>

---

## Table of Contents

- [About](#about)
- [Key Features](#key-features)
- [User Roles & Workflows](#user-roles--workflows)
- [Assessment System](#assessment-system)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

---

## About

**Escape The Matrix** is a modern Learning Management System built with the MERN stack (MongoDB, Express.js, React, Node.js) that revolutionizes online education. The platform provides a complete ecosystem where administrators manage the system, teachers create and deliver courses, and students engage in interactive learning through assignments, quizzes, and discussions.

### Quick Summary

A production-ready LMS featuring role-based authentication (Admin/Teacher/Student), comprehensive course management, automated quiz grading, file-based assignment submissions, and real-time progress tracking. Built with React 18, Vite, Tailwind CSS, Firebase Authentication, and deployed on Vercel for optimal performance.

**Live Site:** [https://escape-the-matrix-id9n.vercel.app/](https://escape-the-matrix-id9n.vercel.app/)

### Core Capabilities

- **Multi-Role System**: Admin, Teacher, and Student roles with distinct permissions
- **Course Management**: Create, publish, and manage courses with rich content
- **Assessment Suite**: Assignments, Quizzes, and Discussion boards
- **Auto-Grading**: Instant quiz grading with detailed feedback
- **File Uploads**: Support for PDF, DOC, DOCX submissions (10MB limit)
- **Real-time Tracking**: Monitor student progress and submission status
- **Responsive Design**: Mobile-first approach with dark mode support

---

## Key Features

### For Administrators

- **User Management**

  - View and manage all users (students, teachers, admins)
  - Approve or reject teacher applications
  - Promote users to teacher or admin roles
  - Monitor platform-wide statistics

- **Course Approval**

  - Review teacher-submitted courses
  - Approve or reject course listings
  - Ensure content quality and compliance
  - View all classes across the platform

- **Platform Oversight**
  - Track enrollment statistics
  - Monitor system health and usage
  - Manage platform policies
  - Access comprehensive analytics

### For Teachers

- **Course Creation**

  - Create courses with detailed descriptions
  - Add course images and pricing
  - Set enrollment limits and prerequisites
  - Manage course visibility (draft/published)

- **Assessment Management**

  - Create assignments with file upload requirements
  - Build quizzes with multiple question types (MCQ, True/False, Short Answer)
  - Start discussion threads with peer response requirements
  - Set due dates, points, and passing scores
  - Control late submission policies

- **Grading & Feedback**

  - View all enrolled students for each assessment
  - Track who submitted vs. who didn't submit
  - Download student submissions (PDF, DOC, DOCX)
  - Provide grades and detailed feedback
  - View auto-graded quiz results
  - Monitor class performance with statistics

- **Class Analytics**
  - Track student enrollment and engagement
  - View submission rates and average grades
  - Identify struggling students early
  - Export grading reports

### For Students

- **Course Discovery & Enrollment**

  - Browse available courses with search and filters
  - View course details, instructor info, and pricing
  - One-click enrollment process
  - Access enrolled courses from dashboard

- **Assessment Participation**

  - View all assessments across enrolled courses
  - Submit assignments with text and file uploads
  - Take quizzes with instant auto-grading
  - Participate in class discussions
  - Respond to peer discussion posts
  - Track submission deadlines

- **Progress Tracking**

  - View grades and teacher feedback
  - Monitor completion status (pending, submitted, graded)
  - Track overall course progress
  - Receive late submission warnings
  - Access detailed quiz results with question-by-question feedback

- **Personal Dashboard**
  - Centralized view of all assessments
  - Filter by type (assignments, quizzes, discussions)
  - Sort by due date or status
  - Statistics cards showing total, completed, and pending work

## User Roles & Workflows

### Complete User Journey

```
┌─────────────────────────────────────────────────────────────────┐
│                     USER REGISTRATION                            │
│                            ↓                                     │
│                   Normal User (Student)                          │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ Option 1: Stay as Student        Option 2: Become Teacher       │
├────────────────────────────────  ─────────────────────────────┤
│ • Enroll in courses               • Fill "Teach on EMX" form   │
│ • Complete assessments            • Admin reviews request      │
│ • View grades                     • Role changed to Teacher    │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    TEACHER WORKFLOW                              │
│                                                                  │
│  1. Create Course (Draft)                                        │
│  2. Submit for Admin Approval                                    │
│  3. Admin Approves → Course Published                            │
│  4. Students Enroll in Course                                    │
│  5. Teacher Creates Assessments                                  │
│  6. Students Submit Work                                         │
│  7. Teacher Grades & Provides Feedback                           │
└─────────────────────────────────────────────────────────────────┘
```

### Student Workflow

```bash
Login → Browse Courses → Enroll → Continue Course → View Assessments
→ Submit Work → Receive Grades → View Feedback
```

### Teacher Workflow

```bash
Request Teacher Role → Admin Approval → Create Course → Admin Approval
→ Course Published → Create Assessments → View Submissions
→ Grade Work → Provide Feedback
```

### Admin Workflow

```bash
Login → Review Teacher Requests → Approve/Reject Teachers
→ Review Course Submissions → Approve/Reject Courses
→ Manage Users → Monitor Platform
```

---

## Assessment System

The platform features a comprehensive assessment system with three distinct types:

### Assignments

- **Features**:
  - Text submission support
  - File upload (PDF, DOC, DOCX - max 10MB)
  - Due date enforcement
  - Late submission control
  - Teacher manual grading with feedback
- **Student View**: Upload files, write text submissions, track status
- **Teacher View**: Download submissions, provide grades (0-100), write feedback

### Quizzes

- **Question Types**:
  - Multiple Choice Questions (MCQ)
  - True/False questions
  - Short Answer questions
- **Features**:
  - Automatic grading with instant results
  - Attempt limits (configurable)
  - Time limits (optional)
  - Pass/Fail determination
  - Question-by-question feedback
  - Explanation support for each question
- **Grading Logic**:
  - MCQ: Exact match comparison
  - True/False: Exact match
  - Short Answer: Case-insensitive, trimmed comparison

### Discussions

- **Features**:
  - Discussion prompts from teachers
  - Student discussion posts
  - Peer response requirements
  - Anonymous response option
  - Minimum response count enforcement
- **Use Cases**: Topic debates, peer learning, case studies, reflection posts

### Assessment Statistics

Teachers can view:

- Total submissions vs. enrolled students
- Graded vs. pending submissions
- Average grade across submissions
- Submission rate percentage
- Late submission tracking

---

## Project Structure

```
Escape_the_Matrix/
│
├── Escape_the_Matrix_Client/          # Frontend Application
│   ├── src/
│   │   ├── components/
│   │   │   └── enrollment/            # Enrollment components
│   │   ├── Hooks/                     # Custom React hooks
│   │   │   ├── useAuth.jsx            # Authentication hook
│   │   │   ├── useAdmin.jsx           # Admin role check
│   │   │   ├── useTeacher.jsx         # Teacher role check
│   │   │   ├── useAssessments.jsx     # Fetch assessments
│   │   │   ├── useStudentAssessments.jsx
│   │   │   └── ...
│   │   ├── Layout/
│   │   │   ├── Roots.jsx              # Main layout
│   │   │   └── Dashboard.jsx          # Dashboard layout
│   │   ├── Pages/
│   │   │   ├── Home/                  # Landing page
│   │   │   ├── All Classes/           # Course listing
│   │   │   ├── Dashboard/
│   │   │   │   ├── Admin Pannel/      # Admin features
│   │   │   │   ├── Teacher Pannel/    # Teacher features
│   │   │   │   │   ├── My Class/
│   │   │   │   │   │   ├── AssessmentSubmissions.jsx
│   │   │   │   │   │   ├── GradeSubmissionModal.jsx
│   │   │   │   │   │   └── ...
│   │   │   │   └── Student Pannel/    # Student features
│   │   │   │       └── My Assessments/
│   │   │   │           ├── StudentAssessmentDashboard.jsx
│   │   │   │           ├── AssessmentCard.jsx
│   │   │   │           ├── AssessmentDetail.jsx
│   │   │   │           ├── SubmitAssignment.jsx
│   │   │   │           ├── TakeQuiz.jsx
│   │   │   │           └── SubmitDiscussion.jsx
│   │   │   ├── Login/                 # Authentication
│   │   │   ├── Register/
│   │   │   └── Teach On Emx/          # Teacher application
│   │   ├── Routes/
│   │   │   ├── Routes.jsx             # Route configuration
│   │   │   ├── PrivateRoute.jsx       # Protected routes
│   │   │   ├── AdminRoute.jsx         # Admin-only routes
│   │   │   └── StudentRoute.jsx       # Student routes
│   │   ├── Provider/
│   │   │   └── ContextProvider.jsx    # Global state
│   │   └── services/
│   │       └── enrollmentAPI.js       # API service
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── Escape_the_Matrix_Server/          # Backend Application
│   ├── index.js                       # Express server & API routes
│   ├── uploads/
│   │   ├── assessments/               # Assessment files
│   │   └── submissions/               # Student submissions
│   ├── package.json
│   ├── vercel.json                    # Vercel deployment config
│   └── [Documentation Files]
│
└── README.md                          # This file
```

### Key Directories

- **`/src/Hooks`**: Custom React hooks for data fetching and authentication
- **`/src/Pages/Dashboard`**: Role-specific dashboard pages
- **`/src/Routes`**: Route configuration and protected routes
- **`/uploads/submissions`**: Student submission files (PDFs, DOCs)
- **`index.js`**: Complete backend with all API endpoints

---

## Installation & Setup

### Prerequisites

- **Node.js**: v16 or higher ([Download](https://nodejs.org/))
- **npm** or **yarn**: Package manager
- **MongoDB**: Database ([MongoDB Atlas](https://www.mongodb.com/cloud/atlas) recommended)
- **Firebase Account**: For authentication ([Firebase Console](https://console.firebase.google.com/))

### Step 1: Clone the Repository

```bash
git clone https://github.com/niiazmorshed/Escape-The-Matrix.git
cd Escape-The-Matrix
```

### Step 2: Frontend Setup

```bash
# Navigate to client directory
cd Escape_the_Matrix_Client

# Install dependencies
npm install

# Create .env file in the root of client directory
touch .env
```

Add the following to `.env`:

```env
# Firebase Configuration
VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_project.firebaseapp.com
VITE_PROJECTID=your_project_id
VITE_STORAGEBUCKET=your_project.appspot.com
VITE_MESSAGINGSENDERID=your_sender_id
VITE_APPID=your_app_id

# Backend API URL
VITE_API_URL=http://localhost:5000
```

### Step 3: Backend Setup

```bash
# Navigate to server directory
cd ../Escape_the_Matrix_Server

# Install dependencies
npm install

# Create .env file in the root of server directory
touch .env
```

Add the following to `.env`:

```env
# MongoDB Configuration
DB_USER=your_mongodb_username
DB_PASSWORD=your_mongodb_password

# JWT Secret
ACCESS_TOKEN_SECRET=your_jwt_secret_key

# Server Port
PORT=5000

# Default Admin Email (immutable)
DEFAULT_ADMIN_EMAIL=niazmorshedrafi@gmail.com
```

### Step 4: Create Upload Directories

```bash
# From server directory
mkdir -p uploads/assessments
mkdir -p uploads/submissions
```

### Step 5: Start Development Servers

**Terminal 1 - Backend:**

```bash
cd Escape_the_Matrix_Server
npm start
# Server runs on http://localhost:5000
```

**Terminal 2 - Frontend:**

```bash
cd Escape_the_Matrix_Client
npm run dev
# Client runs on http://localhost:5173
```

### Step 6: Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

---

## Environment Variables

### Frontend (.env in `Escape_the_Matrix_Client/`)

| Variable                 | Description             | Example                   |
| ------------------------ | ----------------------- | ------------------------- |
| `VITE_APIKEY`            | Firebase API key        | `AIzaSyC...`              |
| `VITE_AUTHDOMAIN`        | Firebase auth domain    | `project.firebaseapp.com` |
| `VITE_PROJECTID`         | Firebase project ID     | `project-12345`           |
| `VITE_STORAGEBUCKET`     | Firebase storage bucket | `project.appspot.com`     |
| `VITE_MESSAGINGSENDERID` | Firebase messaging ID   | `123456789`               |
| `VITE_APPID`             | Firebase app ID         | `1:123:web:abc`           |
| `VITE_API_URL`           | Backend API URL         | `http://localhost:5000`   |

### Backend (.env in `Escape_the_Matrix_Server/`)

| Variable              | Description         | Example                  |
| --------------------- | ------------------- | ------------------------ |
| `DB_USER`             | MongoDB username    | `admin`                  |
| `DB_PASSWORD`         | MongoDB password    | `securePassword123`      |
| `ACCESS_TOKEN_SECRET` | JWT secret key      | `your_random_secret_key` |
| `PORT`                | Server port         | `5000`                   |
| `DEFAULT_ADMIN_EMAIL` | Default admin email | `admin@example.com`      |

## Database Collections

### MongoDB Collections in `EscapeTheMatrix` Database

1. **UserCollection**

   - Stores user information (email, name, role, photo)
   - Roles: `user`, `teacher`, `admin`

2. **ClassesCollection**

   - Stores course information
   - Fields: title, description, image, price, instructor, status

3. **EnrollCollection**

   - Tracks student enrollments
   - Links students to courses with enrollment date

4. **TeachRequestCollection**

   - Stores teacher application requests
   - Fields: email, name, experience, category, status

5. **AssessmentCollection**

   - Stores all assessments (assignments, quizzes, discussions)
   - Fields: type, title, questions, due date, points, status

6. **SubmissionsCollection**
   - Stores student submissions
   - Fields: student info, file URL, answers, grade, feedback

## Development

### Run Linter

```bash
# Frontend
cd Escape_the_Matrix_Client
npm run lint

# Fix linting issues
npm run lint -- --fix
```

### Build for Production

```bash
# Frontend
npm run build

# Preview production build
npm run preview
```

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**

   ```bash
   git clone https://github.com/niiazmorshed/Escape-The-Matrix.git
   cd Escape-The-Matrix
   ```

2. **Create a feature branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**

   - Follow existing code style
   - Add comments for complex logic
   - Update documentation if needed

4. **Test your changes**

   - Test all affected user flows
   - Ensure no linting errors
   - Verify responsive design

5. **Commit your changes**

   ```bash
   git add .
   git commit -m "Add amazing feature: description"
   ```

6. **Push to your fork**

   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**
   - Describe your changes
   - Reference any related issues
   - Add screenshots for UI changes

---

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/niiazmorshed/Escape-The-Matrix/blob/main/LICENSE) file for details.

---

## Authors & Acknowledgments

### Developer

**Niaz Morshed** - [@niiazmorshed](https://github.com/niiazmorshed)

### Development Stack

- **Full-Stack Development**: MERN Stack (MongoDB, Express, React, Node.js)
- **UI/UX Design**: Modern, responsive design with Tailwind CSS
- **Assessment System**: Comprehensive grading and submission tracking
- **Authentication**: Firebase Auth with JWT integration

### Built With

- [React](https://reactjs.org/) - Frontend framework
- [Express.js](https://expressjs.com/) - Backend framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Firebase](https://firebase.google.com/) - Authentication
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vite](https://vitejs.dev/) - Build tool

---

## Support & Contact

For support, questions, or feature requests:

- **Create an Issue**: [GitHub Issues](https://github.com/niiazmorshed/Escape-The-Matrix/issues)
- **Documentation**: See documentation files in project directories
- **GitHub**: [@niiazmorshed](https://github.com/niiazmorshed)

---

## Highlights

- **Modern Tech Stack**: Built with latest React 18, Vite, and MongoDB
- **Beautiful UI**: Responsive design with Tailwind CSS and DaisyUI
- **Secure**: JWT authentication with role-based access control
- **Fast**: Vite build tool for lightning-fast development
- **Responsive**: Mobile-first approach works on all devices
- **Feature-Rich**: Complete LMS with assessments and grading
- **Production-Ready**: Deployed and live at [escape-the-matrix-id9n.vercel.app](https://escape-the-matrix-id9n.vercel.app/)
- **Well-Documented**: Comprehensive documentation (3000+ lines)

---

<div align="center">

**Escape The Matrix** - Empowering education through technology

Made with dedication by [Niaz Morshed](https://github.com/niiazmorshed)

Built using the MERN Stack

---

### Connect & Explore

[![Live Demo](https://img.shields.io/badge/Live-View_Application-success?style=for-the-badge&logo=vercel)](https://escape-the-matrix-id9n.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-niiazmorshed-181717?style=for-the-badge&logo=github)](https://github.com/niiazmorshed)
[![Repository](https://img.shields.io/badge/Repository-Escape_The_Matrix-blue?style=for-the-badge&logo=github)](https://github.com/niiazmorshed/Escape-The-Matrix)

---

**If you find this project helpful, please give it a star!**

[Back to Top](#escape-the-matrix---learning-management-system)

</div>
