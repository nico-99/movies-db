module.exports = (sequelize,DataTypes )=>{
    const movie = sequelize.define(
        'Movie',
        {
            title: DataTypes.STRING,
            rating: DataTypes.DECIMAL,
            awards: DataTypes.INTEGER,
            release_date:{
                type: DataTypes.DATE,
                defaultValue: Date.now(),
            },
            length: DataTypes.INTEGER,
            genre_id: DataTypes.INTEGER,
        
        },
        {
            timestamps: false
        },
);
        movie.associate = (models)=>{
            movie.belongsTo(models.Genre, {
                as: 'genre',
                foreignKey: 'genre_id',
            })
            movie.belongsToMany(models.Actor, {
                as: 'actores',
                through: 'actor_movie',
                foreignKey: 'movie_id',
                otherKey: 'actor_id',
                timestamps: false,
            })    
        }
    
        return movie
}

