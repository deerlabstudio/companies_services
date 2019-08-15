const boom = require('boom');
const companiesRepository = require('../../repositories/companies-repository');

class CompaniesController {
  constructor(router) {
    this.router = router;
    this.router.get('/companies', this.getAllCompanies);
    this.router.get('/companies/:id', this.getOneCompany);
    this.router.post('/companies', this.storeCompany);
    this.router.put('/companies/:id', this.updateCompany);
    this.router.delete('/companies/:id', this.destroyCompany);
  }

  async getAllCompanies(req, res, next) {
    try {
      const list = await companiesRepository.all();
      res.json(list);
    } catch (error) {
      next(error);
    }
  }

  async getOneCompany(req, res, next) {
    try {
      const { id } = req.params;
      const item = await companiesRepository.one(id);
      if (item) res.send(item);
      else return next(boom.notFound());
    } catch (error) {
      next(error);
    }
  }

  async storeCompany(req, res, next) {
    try {
      const { body } = req;
      const item = await companiesRepository.store(body);
      res.json(item);
    } catch (error) {
      next(error);
    }
  }

  async updateCompany(req, res, next) {
    try {
      const { id } = req.params;
      const { body } = req;
      const item = await companiesRepository.update(id, body);
      if (item) res.send(item);
      else return next(boom.notFound());
    } catch (error) {
      next(error);
    }
  }

  async destroyCompany(req, res, next) {
    try {
      const { id } = req.params;
      const item = await companiesRepository.destroy(id);
      if (item) res.send(item);
      else return next(boom.notFound());
    } catch (error) {
      next(error);
    }
  }
}
module.exports = CompaniesController;
