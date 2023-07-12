const router = require('express').Router();
const mongoose = require('mongoose');
require('../Model/connDB');
const {
    proLangSchema,
    projectsSchema,
    schoolsSchema,
    serviceSchema
} = require('../Model/jaymoh.models');
const proLangModel = mongoose.model('proLanguage', proLangSchema);
const projectsModel = mongoose.model('projects', projectsSchema);
const schoolModel = mongoose.model('schools', schoolsSchema);
const servicesModel = mongoose.model('service', serviceSchema);
const multer = require('multer');
const fs = require('fs');
const axios = require('axios');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split('/')[1];
        cb(null, `${file.originalname.split('.')[0]}-jayproject.${ext}`);
    }
});

let upload = multer({ storage: storage });

router.get('/', async (req, res) => {
    try {
        const response = await proLangModel.find();
        res.json({ success: true, message: response });
    } catch (error) {
        res.json({ success: false, message: 'Encounter fatal error' });
    }
});

// =============================================== Programming Languages ========================================================
router.post('/addLanguage', async (req, res) => {
    try {
        if (req.body.language == '' || req.body.level == '' || req.body.langColor == '') {
            res.json({ success: false, error: "All fields are required !!" });
        } else {
            const alreadyExist = await proLangModel.find({ language: req.body.language });
            if (alreadyExist == '') {
                const existColor = await proLangModel.find({ langColor: req.body.langColor });
                if (existColor == '') {
                    const language = await new proLangModel(req.body);
                    const savedLanguage = await language.save();
                    if (savedLanguage) {
                        res.json({ success: "true", message: `Successfully added ${req.body.language} to the database` });
                    };
                } else {
                    res.json({ success: 'false', message: `The color (${req.body.langColor}) is alredy assigned to ${existColor[0].language}` });
                }
            } else {
                res.json({ success: 'false', message: "Programming Language already exists in the database" });
            };
        };
    } catch (error) {
        res.json({ success: 'false', message: 'Encounter fatal error' });
    }
});

router.get('/languages', async (req, res) => {
    try {
        const response = await proLangModel.find();
        res.json({ success: true, message: response });
    } catch (error) {
        res.json({ success: false, message: 'Encounter fatal error' });
    }
});

router.put('/languages/:id', async (req, res) => {
    try {
        const data = {
            language: req.body.language,
            level: req.body.level,
            langColor: req.body.color
        }
        await proLangModel.findByIdAndUpdate(req.params.id, data);
        res.json({ success: 'true', message: 'Language updated successfully' });
    } catch (error) {
        res.json({ success: 'false', message: 'Encountered fatal error' });
    };
});

router.delete('/language/:id', async (req, res) => {
    try {
        await proLangModel.deleteOne({ _id: req.params.id });
        res.json({ success: 'true', message: 'Language deleted successfully' });
    } catch (error) {
        res.json({ success: 'false', message: 'Encountered fatal error' });
    };
});


// =============================================== Projects ========================================================

// router.post('/project1', upload.single('projectPhoto'), async (req, res, next) => {
//     try {
//         const projectName = req.body.projectName;
//         const title = req.body.title;
//         const description = req.body.description;
//         let technology = req.body.technology;
//         const linkto = req.body.linkto;
//         const year = req.body.year;
//         const file = req.file;
//         const bgImg = req.file.filename;
//         technology = technology.split(',').map((ele) => ele.trim());
//         const projectData = { projectName, title, description, technology, linkto, year, bgImg };
//         const filePath = req.file.path;
//         const fileName = req.file.originalname;
//         const token = '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';
//         const repoOwner = 'jaycode8';
//         const repoName = 'portfolio_files';
//         const branchName = 'main';
//         const fileData = fs.readFileSync(filePath);
//         const base64Data = fileData.toString('base64');

//         const createFileResponse = await axios.post(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${fileName}`, {
//             message: 'Upload image',
//             content: base64Data,
//             branch: branchName,
//         }, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });

