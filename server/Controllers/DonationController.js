// const Donation = require("../Models/Donation");

// const saveNgoSelection = async (req,res)=>{
//   try{
// console.log("BODY:", req.body);
//     const {
//       userId,
//       ngoName,
//       city,
//       area,
//       category,
//       address
//     } = req.body;

//     const data = await Donation.create({
//       userId,
//       ngoName,
//       city,
//       area,
//       category,
//       address
//     });

//     res.status(201).json({
//       message:"NGO Selected Successfully",
//       data
//     });

//   }catch(error){
//     res.status(500).json({ message:"Error" });
//   }
  
// };
// const updateDonationAfterPayment = async (req,res)=>{
//   try{

//     const { userId, ngoName, amount } = req.body;

//     const data = await Donation.findOneAndUpdate(
//       {
//         userId,
//         ngoName,
//         status:"selected"
//       },
//       {
//         amount,
//         status:"success"
//       },
//       { new:true }
//     );

//     res.json({
//       message:"Donation Updated",
//       data
//     });

//   }catch(error){
//     res.status(500).json({ message:"Error" });
//   }
// };
// const getMyNgoHistory = async (req,res)=>{
//   try{

//     const { userId } = req.params;

// const data = await Donation.find({
//   userId,
//   status: "success"
// }).sort({ createdAt: -1 });

//   }catch(error){
//     res.status(500).json({ message:"Error" });
//   }
// };

// module.exports = {
//   saveNgoSelection,
//   getMyNgoHistory,
//   updateDonationAfterPayment
// };

const Donation = require("../Models/Donation");

const saveNgoSelection = async (req, res) => {
  try {
  

    const {
      userId,
      ngoName,
      city,
      area,
      category,
      address
    } = req.body;

    const data = await Donation.create({
      userId,
      ngoName,
      city,
      area,
      category,
      address
    });

    res.status(201).json({
      message: "NGO Selected Successfully",
      data
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error"
    });
  }
};

const updateDonationAfterPayment = async (req, res) => {
  try {
    const { userId, ngoName, amount } = req.body;

    const data = await Donation.findOneAndUpdate(
      {
        userId,
        ngoName,
        status: "selected"
      },
      {
        amount,
        status: "success"
      },
      { new: true }
    );

    res.json({
      message: "Donation Updated",
      data
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error"
    });
  }
};

const getMyNgoHistory = async (req, res) => {
  try {
    const { userId } = req.params;

    const data = await Donation.find({
      userId
    }).sort({ createdAt: -1 });

    res.json({ data });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error"
    });
  }
};

module.exports = {
  saveNgoSelection,
  getMyNgoHistory,
  updateDonationAfterPayment
};