import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Meetup from '../app/models/Meetup';
import Subscription from '../app/models/Subscription';
import File from '../app/models/File';

const models = [User, File, Meetup, Subscription];

class Database {
  constructor() {
    this.init();
    this.associate();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }

  associate() {
    models.forEach(model => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

export default new Database();
