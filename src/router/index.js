import Vue from 'vue'
import Router from 'vue-router'

import XhBannerPages from '../pages/XhBannerPages'
import XhCashierDesk from '../pages/XhCashierDesk'
import XhFirmOrder from '../pages/XhFirmOrder'
import XhRegisterProtocol from "../pages/XhRegisterProtocol"
import XhLogin from "../pages/XhLogin.vue"
import XhLoginForget from "../pages/XhLoginForget"
import XhRegister from "../pages/XhRegister"
import XhLoginTreaty from "../pages/XhLoginTreaty"
import XhSearch from "../pages/XhSearch.vue"
import XhThemePages from '../pages/XhThemePages'
import XhMine from '../pages/XhMine'
import XhMyOrder from '../pages/XhMyOrder'
import XhEvaluationCentre from '../pages/XhEvaluationCentre'
import XhAfterSale from '../pages/XhAfterSale'
import XhDiscounts from '../pages/XhDiscounts'
import XhLibrary from '../pages/XhLibrary'
import XhManageAddress from '@/pages/XhManageAddress'
import XhSelectAddress from '@/pages/XhSelectAddress'
import XhShoppingCart from '@/pages/XhShoppingCart'
import XhCountSetting from "../pages/XhCountSetting"
import XhPersonalMessage from "../pages/XhPersonalMessage"
import XhUpdatePassword from "../pages/XhUpdatePassword"
import XhUpdatePhone from "../pages/XhUpdatePhone"
import XhCountBind from "../pages/XhCountBind"
import XhDestoryCount from "../pages/XhDestoryCount"
import XhAddressManagement from "../pages/XhAddressManagement"
import XhCreateAddress from "../pages/XhCreateAddress"
import XhBillManagement from "../pages/XhBillManagement"
import XhCreateBill from "../pages/XhCreateBill"
import XhSetting from "../pages/XhSetting"
import XhComplaintFeedback from "../pages/XhComplaintFeedback"
import XhCollection from "../pages/XhCollection"
import XhProductDetail from '.././pages/XhProductDetail'
import XhProductsList from '.././pages/XhProductsList'
import XhIndex from "../pages/XhIndex"
import XhMessage from '../pages/XhMessage'
import XhMessagePages from '../pages/XhMessagePages'
import XhGiftCards from '../pages/XhGiftCards'
import XhMyStudy from '../pages/XhMyStudy'
import XhClassify from '.././pages/XhClassify'
import XhMorePage from '../pages/XhMorePage'
import XhNavPages from '../pages/XhNavPages'
import XhMyEvaluation from '../pages/XhMyEvaluation'
import XhHistory from '../pages/XhHistory'
import XhMember from '../pages/XhMember'
import XhRule from '../pages/XhRule'
import XhEditAddress from '../pages/XhEditAddress'
import XhCustomerservice from '../pages/XhCustomerservice'

Vue.use(Router)

