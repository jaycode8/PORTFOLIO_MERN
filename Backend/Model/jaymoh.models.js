const mongoose = require('mongoose');

const proLangSchema = new mongoose.Schema({
    language: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    langColor: {
        type: String,
        required: true
    }
}, { timestamps: true });

const projectsSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    technology: {
        type: mongoose.Schema.Types.Array,
        required: true
    },
    linkto: {
        type: String,
        required: true
    },
    bgImg: {
        type: String,
        required: true
    }
}, { timestamps: true });

const schoolsSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    alias: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    }
}, { timestamps: true });

const serviceSchema = new mongoose.Schema({
    service: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = {
    proLangSchema,
    projectsSchema,
    schoolsSchema,
    serviceSchema
};
