const fs = require('fs');
// This file is used to create preview branches
let branch = process.env.BRANCH;
branch = branch.replace(/[\W\s_]/g, '-').toLowerCase();
process.env.BRANCH = branch;