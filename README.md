# Biddyaloy

## Project Overview

Biddyaloy. is a comprehensive full-stack web application designed to enhance the academic experience for educational institutions, teachers, and students. It provides a centralized platform for course management, collaboration, file sharing, and more.

## Tech Stack

### Web Application

- **Frontend**: NextJS
- **Backend**: NextJS API Routes
- **ORM**: Drizzle
- **Schema Validation**: Zod
- **Chat**: Rocket.chat

### Database

- **Core Database**: PostgreSQL
- **Vector Database**: Pinecone
- **DB Hosting**: Neon, Supabase

### Mobile Application

- **Framework**: Expo React Native
- **Styling**: NativeWind

### DevOps

- **CI/CD**: GitHub Actions
- **Containerization**: Docker

### LLM/Gen-AI

- OpenAI
- Anthropic
- Claude
- Google Vertex

### ML Training

- Python
- PyTorch

### Model Deployment

- FastAPI
- TFLite

### Testing

- Sentry

### Hosting

- Vercel

## Feature Set

### AI Enhanced Features

- **OCR**: Users can upload images of text documents, and the application will automatically extract the text using OCR
- **Doc Chat**: User can kind of chat with the documents. The application will automatically extract the text using OCR which can be later used to search for any queries within the document.
- **Study Plan**: The application will be able to generate a study plan for the students based on their course syllabus, exam dates, and other factors. _(Only for teachers and students)_
- **Note Creation**: Users can create notes and flashcards directly from the application with the help of AI. The notes can be created with context of any course, exam syllabus, completed topics, etc. _(Only for students)_
- **Performance Analytics**: The application will provide detailed analytics on the student's performance based on their study plan, exam scores, and other factors. It can provide performance insights for not only the students but also the teachers as well based on the student's performance. _(Only for teachers)_
- **Individualized Assignments**: Teachers can create individualized assignments for each student based on their performance, study plan, and other factors. The application will automatically generate the assignments based on the student's history and performance. _(Only for teachers)_
- **Quiz Generation**: The application will be able to generate quizzes for the students based on any topic, course, exam syllabus they want to study. The quizzes can be generated with the help of AI and can be used to test the student's knowledge on the topic. _(Only for teacher and students)_
- **AI LearnMate**: The application will be able to provide an AI enhanced learn mate for the students. The AI LearnMate can help the students in their studies, chat with them like another student willing to study with them, help them in solving problems, etc. _(Only for students)_
- **Lesson Plan Generation**: The application will be able to AI generate lesson plans for the teachers based on the course syllabus, exam dates, and other factors. _(Only for teachers)_
- **Automated Grading**: The application will be able to automatically grade the assignments, quizzes, and exams for the teachers. The teachers can then focus on providing feedback to the students rather than spending hours grading the assignments/exams. _(Only for teachers)_
- **Voice-to-Text Notes**: The application will be able to convert voice notes to text notes for the students. The students can then use these notes for their studies, exams, etc. _(Only for teacher and students)_
- **Note Simplification**: The application will be able to simplify the notes for the students. The student will upload the notes, and the application will simplify the notes for them, making it easier for them to understand it quickly. _(Only for students)_
- **Resume Builder**: The application will be able to generate a resume for the students based on their academic performance, extracurricular activities, projects, etc. The students can then use this resume to apply for jobs, internships, etc. _(Only for students)_
- **Paper Summorization**: The application will be able to summarize research papers, articles, etc., for the students so that they don't have to read the entire paper. The students can then use these summaries for their studies, exams, etc. _(Only for teacher and students)_
- **Mock Interview & Feedback**: The application will be able to provide mock interviews for the students based on the job they are applying for or their chosen topics. The application will then provide feedback to the students on their performance, areas of improvement, etc. _(Only for students)_
- **Timely Feedback**: The application will be able to provide timely feedback to the students on their performance, study plan, assignments, quizzes, exams, etc. The students can then use this feedback to improve their performance, study plan, etc. _(Only for students)_
- **Automated Schedule**: The application will be able to generate an automated schedule for the students based on their study plan, exam dates, assignments, quizzes, etc. The students can then follow this schedule to manage their studies effectively. It also can be used by the Institution to manage the classes, exams, etc. _(Only for Institution and students)_
- **Text-to-Voice**: The application will be able to convert text notes to voice notes for the students who are visually impaired or just prefer listening to the notes rather than reading them. _(Only for students)_

### Core Features

- **StudyPal**: The application will be able to match students with other students based on any criteria like course, exam syllabus, study plan, etc. The students can then study together, share notes, and help each other in their studies.
- **Chat Room**: The application will provide a chat room for the students to discuss any topic, course, exam syllabus, etc. The students can then use this chat room to ask questions, share notes, etc.
- **QR/Magic-Link based Authentication**: The application will provide QR/Magic Link based authentication to login to the application. The Institution admin can generate QR codes or magic-links for their staff members, teachers and students to join the organization in the application. _(Only for institution)_
- **Result Analysis**: The application will provide detailed analytics on the student's performance based on their study plan, exam scores, and other factors. It can provide performance insights for not only the students but also the teachers as well based on the student's performance. _(Only for institution)_
- **Result Publication**: The application will be able to publish the results of the students, exams, assignments, quizzes, etc., for the students, teachers, and parents to view. The students can then use this feedback to improve their performance, study plan, etc. _(Only for staff members)_
- **Notice Board**: The application will provide a notice board for the Institution to post any notices, announcements, events, etc., for the students, teachers, and parents to view. The students can then use this information to stay updated on the latest happenings in the Institution. _(Only for staff members)_
- **Attendance Management**: The application will be able to manage the attendance of the students, teachers, staff members, etc., for the Institution. The teachers can then use this information to track the attendance of the students, staff members, etc. _(Only for staff members)_
