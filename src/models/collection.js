'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async read(id, options = {}) {
    try {
      if (!id) {
        return this.model.findAll({}, options);
      } else {
        return this.model.findByPk(id, options);
      }
    } catch (err) {
      console.log('Error deleting: ' + this.model);
      console.error(err);
    }
  }

  async create(values) {
    try {
      let result = await this.model.create(values);
      return result;
    } catch (err) {
      console.log('Error creating: ', this.model);
      console.error(err);
    }
  }

  async update(id, values) {
    try {
      let record = await this.model.findOne({ where: { id } });
      await record.update(values);
      return record;
    } catch (err) {
      console.log('Error updating: ', this.model);
      console.error(err);
    }
  }

  async delete(id) {
    try {
      let results = await this.model.destroy({ where: { id } });
      console.log('RESULTS FROM COLLECTION', results);
      return 'deleted';
    } catch (err) {
      console.log('Error deleting: ', this.model);
      console.error(err);
    }
  }
}

module.exports = Collection;