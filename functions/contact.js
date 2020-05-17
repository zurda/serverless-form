exports.handler = (event, _context, callback) => {
  const data = JSON.parse(event.body);

  const email = {
    from: "Michal Weisman <m.weizman@gmail.com>",
    to: `${data.name} <${data.email}>`,
    subject: data.subject,
    text: data.body,
  };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(email),
  });
};
