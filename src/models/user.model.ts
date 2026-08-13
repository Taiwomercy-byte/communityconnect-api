import { Model, DataTypes } from 'sequelize';
import sequelize from  '../config/database.js';
import Profile from './profile.model.js';

class User extends Model {
  declare id: number;
  declare email: string;
  declare password: string;
  declare username: string;
  
}
User.init(
    {
        id: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    },
    { sequelize, modelName: 'user'},
);
    
    
    User.hasOne(Profile);

