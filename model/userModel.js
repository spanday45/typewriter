
module.exports = (sequelize, DataTypes) => {
    const authtable= sequelize.define("authtable", {
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: { //column name 
        type: DataTypes.STRING,
        allowNull:false,
      },
      phonenumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      
   
    });
    return authtable;
  };