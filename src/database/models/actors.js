module.exports = (sequelize,DataTypes )=>{
    const actor = sequelize.define(
        'Actor',
        {
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            rating: DataTypes.DECIMAL,
            favourite_movie_id: DataTypes.INTEGER,
        },
        {
            timestamps: false
        }, 
    );
        actor.associate = (models)=>{
            actor.belongsToMany(models.Movie, {
                as: 'movies',
                through: 'actor_movie',
                foreignKey: 'actor_id',
                otherKey: 'movie_id',
                timestamps: false,
            })
        }
        return actor
}