const router=new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'XhIndex',
      component: XhIndex
    },
    {
      path: '/XhClassify',
      name: 'XhClassify',
      component: XhClassify
    },
    {
      path: '/XhShoppingCart',
      name: 'XhShoppingCart',
      component: XhShoppingCart
    },
    {
      path: '/XhMine',
      name: 'XhMine',
      component: XhMine
    },
    {
      path: "/XhLogin",
      name: "XhLogin",
      component: XhLogin,
    },
    {
      path: "/XhRegisterProtocol",
      name: "XhRegisterProtocol",
      component: XhRegisterProtocol
    },
    {
      path: "/XhLoginForget",
      name: "XhLoginForget",
      component: XhLoginForget
    },
    {
      path: "/XhRegister",
      name: "XhRegister",
      component: XhRegister
    },
    {
      path: "/XhLoginTreaty",
      name: "XhLoginTreaty",
      component: XhLoginTreaty
    },
    {
      path: "/XhSearch",
      name: "XhSearch",
      component: XhSearch
    },
    {
      path: "/XhBannerPages",
      name: "XhBannerPages",
      component: XhBannerPages
    },
    {
      path: '/XhProductDetail/:goodsId',
      name: 'XhProductDetail',
      component: XhProductDetail
    },
    {
      path: '/XhProductsList',
      name: 'XhProductsList',
      component: XhProductsList
    },
    {
      path: '/XhThemePages',
      name: 'XhThemePages',
      component: XhThemePages
    },
    {
      path: '/XhNavPages',
      name: 'XhNavPages',
      component: XhNavPages
    },
    {
      path: '/XhMyOrder/:id',
      name: 'XhMyOrder',
      component: XhMyOrder
    },
    {
      path: '/XhEvaluationCentre',
      name: 'XhEvaluationCentre',
      component: XhEvaluationCentre
    },
    {
      path: '/XhAfterSale',
      name: 'XhAfterSale',
      component: XhAfterSale
    },
    {
      path: '/XhDiscounts',
      name: 'XhDiscounts',
      component: XhDiscounts
    },
    {
      path: '/XhLibrary',
      name: 'XhLibrary',
      component: XhLibrary
    },
    {
      path: '/XhCashierDesk',
      name: 'XhCashierDesk',
      component: XhCashierDesk
    },
    {
      path: '/XhManageAddress',
      name: 'XhManageAddress',
      component: XhManageAddress
    },
    {
      path: '/XhSelectAddress',
      name: 'XhSelectAddress',
      component: XhSelectAddress
    },
    {
      path: '/XhFirmOrder',
      name: 'XhFirmOrder',
      component: XhFirmOrder
    },
    {
      path: "/XhCountSetting",
      name: 'XhCountSetting',
      component: XhCountSetting
    },
    {
      path: "/XhPersonalMessage",
      name: 'XhPersonalMessage',
      component: XhPersonalMessage
    },
    {
      path: "/XhUpdatePassword",
      name: 'XhUpdatePassword',
      component: XhUpdatePassword
    },
    {
      path: "/XhUpdatePhone",
      name: 'XhUpdatePhone',
      component: XhUpdatePhone
    },
    {
      path: "/XhCountBind",
      name: 'XhCountBind',
      component: XhCountBind
    },
    {
      path: "/XhDestoryCount",
      name: 'XhDestoryCount',
      component: XhDestoryCount
    },
    {
      path: "/XhAddressManagement",///:information
      name: 'XhAddressManagement',
      component: XhAddressManagement
    },
    {
      path: "/XhEditAddress",///
      name: 'XhEditAddress',
      component: XhEditAddress
    },
    {
      path: "/XhCreateAddress",
      name: 'XhCreateAddress',
      component: XhCreateAddress
    },
    {
      path: "/XhBillManagement",
      name: 'XhBillManagement',
      component: XhBillManagement
    },
    {
      path: "/XhCreateBill",
      name: 'XhCreateBill',
      component: XhCreateBill
    },
    {
      path: "/XhSetting",
      name: 'XhSetting',
      component: XhSetting
    },
    {
      path: "/XhComplaintFeedback",
      name: 'XhComplaintFeedback',
      component: XhComplaintFeedback
    },
    {
      path: "/XhCollection",
      name: 'XhCollection',
      component: XhCollection
    },
    {
      path: '/XhMessage',
      name: 'XhMessage',
      component: XhMessage
    },
    {
      path: '/XhMessagePages/:id',
      name: 'XhMessagePages',
      component: XhMessagePages
    },
    {
      path: '/XhGiftCards',
      name: 'XhGiftCards',
      component: XhGiftCards
    },
    {
      path: '/XhMyStudy',
      name: 'XhMyStudy',
      component: XhMyStudy
    },
    {
      path: '/XhMorePage',
      name: 'XhMorePage',
      component: XhMorePage
    },
    {
      path: '/XhMyEvaluation/:itemId',
      name: 'XhMyEvaluation',
      component: XhMyEvaluation
    },
	{
	  path: '/XhHistory',
	  name: 'XhHistory',
	  component: XhHistory
	},
	{
	  path: '/XhMember',
	  name: 'XhMember',
	  component: XhMember
	},
	{
	  path: '/XhRule',
	  name: 'XhRule',
	  component: XhRule
	},
	{
	  path: '/XhCustomerservice',
	  name: 'XhCustomerservice',
	  component:XhCustomerservice
	}
	]

})

//全局路由守卫
router.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  const nextRoute = ['/XhShoppingCart', '/XhMine']
  let isLogin=sessionStorage.getItem('mobile'); // 是否登录
  // 未登录状态；当路由到nextRoute指定页时，跳转至login
  if (nextRoute.indexOf(to.path) >= 0) {
    if (!isLogin) {
      router.push({ name: 'XhLogin' }) //如果没，则跳转至登录页面
    }
  }
  // 已登录状态；当路由到login时，跳转至home
  if (to.path === '/XhLogin') {
    if (isLogin) {
      router.push({ name: 'XhMine' });
    }
  }
  next();
});

export default router;
