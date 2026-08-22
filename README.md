# DIET Attendance Management System

Vite + React attendance portal for the DIET campus.

## What This Project Does

This project is an attendance management portal with three user roles:

- **Admin:** manages students, faculty, subjects, attendance, and reports.
- **Faculty:** views assigned subjects, marks attendance, and views course reports.
- **Student:** views personal attendance percentage and attendance history.

The main React application starts from `index.html` and uses files under `src/`. The other root-level HTML pages are older standalone pages kept for direct browser access.

## Data Stored

Supabase stores the shared application data in four tables:

### `students`

Stores each student's `id`, roll number, name, department, year, semester, email, and login password.

### `faculty`

Stores each faculty member's `id`, name, department, designation, email, phone number, assigned subjects, and login password.

### `subjects`

Stores subject code, name, department, semester, course type, and assigned faculty.

### `attendance`

Stores one attendance row per student per class session, including the date, time, subject, faculty, student roll number, student name, and `Present` or `Absent` status.

The application calculates attendance percentages and session summaries from the attendance rows. It does not store calculated percentages separately.

## How Data Sync Works

When Supabase environment variables are configured, the app reads shared data when it starts and saves changes back to Supabase. This allows password, roster, subject, and attendance changes to appear on other devices.

If Supabase is not configured, the app uses browser `localStorage`. That fallback is device-specific and does not synchronize between users or devices.

On the first Supabase-enabled launch, an empty database is seeded with the demo students, faculty, subjects, and attendance records bundled in `src/data/initialData.ts`.

## Run Locally

Prerequisite: Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

This is a client-side static app. The production output is the `dist` folder.

### Vercel

1. Import this repository at https://vercel.com/new.
2. Select **Vite** when prompted.
3. Use these settings:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Deploy.

### Netlify

1. Add the repository at https://app.netlify.com/start.
2. Set the build command to `npm run build`.
3. Set the publish directory to `dist`.
4. Deploy.

### Any static host

```bash
npm install
npm run build
```

Upload the generated `dist` folder to the host. No server process or environment variable is required by the current React app.

## Optional: Connect Supabase (recommended)

1. Create a free Supabase project.
2. In Project Settings → API, copy `Project URL` and `anon` publishable key.
3. Create a file named `.env.local` at the project root with:

```env
VITE_SUPABASE_URL="https://your-project-ref.supabase.co"
VITE_SUPABASE_ANON_KEY="your-anon-key"
```

4. Install dependencies and rebuild:

```bash
npm install
npm run build
```

When configured, the app will use Supabase to persist users, faculty, students, subjects and attendance so changes sync across devices. On the first launch with an empty database, the app automatically uploads the bundled demo students, faculty, subjects and attendance records. If you prefer not to enable Supabase, the app continues to use browser `localStorage`.

## Important data note

The current demo stores passwords in the database so the existing login screen can use them. Before using real institutional data, replace this demo login with Supabase Auth, avoid exposing passwords to the browser, and restrict database write policies by user role. The included credentials are demo credentials.
