'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('Task', {
    name: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Tasks.associate = function(models) {
    // associations can be defined here
  };
  return Tasks;
};