import {Order} from '../../imports/api/collections/order.js';

// Lib
import './_init.js';

Order.permit(['insert'])
    .TS_ifDataInsert()
    .allowInClientCode();
Order.permit(['update'])
    .TS_ifDataUpdate()
    .allowInClientCode();
Order.permit(['remove'])
    .TS_ifDataRemove()
    .allowInClientCode();
