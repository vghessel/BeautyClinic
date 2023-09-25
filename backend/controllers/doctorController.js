const DoctorModel = require("../models/Doctor");

const doctorController = {
    create: async(req, res) => {
        try {
            const doctor = {
                name: req.body.name,
                description: req.body.description,
                image: req.body.image,
                services: req.body.services,
            };

            const response = await DoctorModel.create(doctor);

            res.status(201).json({response, msg:"Registered successfully!"});

        } catch (error) {
            console.log(error);
        }
    },
    getAll: async(req, res) => {
        try {
            const doctors = await DoctorModel.find();
            res.json(doctors);

        } catch (error) {
            console.log(error);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const doctor = await DoctorModel.findById(id);

            if(!doctor) {
                res.status(404).json({msg:"Doctor not found"});
                return;
            }

            res.json(doctor);

        } catch (error) {
            console.log(error);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id;
            const doctor = await DoctorModel.findById(id);

            if(!doctor) {
                res.status(404).json({msg:"Doctor not found"});
                return;
            }

            const deletedDoctor = await DoctorModel.findByIdAndDelete(id);

            res.status(200).json({deletedDoctor, msg:"Doctor deleted successfully!"});

        } catch (error) {
            console.log(error);
        }
    },
    update: async(req, res) => {
        try {
            
            const id = req.params.id;

            const doctor = {
                name: req.body.name,
                description: req.body.description,
                image: req.body.price,
                services: req.body.services,
            };

            const updatedDoctor = await DoctorModel.findByIdAndUpdate(id, doctor);
           
            if(!updatedDoctor) {
                res.status(404).json({msg:"Doctor not found"});
                return;
            }

            res.status(200).json({doctor, msg:"Information updated successfully!"})

        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = doctorController;