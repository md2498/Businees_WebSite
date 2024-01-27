const express = require('express');
const Slider = require("../models/Slider");
const Services = require("../models/Services");
const Queries = require("../models/Queries");
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const upload = multer({ dest: 'public/images/gallery' });

const route = express.Router();

route.get("/", async (req, res) => {
    try {
        const sliderImagesFolder = 'public/images/sliderImages';
        const imageFiles = await fs.promises.readdir(sliderImagesFolder);
        const slides = imageFiles.map((file, index) => ({
            imageUrl: path.join('/static/images/sliderImages', file),
            title: "Your Title", // Replace with the actual title for each image
            subTitle: "Your Subtitle", // Replace with the actual subtitle for each image
            isActive: index === 0 ? "active" : "" // Set 'active' for the first image, and empty for others
        }));
        res.render("index", { slides });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
});

route.get('/gallery', async (req, res) => {
    try {

        const imageFolder = 'public/images/gallery';

        const files = await fs.promises.readdir(imageFolder);
        const imagePaths = files.map(file => path.join('/static/images/gallery', file));
        res.render('gallery', { imagePaths });
    } catch (error) {
        console.error("Error fetching Detail document:", error);
        res.status(500).send("Internal Server Error");
    }
});

route.get('/contact_us', async (req, res) => {
    res.render("contactUs");

});

route.get('/about', async (req, res) => {
    res.render("about");

});

route.post("/process-contect-form", async (req, res) => {
    console.log("form submitted");
    try {
        const query = await Queries.create(req.body);
        console.log(query);
        res.redirect("/");
    } catch (e) {
        console.log(e);
    }
});

route.post("/contactUs-process-content", async (req, res) => {
    console.log("form submitted");
    try {
        const query = await Queries.create(req.body);
        console.log(query);
        res.redirect("/contact_us");
    } catch (e) {
        console.error(e);
    }
});


// Handle file uploads
route.post("/upload", upload.single('photo'), (req, res) => {
    console.log(req.file);
    console.log('File uploaded!');
    setTimeout(() => {
        res.json({ message: 'File uploaded successfully' });
    }, 2000);
});

// Route to display all uploaded images
route.get('/uploaded', async (req, res) => {
    const imageFolder = 'public/images/gallery';
    try {
        const files = await fs.promises.readdir(imageFolder);
        const imagePaths = files.map(file => path.join('/static/images/gallery', file));
        res.render('uploaded', { imagePaths });
    } catch (error) {
        console.error("Error fetching Detail document:", error);
        res.status(500).send("Internal Server Error");
    }
});



route.get('/privacyPolicy', async (req, res) => {
    res.render("privacyPolicy");
});

route.get('/disclaimer', async (req, res) => {

    res.render("disclaimer");

});
route.get('/admin', async (req, res) => {

    res.render("admin");

});


module.exports = route;
