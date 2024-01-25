function status(request, response) {
  response.status(200).json({ chave: "teste de api são" });
}

export default status;
