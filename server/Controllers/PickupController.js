const Pickup = require('../Models/pickup');
const UserModel = require("../Models/user");

exports.createPickup = async (req, res) => {
  const { pickupDate, pickupTime, pickupAddress, } = req.body;
  const userId = req.user._id; // Extract the logged-in user's ID from the request (assuming auth middleware is in place)
  try {
    // Create and save the new pickup
    const newPickup = new Pickup({
      pickupDate,
      pickupTime,
      pickupAddress,
      userId, // Associate the pickup with the logged-in user
    });

    await newPickup.save();
    res.status(201).json({ message: 'Pickup details saved successfully!', pickup: newPickup });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save pickup details', error: error.message });
  }
};


exports.getAllPickups = async (req, res) => {
  const userId = req.user._id; // Extract the logged-in user's ID from the request

  try {
    const pickups = await Pickup.find({ userId })
      .populate('userId', 'name email') // Populate user details (e.g., name and email)
      .select('pickupDate pickupTime pickupAddress createdAt'); // Only include specified fields


    res.status(200).json(pickups);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch pickup data', error: error.message });
  }
};
