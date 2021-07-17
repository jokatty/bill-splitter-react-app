export default function initPersonModel(sequelize, DataTypes) {
  return sequelize.define('person', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.TEXT,
    },
    amount: {
      type: DataTypes.DECIMAL,
    },
    billId: {
      type: DataTypes.INTEGER,
      References: {
        model: 'bills',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    // The underscored option makes Sequelize reference snake_case names in the DB.
    underscored: true,
  });
}
