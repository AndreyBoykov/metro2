const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserProgress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Question }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Question, { foreignKey: 'question_id' });
    }
  }
  UserProgress.init(
    {
      user_id: DataTypes.INTEGER,
      question_id: DataTypes.INTEGER,
      answeredCorrectly: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'UserProgress',
    },
  );
  return UserProgress;
};