//         console.log('Image uploaded successfully');
//         console.log('GitHub response:', createFileResponse.data);
//         console.log(projectData)
//         res.json({"data":projectData, "file":req.file, message:"file uploaded successfully"})
//     } catch (error) {
//         console.error('Error uploading image to GitHub:', error);
//         res.json({msg:'error during git hub file upload', err:error})
//     }
// })

router.post('/project', upload.single('projectPhoto'), async (req, res, next) => {
    try {
        const projectName = req.body.projectName;
        const title = req.body.title;
        const description = req.body.description;
        let technology = req.body.technology;
        const linkto = req.body.linkto;
        const year = req.body.year;
        const file = req.file;
        const bgImg = req.file.filename;
        technology = technology.split(',').map((ele) => ele.trim());
        const projectData = { projectName, title, description, technology, linkto, year, bgImg };
        if (projectName == '' || title == '' || description == '' || technology == '' || linkto == '' || year == '') {
            res.json({ success: 'false', message: "All fields are required !!" });
        } else {
            if (file) {
                const existProjectTitle = await projectsModel.find({ title: title });
                if (existProjectTitle == '') {
                    const existProjectLInk = await projectsModel.find({ linkto: linkto });
                    if (existProjectLInk == '') {
                        const project = await new projectsModel(projectData);
                        const savedProject = await project.save();
                        if (savedProject) {
                            res.json({ success: 'true', message: 'successfully saved project', data:project });
                        } else {
                            res.json({ success: 'false', message: "error during project saving to database" });
                        }
                    } else {
                        res.json({ success: 'false', message: "project already exists..." });
                    }
                } else {
                    res.json({ success: 'false', message: "project already exists..." });
                };
            } else {
                res.json({ success: 'false', message: "Must upload the file photo" });
            }
        }
    } catch (error) {
        res.json({ success: 'false', message: 'Encounter fatal error' });
        console.log(error);
    }
});

router.get('/projects', async (req, res) => {
    try {
        const allProjects = await projectsModel.find();
        res.json({ success: 'true', message: allProjects });
    } catch (error) {
        res.json({ success: 'false', message: 'Encounter fatal error' });
    }
});

router.put('/project/:id', upload.single('projectPhoto'), async (req, res, next) => {
    try {
        const projectName = req.body.ProjectName;
        const title = req.body.title;
        const description = req.body.description;
        const technology = req.body.technology;
        const linkto = req.body.linkto;
        const year = req.body.year;
        const projectData = { projectName, title, description, technology, linkto, year };
        if (projectName == '' || title == '' || description == '' || technology == '' || linkto == '' || year == '') {
            res.json({ success: 'false', message: "All fields are required !!" });
        } else {
            const updateProject = await projectsModel.findByIdAndUpdate(req.params.id, projectData);
            if (updateProject) {
                res.json({ success: 'true', message: 'Successfully updated the project' });
            }
        }
    } catch (error) {
        res.json({ success: 'false', message: 'Encounter fatal error' });
        // console.log(error);
    }
});

router.delete('/project/:id', async (req, res) => {
    try {
        const id = req.params.id
        const searchProject = await projectsModel.find({ _id: id });
        projectIMg = searchProject[0].bgImg
        const delProject = await projectsModel.deleteOne({ _id: id });
        if (!delProject) {
            res.json({ success: 'false', message: 'Error.. can not delete project' });
        } else {
            fs.unlinkSync(`./public/uploads/${projectIMg}`);
            res.json({ success: 'true', message: 'successfully deleted the project' });
        }

    } catch (error) {
        res.json({ success: 'false', message: 'Error.. can not delete project' });
    };
});


