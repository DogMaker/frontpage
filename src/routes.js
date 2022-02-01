import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Buttons
const Dropdowns = React.lazy(() => import('./views/forms/register-class-calendar/Dropdowns'))

//Forms
const RegisterPackagesView = React.lazy(() =>
  import('./views/forms/register-class-packages/RegisterPackagesView'),
)
const FloatingLabels = React.lazy(() => import('./views/forms/payments/FloatingLabels'))
const Registry = React.lazy(() => import('./views/forms/registry/Registry'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/calendar/Range'))
const SkillRegistry = React.lazy(() => import('./views/forms/registry-skills/SkillRegistry'))
const Validation = React.lazy(() => import('./views/forms/search-mentors/Validation'))
// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/forms/following-up/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/forms/register-class-calendar', name: 'Register Class Calendar', component: Dropdowns },
  { path: '/forms', name: 'Forms', component: Registry, exact: true },
  { path: '/forms/registry', name: 'Registry', component: Registry },
  { path: '/forms/skills-registry', name: 'Skill Register', component: SkillRegistry },
  {
    path: '/forms/register-class-packages',
    name: 'Register class packages',
    component: RegisterPackagesView,
  },
  { path: '/forms/calendar', name: 'Complete calendar', component: Range },
  { path: '/forms/input-group', name: 'Input Group', component: InputGroup },
  { path: '/forms/payments', name: 'Payments', component: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', component: Layout },
  { path: '/forms/search-mentors', name: 'Seach Mentors', component: Validation },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/forms/following-up', name: 'following up', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toasts', name: 'Toasts', component: Toasts },
]

export default routes
