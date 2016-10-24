import {Meteor} from 'meteor/meteor';
import {Session} from 'meteor/session';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {FlowRouterTitle} from 'meteor/ostrio:flow-router-title';
import 'meteor/arillo:flow-router-helpers';
import 'meteor/zimme:active-route';
import 'meteor/theara:flow-router-breadcrumb';

// Lib
import {__} from '../../core/common/libs/tapi18n-callback-helper.js';

// Layout
import {Layout} from '../../core/client/libs/render-layout.js';
import '../../core/imports/ui/layouts/login';
import '../../core/imports/ui/layouts/main';

// Group
let TSRoutes = FlowRouter.group({
    prefix: '/ts',
    title: "Transport",
    titlePrefix: 'Transport > ',
    subscriptions: function (params, queryParams) {
//     this.register('files', Meteor.subscribe('files'));
    }
});

// Home
import '../imports/ui/pages/home.js';
TSRoutes.route('/home', {
    name: 'ts.home',
    title: __('ts.home.title'),
    action(param, queryParam){
        Layout.main('TS_home');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: __('ts.home.title'),
        icon: 'home',
        parent: 'core.welcome'
    }
});

// Lookup Value
import '../imports/ui/pages/lookup-value.js';
TSRoutes.route('/lookup-value', {
    name: 'ts.lookupValue',
    title: 'Lookup Value',
    action: function (params, queryParams) {
        Layout.main('TS_lookupValue');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Lookup Value',
        // icon: 'asterisk',
        parent: 'ts.home'
    }
});

// Item
import '../imports/ui/pages/item.js';
TSRoutes.route('/item', {
    name: 'ts.item',
    title: __('ts.item.title'),
    action: function (params, queryParams) {
        Layout.main('TS_item');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: __('ts.item.title'),
        // icon: 'product-hunt',
        parent: 'ts.home'
    }
});

// Customer
import '../imports/ui/pages/customer.js';
TSRoutes.route('/customer', {
    name: 'ts.customer',
    title: 'Customer',
    action: function (params, queryParams) {
        Layout.main('TS_customer');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Customer',
        // icon: 'users',
        parent: 'ts.home'
    }
});

// Order
import '../imports/ui/pages/order.js';
TSRoutes.route('/order', {
    name: 'ts.order',
    title: 'Order',
    action: function (params, queryParams) {
        Layout.main('TS_order');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Order',
        // icon: 'cart-plus',
        parent: 'ts.home'
    }
});
