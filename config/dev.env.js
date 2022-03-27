module.exports = this.merge(this.prodEnv, {
  NODE_ENV: '"development"',
  API_ENDPOINT: '"http://staging.api.shrbat.com/api"',
});
