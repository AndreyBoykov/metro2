const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category, Answer, UserProgress }) {
      // define association here
      this.belongsTo(Category, { foreignKey: 'category_id' });
      this.hasMany(Answer, { foreignKey: 'question_id' });
      this.hasMany(UserProgress, { foreignKey: 'question_id' });
    }
  }
  Question.init(
    {
      question: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Question',
    },
  );
  return Question;
};
