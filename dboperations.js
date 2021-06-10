var config  =  require('./dbconfig');
const sql = require('mssql');

async function getOrders(){
    try{
        let pool = await sql.connect(config);
        let orders = await pool.request().query("SELECT TOP (3) * FROM SCR010");
        return orders.recordsets;
    }
    catch(error){
        console.log(error);
    }
}

async function getOrder(orderId) {
    try {
        let pool = await sql.connect(config);
        let order = await pool.request()
            .input('input_parameter', sql.NVarChar, orderId)
            .query("SELECT * FROM SCR010 WHERE D_E_L_E_T_ = '' AND CR_NUM = @input_parameter");
        return order.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}

async function addOrder(order) {

    try {
        let pool = await sql.connect(config);
        let insertOrder = await pool.request()
            .input('CR_FILIAL', sql.NVarChar, order.CR_FILIAL)
            .input('CR_NUM', sql.NVarChar, order.CR_NUM)
            .input('CR_TIPO', sql.NVarChar, order.CR_TIPO)
            .input('CR_USER', sql.NVarChar, order.CR_USER)
            .input('CR_APROV', sql.NVarChar, order.CR_APROV)
            .input('CR_NIVEL', sql.NVarChar, order.CR_NIVEL)
            .input('CR_STATUS', sql.NVarChar, order.CR_STATUS)
            .input('CR_DATALIB', sql.NVarChar, order.CR_DATALIB)
            .input('CR_TOTAL', sql.Int, order.CR_TOTAL)
            .input('CR_EMISSAO', sql.NVarChar, order.CR_EMISSAO)
            .input('CR_USERLIB', sql.NVarChar, order.CR_USERLIB)
            .input('CR_LIBAPRO', sql.NVarChar, order.CR_LIBAPRO)
            .input('CR_VALLIB', sql.Int, order.CR_VALLIB)
            .input('CR_TIPOLIM', sql.NVarChar, order.CR_TIPOLIM)
            .input('CR_WF', sql.NVarChar, order.CR_WF)
            .input('CR_MOEDA', sql.Int, order.CR_MOEDA)
            .input('CR_TXMOEDA', sql.Int, order.CR_TXMOEDA)
            .input('CR_USERORI', sql.NVarChar, order.CR_USERORI)
            .input('CR_APRORI', sql.NVarChar, order.CR_APRORI)
            .input('D_E_L_E_T_', sql.NVarChar, order.D_E_L_E_T_)
            .input('R_E_C_N_O_', sql.Int, order.R_E_C_N_O_)
            .input('CR_OBS', sql.VarBinary, order.CR_OBS)
            .input('CR_GRUPO', sql.NVarChar, order.CR_GRUPO)
            .input('CR_ITGRP', sql.NVarChar, order.CR_ITGRP)
            .input('CR_FLUIG', sql.NVarChar, order.CR_FLUIG)
            .input('CR_PRAZO', sql.NVarChar, order.CR_PRAZO)
            .input('CR_AVISO', sql.NVarChar, order.CR_AVISO)
            .input('CR_ULTAVIS', sql.NVarChar, order.CR_ULTAVIS)
            .input('CR_ESCALON', sql.NVarChar, order.CR_ESCALON)
            .input('CR_ESCALSP', sql.NVarChar, order.CR_ESCALSP)
            .execute('InsertOrder');
        return insertOrder.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}

module.exports = {
    getOrders: getOrders,
    getOrder: getOrder,
    addOrder: addOrder
}