'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    async setOrderAsPaid(ctx){

        const {id} = ctx.params;
        const order = await strapi.services.order.findOne({id});
        await strapi.services.order.update({id : order.id} , {status: "paid"} )
        return {message: "success"}
    }


};
