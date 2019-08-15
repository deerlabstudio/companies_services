'use strict';
module.exports = (sequelize, DataTypes) => {
  const Companies = sequelize.define('Companies', {
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
    webpage: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  Companies.associate = function(models) {
    // associations can be defined here
  };
  return Companies;
};
