module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'doctortime',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}
