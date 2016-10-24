import {Customer} from '../../imports/api/collections/customer.js';

// Lib
import './_init.js';

Customer.permit(['insert'])
    .TS_ifDataInsert()
    .allowInClientCode();
Customer.permit(['update'])
    .TS_ifDataUpdate()
    .allowInClientCode();
Customer.permit(['remove'])
    .TS_ifDataRemove()
    .allowInClientCode();
