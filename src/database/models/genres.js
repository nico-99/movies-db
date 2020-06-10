module.exports = (sequelize,DataTypes )=>{
    const genre = sequelize.define(
        'Genre',
        {
            name: DataTypes.STRING,
            ranking: DataTypes.INTEGER,
        },
        {
            timestamps: false
        },
);
        genre.associate = (models)=>{
            genre.hasMany(models.Movie,{
                as:"movies",
                foreignKey: 'genre_id'
            })    
        }
    
        return genre
}