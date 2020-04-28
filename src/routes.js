
import notFound from './components/404.svelte'
import Landing from './components/Landing.svelte'

import ChooseLogin from './components/ChooseLogin.svelte'
import ChooseRegister from './components/ChooseRegister.svelte'
import LoginUser from './components/LoginUser.svelte'
import LoginPartner from './components/LoginPartner.svelte'
import RegisterPartner from './components/RegisterPartner.svelte'
import RegisterUser from './components/RegisterUser.svelte'

import Dashboard from './components/Dashboard.svelte'

const routes = [{
    name: '/',
    layout: Landing
},{
    name: '/chooseLogin',
    layout: ChooseLogin
},{
    name: '/chooseRegister',
    layout: ChooseRegister
},{
    name: '/loginuser',
    component: LoginUser
},{
    name: '/loginpartner',
    component: LoginPartner
},{
    name: '/registeruser',
    component: RegisterUser
},{
    name: '/registerpartner',
    component: RegisterPartner
},{
    name: '/dashboard',
    component: Dashboard
},{
    name: '404.html',
    component: notFound
}
]

export { routes }