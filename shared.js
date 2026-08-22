// DIET Attendance Management System - Standalone Shared Database & Utility Script
// Supports opening directly in Google Chrome via file:// without any server!

const INITIAL_STUDENTS = [
  { id: '1', rollNumber: '24349cm046', name: 'Vamsi kumar', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm046@diet.edu.in', password: 'student123' },
  { id: '2', rollNumber: '24349cm047', name: 'Prabhas', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm047@diet.edu.in', password: 'student123' },
  { id: '3', rollNumber: '24349cm048', name: 'Yamuna', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm048@diet.edu.in', password: 'student123' },
  { id: '4', rollNumber: '24349cm049', name: 'Ameer', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm049@diet.edu.in', password: 'student123' },
  { id: '5', rollNumber: '24349cm050', name: 'Bhavana', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm050@diet.edu.in', password: 'student123' },
  { id: '6', rollNumber: '24349cm051', name: 'Harsha vardhan', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm051@diet.edu.in', password: 'student123' },
  { id: '7', rollNumber: '24349cm052', name: 'Rupa', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm052@diet.edu.in', password: 'student123' },
  { id: '8', rollNumber: '24349cm053', name: 'Charan', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm053@diet.edu.in', password: 'student123' },
  { id: '9', rollNumber: '24349cm054', name: 'Vishnu', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm054@diet.edu.in', password: 'student123' },
  { id: '10', rollNumber: '24349cm055', name: 'Thanu Sri', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm055@diet.edu.in', password: 'student123' },
  { id: '11', rollNumber: '24349cm056', name: 'Yashwanth teja', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm056@diet.edu.in', password: 'student123' },
  { id: '12', rollNumber: '24349cm057', name: 'Siri Varshini', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm057@diet.edu.in', password: 'student123' },
  { id: '13', rollNumber: '24349cm058', name: 'Hemanth', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm058@diet.edu.in', password: 'student123' },
  { id: '14', rollNumber: '24349cm059', name: 'Vijay', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm059@diet.edu.in', password: 'student123' },
  { id: '15', rollNumber: '24349cm060', name: 'Uday', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm060@diet.edu.in', password: 'student123' },
  { id: '16', rollNumber: '24349cm061', name: 'Megha Varshini', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm061@diet.edu.in', password: 'student123' },
  { id: '17', rollNumber: '24349cm062', name: 'Prashanthi', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm062@diet.edu.in', password: 'student123' },
  { id: '18', rollNumber: '24349cm063', name: 'Rohith', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm063@diet.edu.in', password: 'student123' },
  { id: '19', rollNumber: '24349cm064', name: 'Avinash', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm064@diet.edu.in', password: 'student123' },
  { id: '20', rollNumber: '24349cm065', name: 'Janakiram', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm065@diet.edu.in', password: 'student123' },
  { id: '21', rollNumber: '24349cm066', name: 'Poojitha', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm066@diet.edu.in', password: 'student123' },
  { id: '22', rollNumber: '24349cm067', name: 'Babiji', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm067@diet.edu.in', password: 'student123' },
  { id: '23', rollNumber: '24349cm068', name: 'Shashank', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm068@diet.edu.in', password: 'student123' },
  { id: '24', rollNumber: '24349cm069', name: 'Satish', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm069@diet.edu.in', password: 'student123' },
  { id: '25', rollNumber: '24349cm070', name: 'Bhuvana', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm070@diet.edu.in', password: 'student123' },
  { id: '26', rollNumber: '24349cm071', name: 'Lathif', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm071@diet.edu.in', password: 'student123' },
  { id: '27', rollNumber: '24349cm072', name: 'Vishala', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm072@diet.edu.in', password: 'student123' },
  { id: '28', rollNumber: '24349cm073', name: 'Manoj', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm073@diet.edu.in', password: 'student123' },
  { id: '29', rollNumber: '24349cm074', name: 'Jaideep', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm074@diet.edu.in', password: 'student123' },
  { id: '30', rollNumber: '24349cm075', name: 'Indu', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm075@diet.edu.in', password: 'student123' },
  { id: '31', rollNumber: '24349cm076', name: 'Divya', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm076@diet.edu.in', password: 'student123' },
  { id: '32', rollNumber: '24349cm077', name: 'Sravani', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm077@diet.edu.in', password: 'student123' },
  { id: '33', rollNumber: '24349cm078', name: 'Varsha Suvarna', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm078@diet.edu.in', password: 'student123' },
  { id: '34', rollNumber: '24349cm079', name: 'Ashwanth', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm079@diet.edu.in', password: 'student123' },
  { id: '35', rollNumber: '24349cm080', name: 'Durga Prasad Reddy', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm080@diet.edu.in', password: 'student123' },
  { id: '36', rollNumber: '24349cm081', name: 'Jyothi Anjana', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm081@diet.edu.in', password: 'student123' },
  { id: '37', rollNumber: '24349cm082', name: 'Parduseshu', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm082@diet.edu.in', password: 'student123' },
  { id: '38', rollNumber: '24349cm083', name: 'Rithwik Durgesh', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm083@diet.edu.in', password: 'student123' },
  { id: '39', rollNumber: '24349cm084', name: 'Sasidhar', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm084@diet.edu.in', password: 'student123' },
  { id: '40', rollNumber: '24349cm085', name: 'Chintu', department: 'CSE', year: '3rd Year', semester: '5th Semester', email: '24349cm085@diet.edu.in', password: 'student123' },
];

const INITIAL_FACULTY = [
  { id: 'f1', name: 'Mr. B. Dileep', department: 'CSE', designation: 'Assistant Professor', email: 'b.dileep@diet.edu.in', phone: '+91 9876543210', subjectsAssigned: ['Android Programming', 'Android Programming Lab'], password: 'faculty123' },
  { id: 'f2', name: 'Ms. M. Ramya', department: 'CSE', designation: 'Assistant Professor', email: 'm.ramya@diet.edu.in', phone: '+91 9876543211', subjectsAssigned: ['Project Lab'], password: 'faculty123' },
  { id: 'f3', name: 'Mrs. K.L.V.N. Sailaja', department: 'HBMS', designation: 'Associate Professor', email: 'klvn.sailaja@diet.edu.in', phone: '+91 9876543212', subjectsAssigned: ['Life Skills Lab'], password: 'faculty123' },
  { id: 'f4', name: 'Mrs. P.K. Mahalakshmi', department: 'CSE', designation: 'Assistant Professor', email: 'pk.mahalakshmi@diet.edu.in', phone: '+91 9876543213', subjectsAssigned: ['Python Programming', 'Python Programming Lab'], password: 'faculty123' },
  { id: 'f5', name: 'Mrs. K.M. Pushpa', department: 'CSE', designation: 'Assistant Professor', email: 'km.pushpa@diet.edu.in', phone: '+91 9876543214', subjectsAssigned: ['Internet Of Things'], password: 'faculty123' },
  { id: 'f6', name: 'Mrs. Y. Pushpa', department: 'CSE', designation: 'Assistant Professor', email: 'y.pushpa@diet.edu.in', phone: '+91 9876543215', subjectsAssigned: ['Industrial Management & Entrepreneurship'], password: 'faculty123' },
  { id: 'f7', name: 'Mrs. Y. Sailaja', department: 'CSE', designation: 'Assistant Professor', email: 'y.sailaja@diet.edu.in', phone: '+91 9876543216', subjectsAssigned: ['Big Data & Cloud Computing'], password: 'faculty123' },
];

const INITIAL_SUBJECTS = [
  { id: 's1', code: 'CM501', name: 'Industrial Management & Entrepreneurship', department: 'CSE', semester: '5th Semester', faculty: 'Mrs. Y. Pushpa', type: 'Theory' },
  { id: 's2', code: 'CM502', name: 'Big Data & Cloud Computing', department: 'CSE', semester: '5th Semester', faculty: 'Mrs. Y. Sailaja', type: 'Theory' },
  { id: 's3', code: 'CM503', name: 'Android Programming', department: 'CSE', semester: '5th Semester', faculty: 'Mr. B. Dileep', type: 'Theory' },
  { id: 's4', code: 'CM504', name: 'Internet Of Things', department: 'CSE', semester: '5th Semester', faculty: 'Mrs. K.M. Pushpa', type: 'Theory' },
  { id: 's5', code: 'CM505', name: 'Python Programming', department: 'CSE', semester: '5th Semester', faculty: 'Mrs. P.K. Mahalakshmi', type: 'Theory' },
  { id: 's6', code: 'CM506', name: 'Android Programming Lab', department: 'CSE', semester: '5th Semester', faculty: 'Mr. B. Dileep', type: 'Practical / Lab' },
  { id: 's7', code: 'CM507', name: 'Python Programming Lab', department: 'CSE', semester: '5th Semester', faculty: 'Mrs. P.K. Mahalakshmi', type: 'Practical / Lab' },
  { id: 's8', code: 'CM508', name: 'Life Skills Lab', department: 'HBMS', semester: '5th Semester', faculty: 'Mrs. K.L.V.N. Sailaja', type: 'Practical / Lab' },
  { id: 's9', code: 'CM509', name: 'Project Lab', department: 'CSE', semester: '5th Semester', faculty: 'Ms. M. Ramya', type: 'Practical / Lab' },
];

function generateDefaultAttendance() {
  const records = [];
  const baseDate = '2026-08-08';
  const subjectsToSeed = [
    { subject: INITIAL_SUBJECTS[0], time: '09:00', absentRolls: ['24349cm058', '24349cm081', '24349cm049', '24349cm063', '24349cm076', '24349cm079', '24349cm084', '24349cm052', '24349cm068', '24349cm074'] },
    { subject: INITIAL_SUBJECTS[3], time: '10:15', absentRolls: ['24349cm047', '24349cm050', '24349cm058', '24349cm062', '24349cm071', '24349cm075', '24349cm080', '24349cm083'] },
    { subject: INITIAL_SUBJECTS[2], time: '11:30', absentRolls: ['24349cm046', '24349cm054', '24349cm060', '24349cm069', '24349cm081'] },
  ];

  let recordId = 1;
  subjectsToSeed.forEach(({ subject, time, absentRolls }) => {
    INITIAL_STUDENTS.forEach((student) => {
      const isAbsent = absentRolls.includes(student.rollNumber);
      records.push({
        id: `att_${recordId++}`,
        date: baseDate,
        time: time,
        subjectId: subject.id,
        subjectName: subject.name,
        department: subject.department,
        semester: subject.semester,
        facultyName: subject.faculty,
        studentRollNumber: student.rollNumber,
        studentName: student.name,
        status: isAbsent ? 'Absent' : 'Present',
        timestamp: new Date(`${baseDate}T${time}:00`).getTime(),
      });
    });
  });
  return records;
}

// Database helper
const AMS = {
  getStudents: () => {
    const saved = localStorage.getItem('ams_students');
    if (saved) return JSON.parse(saved);
    localStorage.setItem('ams_students', JSON.stringify(INITIAL_STUDENTS));
    return INITIAL_STUDENTS;
  },
  saveStudents: (data) => localStorage.setItem('ams_students', JSON.stringify(data)),

  getFaculty: () => {
    const saved = localStorage.getItem('ams_faculty');
    if (saved) return JSON.parse(saved);
    localStorage.setItem('ams_faculty', JSON.stringify(INITIAL_FACULTY));
    return INITIAL_FACULTY;
  },
  saveFaculty: (data) => localStorage.setItem('ams_faculty', JSON.stringify(data)),

  getSubjects: () => {
    const saved = localStorage.getItem('ams_subjects');
    if (saved) return JSON.parse(saved);
    localStorage.setItem('ams_subjects', JSON.stringify(INITIAL_SUBJECTS));
    return INITIAL_SUBJECTS;
  },
  saveSubjects: (data) => localStorage.setItem('ams_subjects', JSON.stringify(data)),

  getAttendance: () => {
    const saved = localStorage.getItem('ams_attendance_records');
    if (saved) return JSON.parse(saved);
    const initial = generateDefaultAttendance();
    localStorage.setItem('ams_attendance_records', JSON.stringify(initial));
    return initial;
  },
  saveAttendance: (data) => localStorage.setItem('ams_attendance_records', JSON.stringify(data)),

  getCurrentUser: () => {
    const saved = localStorage.getItem('ams_user');
    return saved ? JSON.parse(saved) : null;
  },
  setCurrentUser: (user) => {
    if (user) localStorage.setItem('ams_user', JSON.stringify(user));
    else localStorage.removeItem('ams_user');
  },
  logout: () => {
    localStorage.removeItem('ams_user');
    window.location.href = 'index.html';
  },
  resetDefaults: () => {
    localStorage.setItem('ams_students', JSON.stringify(INITIAL_STUDENTS));
    localStorage.setItem('ams_faculty', JSON.stringify(INITIAL_FACULTY));
    localStorage.setItem('ams_subjects', JSON.stringify(INITIAL_SUBJECTS));
    localStorage.setItem('ams_attendance_records', JSON.stringify(generateDefaultAttendance()));
    alert('System records reset to default state successfully!');
    window.location.reload();
  },

  renderLayout: (activePage, pageTitle, pageSubtitle) => {
    const user = AMS.getCurrentUser();
    if (!user) {
      window.location.href = 'index.html';
      return;
    }

    const roleBadge = user.role === 'admin' 
      ? '<span class="bg-purple-100 text-purple-700 text-[9px] font-bold px-1.5 py-0.5 rounded border border-purple-200">Admin</span>'
      : user.role === 'faculty'
      ? '<span class="bg-blue-100 text-blue-700 text-[9px] font-bold px-1.5 py-0.5 rounded border border-blue-200">Faculty</span>'
      : '<span class="bg-emerald-100 text-emerald-700 text-[9px] font-bold px-1.5 py-0.5 rounded border border-emerald-200">Student</span>';

    const menuItems = [
      { id: 'admin-dashboard.html', label: 'Admin Dashboard', icon: 'fa-shield-halved', roles: ['admin'] },
      { id: 'faculty-dashboard.html', label: 'Faculty Dashboard', icon: 'fa-chalkboard-user', roles: ['faculty'] },
      { id: 'student-dashboard.html', label: 'Student Dashboard', icon: 'fa-user-graduate', roles: ['student'] },
      { id: 'attendance-management.html', label: 'Mark Attendance', icon: 'fa-calendar-check', roles: ['admin', 'faculty'] },
      { id: 'student-management.html', label: 'Students Directory', icon: 'fa-users', roles: ['admin', 'faculty'] },
      { id: 'faculty-management.html', label: 'Faculty Directory', icon: 'fa-user-tie', roles: ['admin'] },
      { id: 'subject-management.html', label: 'Curriculum & Courses', icon: 'fa-book-open', roles: ['admin'] },
      { id: 'reports.html', label: user.role === 'student' ? 'My Attendance Logs' : 'Attendance Reports', icon: 'fa-file-lines', roles: ['admin', 'faculty', 'student'] },
    ].filter(item => item.roles.includes(user.role));

    // Inject Navigation Sidebar
    const navHtml = `
      <aside class="w-64 lg:w-72 bg-slate-900 text-slate-200 min-h-screen flex flex-col shrink-0 select-none border-r border-slate-800 shadow-xl hidden md:flex">
        <div class="p-5 border-b border-slate-800 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg font-bold">
              ✓
            </div>
            <div>
              <h1 class="font-bold text-base text-white tracking-tight leading-tight">DIET Attendance</h1>
              <p class="text-[11px] text-slate-400 font-medium">Campus Portal</p>
            </div>
          </div>
        </div>

        <div class="px-5 py-2.5 border-b border-slate-800 bg-slate-950/40 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="text-[11px] font-semibold tracking-wider text-slate-300 capitalize">${user.role} Workspace</span>
          </div>
          ${roleBadge}
        </div>

        <nav class="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto">
          ${menuItems.map(item => {
            const isActive = activePage === item.id;
            return `
              <a href="${item.id}" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                isActive ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }">
                <i class="fa-solid ${item.icon} w-4 text-center"></i>
                <span class="truncate">${item.label}</span>
              </a>
            `;
          }).join('')}
        </nav>

        <div class="p-4 border-t border-slate-800 bg-slate-950/50 space-y-2 mt-auto">
          <div class="flex items-center gap-3 px-2 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
            <div class="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0">
              ${user.name.charAt(0)}
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-xs font-bold text-slate-200 truncate">${user.name}</p>
              <p class="text-[10px] text-slate-400 font-mono truncate">${user.rollNumber || user.email || 'DIET User'}</p>
            </div>
          </div>

          <button onclick="AMS.logout()" class="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-rose-300 hover:text-rose-100 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 rounded-lg transition-colors cursor-pointer">
            <i class="fa-solid fa-right-from-bracket"></i>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    `;

    // Inject Top Header
    const headerHtml = `
      <header class="bg-white border-b border-slate-200 px-4 sm:px-6 md:px-8 py-3.5 flex items-center justify-between gap-3 shadow-xs sticky top-0 z-20">
        <div class="min-w-0">
          <h1 class="text-base sm:text-lg md:text-xl font-bold text-slate-900 tracking-tight truncate">${pageTitle}</h1>
          <p class="text-[11px] sm:text-xs text-slate-500 truncate hidden sm:block">${pageSubtitle}</p>
        </div>

        <div class="flex items-center gap-2 sm:gap-3 shrink-0">
          ${user.role === 'admin' ? `
            <button onclick="if(confirm('Reset all records to default?')) AMS.resetDefaults()" class="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors cursor-pointer">
              <i class="fa-solid fa-rotate-left text-slate-500"></i>
              <span class="hidden sm:inline">Reset Defaults</span>
            </button>
          ` : ''}

          <div class="flex items-center gap-2 sm:gap-3 pl-2 sm:pl-3 border-l border-slate-200">
            <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs border border-blue-200">
              ${user.name.charAt(0)}
            </div>
            <div class="leading-tight hidden sm:block">
              <div class="flex items-center gap-1.5">
                <span class="font-semibold text-xs text-slate-800">${user.name}</span>
                ${roleBadge}
              </div>
            </div>
            <button onclick="AMS.logout()" title="Sign Out" class="p-1.5 sm:p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer">
              <i class="fa-solid fa-arrow-right-from-bracket text-xs"></i>
            </button>
          </div>
        </div>
      </header>
    `;

    const container = document.getElementById('app-layout-container');
    if (container) {
      container.innerHTML = `
        <div class="flex min-h-screen bg-slate-100/70 font-sans text-slate-800 antialiased">
          ${navHtml}
          <div class="flex-1 flex flex-col min-w-0 overflow-x-hidden">
            ${headerHtml}
            <main class="flex-1 overflow-y-auto" id="page-content-area">
            </main>
          </div>
        </div>
      `;
    }
  }
};
