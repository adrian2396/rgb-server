const dataCtrl = {};

const Data = require('../models/data');

dataCtrl.getWells =  async (req, res) => {
    const data = await Data.find();
    res.json(data);
};

dataCtrl.addWell = async (req, res) => {
    const { name, date, measures } = req.body;
    const Data = new Data({
        name,
        date,
        measures
    });
    await Data.Save();
    res.json({status: 'Data Save'});
};

dataCtrl.getWell = async (req, res) => {
    const data = Data.findById(req.params.id);
    res.json(data);
};

dataCtrl.updateWell = async (req, res) => {
    const {name, date, measures} = req.body;
    const newData = {name, date, measures};
    await Task.findByIdAndUpdate(req.params.id, newData);
    res.json({status: 'Data updated'});

};

dataCtrl.deleteWell = async (req, res) => {
    await Data.findByIdAndRemove(req.params.id);
    res.json({status: 'Data deleted'});
};


module.exports = dataCtrl;