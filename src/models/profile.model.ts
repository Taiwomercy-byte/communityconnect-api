import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';


class Profile extends Model {
  declare user_id: string;
  declare bio: Text;
  declare image: string;
}
Profile.init(
    {
        user_id: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,            
        },
        
    },
    { sequelize,  modelName: 'profile'},
);

     
export default Profile;
