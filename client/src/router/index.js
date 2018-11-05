import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import InfoLectures from '@/components/lecture/InfoLectures'
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'
import EditUser from '@/components/user/UserEdit'
import Dashboard from '@/components/user/Dashboard'
import Calendar from '@/components/user/Calendar'
import CreateLecture from '@/components/lecture/CreateLecture'
import Submission from '@/components/Submissions/Submission'
import Reminder from '@/components/Reminder/Reminder'
import AllEvents from '@/components/Events/AllEvents'
import NewEvents from '@/components/Events/NewEvents'
import EditEvent from '@/components/Events/EditEvent'
import EventsInfo from '@/components/Events/EventsInfo'
import Books from '@/components/library/Books'
import AddBooks from '@/components/library/AddBooks'
import AddSubject from '@/components/Subject/AddSubject'
import SubjectInfo from '@/components/Subject/SubjectInfo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/users/:id/dashboard',
      name: 'user_dashboard',
      component: Dashboard
    },
    {
      path: '/users/:id/edit',
      name: 'edit_user',
      component: EditUser
    },
    {
      path: '/users/:id/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/users/:id/subjects/:subject_id/lectures/add',
      name: 'createlecture',
      component: CreateLecture
    },
    {
      path: '/users/:id/subjects/:subject_id/lectures/:l_id',
      name: 'infolectures',
      component: InfoLectures
    },
    {
      path: '/users/:id/subjects/:subject_id/submissions/add',
      name: 'submission',
      component: Submission
    },
    {
      path: '/users/:id/reminders/add',
      name: 'reminder',
      component: Reminder
    },
    {
      path: '/events',
      name: 'allevent',
      component: AllEvents
    },
    {
      path: '/events/add',
      name: 'newevent',
      component: NewEvents
    },
    {
      path: '/events/:id/edit',
      name: 'editevent',
      component: EditEvent
    },
    {
      path: '/events/:id',
      name: 'eventinfo',
      component: EventsInfo
    },
    {
      path: '/library/books',
      name: 'books',
      component: Books
    },
    {
      path: '/library/books/add',
      name: 'addbooks',
      component: AddBooks
    },
    {
      path: '/users/:id/subjects/add',
      name: 'addsubject',
      component: AddSubject
    },
    {
      path: '/users/:id/subjects/:subject_id',
      name: 'subjectinfo',
      component: SubjectInfo
    }
  ]
})
