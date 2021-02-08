import Template from '../template';

// Create a new 'render' controller method.
const getContent = (req, res) => {
  res.status(200).send(Template({
  }));
};

export default {
  getContent,
};
