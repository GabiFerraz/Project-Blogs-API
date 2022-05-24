'use strict';

const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost,
      { through: PostCategory, as: 'posts', foreignKey: 'categoryId', otherKey: 'postId' });
    models.BlogPost.belongsToMany(models.Category,
      { through: PostCategory, as: 'categories', foreignKey: 'postId', otherKey: 'categoryId' });
  }
  // Chave composta de primarysKey, uso o through para dizer que essa tabela é intermediária e faço
  // a relação das duas tabelas.

  return PostCategory;
};

module.exports = PostCategory;