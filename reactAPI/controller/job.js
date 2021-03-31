const models = require('../model');

module.exports = {
    get: (req, res, next) => {
        console.log(req);
        const lenght= req.query.lenght ? parseInt(req.query.lenght) : 20
        models.Jobs.find().limit(lenght)
            .then((jobs) => res.send(jobs))
            .catch(next);
    },
    getOne: (req, res, next) => {
        console.log(req);
        const { _id } = req.body;        
        models.Jobs.findOne(_id)
            .then((job) => res.send(job))
            .catch(next);
    },

    post: (req, res, next) => {  
        const { title }=req.body;
        const { description } = req.body;
        const { money } = req.body;
        const {toData}=req.body;
        const {category}=req.body;
        const { _id } = "req.user";
        console.log(req.body);

        models.Jobs.create({title,description, money,toData,category,creator: _id })
           /* .then((createdJob) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { jobsList: createdJob } }),
                    models.Jobs.findOne({ _id: createdJob._id })
                ]);
            })*/
            .then(([modified, jobs]) => {
                res.send(jobs);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        console.log(req);
        const id = req.params.id;
        const { description } = req.body;
        const { title } = req.body;
        models.Jobs.updateOne({ _id: id }, { description },{title})
            .then((updated) => res.send(updated))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Jobs.deleteOne({ _id: id })
            .then((remove) => res.send(remove))
            .catch(next)
    }
};