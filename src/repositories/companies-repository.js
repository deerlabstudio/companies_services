const { Companies } = require('../database/models');

const all = async () => {
  const list = await Companies.findAll();
  return list;
};

const one = async (id) => {
  const item = await Companies.findOne({ where: { id } });
  return item;
};

const store = async (company) => {
  const item = await Companies.create({
    code: company.code,
    name: company.name,
    logo: company.logo,
    webpage: company.webpage,
    status: true,
  });
  return item;
};

const update = async (id, company) => {
  let item = await Companies.update({
    code: company.code,
    name: company.name,
    logo: company.logo,
    webpage: company.webpage,
    status: company.status,
  }, { where: { id } });

  if (item[0] === 1) {
    item = await Companies.findOne({ where: { id } });
  } else {
    item = null;
  }
  return item;
};

const destroy = async (id) => {
  let item = await Companies.findOne({ where: { id } });
  if (item) {
    await Companies.destroy({ where: { id } });
  } else {
    item = null;
  }
  return item;
};

module.exports = {
  all,
  one,
  store,
  update,
  destroy,
};
