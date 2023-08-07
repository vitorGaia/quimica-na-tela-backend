const UserSchema = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'display_name',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { tableName: 'users', timestamps: false, underscored: true });

  User.associate = (models) => {
    User.hasMany(models.New, { foreignKey: 'userId', as: 'news' })
    User.hasMany(models.Comment, { foreignKey: 'userId', as: 'comments' })
  };

  return User;
};

module.exports = UserSchema;