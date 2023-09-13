'use strict';

/**
 * company-information service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::company-information.company-information');
