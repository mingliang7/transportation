Module = typeof Module === 'undefined' ? {} : Module;

Module.TS = {
    name: 'Transport',
    version: '2.0.0',
    summary: 'Transport is ...',
    roles: [
        'setting',
        'data-insert',
        'data-update',
        'data-remove',
        'reporter'
    ],
    dump: {
        setting: [
            'ts_location'
        ],
        data: [
            'ts_customer',
            'ts_order'
        ]
    }
};