// =============================================== Schools ============
router.post('/institution', async (req, res) => {
    try {
        if (req.body.Name == '' || req.body.alias == '' || req.body.program == '' || req.body.duration == '') {
            res.json({ success: 'false', message: "All fields are required !!" });
        } else {
            const school = await new schoolModel(req.body);
            const savedSchool = await school.save();
            if (savedSchool) {
                res.json({ success: 'true', message: 'successfully added the Institution to db' });
            } else {
                res.json({ success: 'false', message: 'School not saved !!!!' });
            };
        }
    } catch (error) {
        res.json({ success: 'false', message: 'Encounter fatal error' });
    }
});

router.get('/institutions', async (req, res) => {
    try {
        const allInstitutions = await schoolModel.find();
        res.json({ success: true, message: allInstitutions });
    } catch (error) {
        res.json({ success: false, message: 'Encounter fatal error' });
    }
});

router.put('/institution/:id', upload.single('schoolImg'), async (req, res) => {
    try {
        const Name = req.body.Name;
        const alias = req.body.alias;
        const program = req.body.program;
        const duration = req.body.duration;
        const schoolUrl = req.body.schoolUrl;
        const schoolData = { Name, alias, program, duration, schoolUrl }
        if (Name == '' || alias == '' || program == '' || duration == '' || schoolUrl == '') {
            res.json({ success: 'false', message: "All fields are required !!" });
        } else {
            const updateInstitution = await schoolModel.findByIdAndUpdate(req.params.id, schoolData);
            if (updateInstitution) {
                res.json({ success: 'true', message: 'Successfully updated the institution' });
            }
        }
    } catch (error) {
        res.json({ success: 'false', message: 'Encounter fatal error' });
    }
});

router.delete('/institution/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const getInstitution = await schoolModel.find({ _id: id });
        const innitialimg = getInstitution[0].schoolImg;
        const deleteSchool = await schoolModel.deleteOne({ _id: id });
        if (deleteSchool) {
            fs.unlinkSync(`./public/uploads/${innitialimg}`);
            res.json({ success: 'true', message: 'sucessfully deleted the institution' });
        } else {
            res.json({ success: 'false', message: 'Schoolnot deleted' });
        }

    } catch (error) {
        res.json({ success: 'false', message: 'Encounter fatal error' });
    }
})

// =============================================== Services ========================================================

router.post('/addService', async (req, res) => {
    try {
        if (req.body.service == '' || req.body.description == '') {
            res.json({ success: 'false', message: "All fields are required !!" });
        } else {
            const existService = await servicesModel.find(req.body);
            if (existService == '') {
                const service = await new servicesModel(req.body);
                const savedService = await service.save();
                if (savedService) {
                    res.json({ success: 'true', message: 'Successfully saved service in db' });
                } else {
                    res.json({ success: 'false', message: 'service not saved' });
                }
            } else {
                res.json({ success: 'false', message: 'Service already exists...' });
            }
        }
    } catch (error) {
        res.json({ success: 'false', message: error });
    }
});

router.get('/services', async (req, res) => {
    try {
        const services = await servicesModel.find();
        res.json({ success: true, message: services });
    } catch (error) {
        res.json({ success: false, message: 'Encountered fatal error' });
    }
});

router.get('/service/:id', async (req, res) => {
    try {
        const searchService = await servicesModel.findById(req.params.id);
        res.json({ success: true, message: searchService });
    } catch (error) {
        res.json({ success: false, message: " Encoutered error while loading services" });
    };
});

router.put('/service/:id', async (req, res) => {
    try {
        await servicesModel.findByIdAndUpdate(req.params.id, req.body);
        res.json({ success: 'true', message: 'Service updated successfully' });
    } catch (error) {
        res.json({ success: 'false', message: 'Encountered fatal error' });
    };
});

router.delete('/service/:id', async (req, res) => {
    try {
        await servicesModel.deleteOne({ _id: req.params.id });
        res.json({ success: 'true', message: 'Service deleted successfully' });
    } catch (error) {
        res.json({ success: 'false', message: 'Encountered fatal error' });
    };
});

module.exports = router;
