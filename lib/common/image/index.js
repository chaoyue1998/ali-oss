const merge = require('merge-descriptors');

const proto = exports;

merge(proto, require('./processObjectSave'));
merge(proto, require('./sysProcessObjectSave'));
