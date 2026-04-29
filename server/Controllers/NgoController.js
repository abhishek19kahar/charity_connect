const ngoData = require("../Data/ngoData");

const getNgo = async (req,res)=>{
  try{

    const { area, category } = req.query;

    const ngos = ngoData.filter(item =>
      item.area.toLowerCase() === area.toLowerCase() &&
      item.category.toLowerCase() === category.toLowerCase()
    );

    res.json({ ngos });

  }catch(error){
    res.status(500).json({ message:"Server Error" });
  }
};

module.exports = { getNgo };