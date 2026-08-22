-- Supabase schema for DIET Attendance Management System

-- Students
create table if not exists students (
  id text primary key,
  "rollNumber" text unique not null,
  name text not null,
  department text not null,
  year text not null,
  semester text not null,
  email text not null,
  password text not null
);

-- Faculty
create table if not exists faculty (
  id text primary key,
  name text not null,
  department text not null,
  designation text not null,
  email text unique not null,
  phone text,
  "subjectsAssigned" text[] not null default '{}',
  password text not null
);

-- Subjects
create table if not exists subjects (
  id text primary key,
  code text not null,
  name text not null,
  department text not null,
  semester text not null,
  faculty text not null,
  type text
);

-- Attendance records
create table if not exists attendance (
  id text primary key,
  date date not null,
  time text not null,
  "subjectId" text not null,
  "subjectName" text not null,
  department text not null,
  semester text not null,
  "facultyName" text not null,
  "studentRollNumber" text not null,
  "studentName" text not null,
  status text not null check (status in ('Present', 'Absent')),
  timestamp bigint not null
);

-- Indexes for faster queries
create index if not exists idx_attendance_student_roll on attendance ("studentRollNumber");
create index if not exists idx_attendance_date on attendance (date);

alter table students enable row level security;
alter table faculty enable row level security;
alter table subjects enable row level security;
alter table attendance enable row level security;

create policy "public demo access students" on students for all to anon, authenticated using (true) with check (true);
create policy "public demo access faculty" on faculty for all to anon, authenticated using (true) with check (true);
create policy "public demo access subjects" on subjects for all to anon, authenticated using (true) with check (true);
create policy "public demo access attendance" on attendance for all to anon, authenticated using (true) with check (true);
