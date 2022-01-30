import React from 'react'
import CIcon from '@coreui/icons-react'
import portuguese from './translations/portuguese.js'
import { cilNotes, cilCreditCard, cilCalendar, cilSchool, cilHome } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: portuguese.nav.home,
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    to: '/dashboard',
  },
  {
    component: CNavTitle,
    name: 'Geral',
  },
  {
    component: CNavGroup,
    name: portuguese.nav.registry,
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: portuguese.nav.personalRegistry,
        to: '/forms/registry',
      },
      {
        component: CNavItem,
        name: portuguese.nav.skillsRegistry,
        to: '/forms/skills-registry',
      },
      {
        component: CNavItem,
        name: portuguese.nav.packageRegistry,
        to: '/forms/register-class-packages',
      },
      {
        component: CNavItem,
        name: portuguese.nav.classSchedule,
        to: '/forms/register-class-calendar',
      },
    ],
  },
  {
    component: CNavItem,
    name: portuguese.nav.payments,
    icon: <CIcon icon={cilCreditCard} customClassName="nav-icon" />,
    to: '/forms/floating-labels',
  },
  {
    component: CNavItem,
    name: portuguese.nav.completeCalendar,
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
    to: '/forms/range',
  },
  {
    component: CNavItem,
    name: portuguese.nav.searchMentor,
    icon: <CIcon icon={cilSchool} customClassName="nav-icon" />,
    to: '/forms/validation',
  },
  {
    component: CNavGroup,
    name: portuguese.nav.followUp,
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: portuguese.nav.tasks,
        to: '/forms/following-up',
      },
    ],
  },
]

export default _nav
