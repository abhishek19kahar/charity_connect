// const express = require('express');
// const router = express.Router();
// const Volunteering = require('../Models/Volunteering');
// const multer = require('multer');

// // Set up Multer for file uploads
// const upload = multer({ dest: 'uploads/' });

// // Add a new volunteering record
// router.post('/add', upload.single('collegeidphoto'), async (req, res) => {
//   try {
//     const volunteeringData = new Volunteering({
//       ...req.body,
//       collegeidphoto: req.file.path, // Save the file path
//     });
//     const savedVolunteering = await volunteeringData.save();
//     res.status(201).json(savedVolunteering);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Fetch all volunteering records
// router.get('/', async (req, res) => {
//   try {
//     const volunteeringRecords = await Volunteering.find();
//     res.status(200).json(volunteeringRecords);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Fetch volunteering record by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const volunteeringRecord = await Volunteering.findById(req.params.id);
//     if (!volunteeringRecord) return res.status(404).json({ error: 'Record not found' });
//     res.status(200).json(volunteeringRecord);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Update a volunteering record
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedVolunteering = await Volunteering.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedVolunteering) return res.status(404).json({ error: 'Record not found' });
//     res.status(200).json(updatedVolunteering);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Delete a volunteering record
// router.delete('/:id', async (req, res) => {
//   try {
//     const deletedVolunteering = await Volunteering.findByIdAndDelete(req.params.id);
//     if (!deletedVolunteering) return res.status(404).json({ error: 'Record not found' });
//     res.status(200).json({ message: 'Record deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const VolunteeringModel = require('../Models/Volunteering'); // Import schema
// const upload = require('../Middlewares/upload'); // Import multer config
// const UserModel = require("../Models/user");
// const authMiddleware = require('../Middlewares/authMiddleware');
// // Route to add volunteering data

// router.post('/add',authMiddleware ,upload.single('collegeidphoto'), async (req, res) => {
//   try {
//     const { name, phone, address, email, collegename, abcid, description, workinghour } = req.body;
//     const userId = req.user._id;

//     // Create a new volunteering document
//     const newVolunteering = new VolunteeringModel({
//       name,
//       phone,
//       address,
//       email,
//       collegename,
//       abcid,
//       description,
//       workinghour,
//       collegeidphoto: req.file ? req.file.path : null, // Save file path
//       Volunteer_status:'y',
//       userId,
//     });

//     // Save to database
//     await newVolunteering.save();

//     res.status(201).json({ message: 'Volunteering data saved successfully', data: newVolunteering });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to save volunteering data' });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const VolunteeringModel = require('../Models/Volunteering'); // Import schema
const upload = require('../Middlewares/upload'); // Import multer config
const UserModel = require("../Models/user");
const authMiddleware = require('../Middlewares/authMiddleware');

// Route to add volunteering data (user applies to volunteer)
router.post('/add', authMiddleware, upload.single('collegeidphoto'), async (req, res) => {
  try {
    const { name, phone, address, email, collegename, abcid, description, workinghour } = req.body;
    const userId = req.user._id;

    // Check if the user has already applied to be a volunteer
    const existingUser = await UserModel.findById(userId);
    if (existingUser.volunteer_status === 'y') {
      return res.status(400).json({ message: 'You have already applied as a volunteer' });
    }

    // Create a new volunteering document
    const newVolunteering = new VolunteeringModel({
      name,
      phone,
      address,
      email,
      collegename,
      abcid,
      description,
      workinghour,
      collegeidphoto: req.file ? req.file.path : null, // Save file path
      Volunteer_status: 'y', // Volunteer status set to 'y' when they apply
      userId,
    });

    // Save the new volunteering data to the database
    await newVolunteering.save();

    // Update the user's volunteer status in the UserModel
    await UserModel.findByIdAndUpdate(userId, { volunteer_status: 'y' }, { new: true });

    res.status(201).json({ message: 'Volunteering data saved successfully and volunteer status updated', data: newVolunteering });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save volunteering data' });
  }
});

// Route to get volunteer status
router.get('/volunteer_status', authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;

    // Fetch the user's volunteer status
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check the volunteer status and send response
    if (user.volunteer_status === 'y') {
      return res.status(200).json({ message: 'You have successfully applied as a volunteer' });
    } else {
      return res.status(403).json({ message: 'You have not applied as a volunteer yet' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch volunteer status' });
  }
});

module.exports = router;
