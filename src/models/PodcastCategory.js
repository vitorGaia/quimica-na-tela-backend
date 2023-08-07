const PodcastCategorySchema = (sequelize, DataTypes) => {
  const PodcastCategory = sequelize.define('PodcastCategory', {
    podcastCategoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'podcast_category_id',
    },
    podcastCategoryName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'podcast_category_name',
    },
  },
  { tableName: 'podcast_categories', timestamps: false, underscored: true });

  PodcastCategory.associate = (models) => {
    PodcastCategory.hasMany(models.Podcast, { foreignKey: 'podcastCategoryId', as: 'podcasts' })
  };

  return PodcastCategory;
};