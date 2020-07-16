const Sequelize = require('sequelize')
const { Model } = Sequelize

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
      },
      {
        sequelize,
      }
    )
    return this
  }
}

module.exports = File
