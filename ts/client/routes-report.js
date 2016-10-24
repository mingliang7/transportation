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
import '../../core/imports/ui/layouts/report/index.html';

// Group
let TSRoutes = FlowRouter.group({
    prefix: '/simple-pos',
    title: "Transport",
    titlePrefix: 'Transport > ',
    subscriptions: function (params, queryParams) {
        // Branch by user
        if (Meteor.user()) {
            let rolesBranch = Meteor.user().rolesBranch;
            this.register('core.branch', Meteor.subscribe('core.branch', {_id: {$in: rolesBranch}}));
        }
    }
});

// Invoice
import '../imports/ui/reports/invoice.js';
TSRoutes.route('/invoice-report', {
    name: 'ts.invoiceReport',
    title: 'Invoice Report',
    action: function (params, queryParams) {
        Layout.main('TS_invoiceReport');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Invoice Report',
        // icon: 'cart-plus',
        parent: 'ts.home'
    }
});
TSRoutes.route('/invoice-report-gen', {
    name: 'ts.invoiceReportGe',
    title: 'Invoice Report',
    action: function (params, queryParams) {
        Layout.report('TS_invoiceReportGen');
    }
});

// Order
import '../imports/ui/reports/order.js';
TSRoutes.route('/order-report', {
    name: 'ts.orderReport',
    title: 'Order Report',
    action: function (params, queryParams) {
        Layout.main('TS_orderReport');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Order Report',
        // icon: 'users',
        parent: 'ts.home'
    }
});
