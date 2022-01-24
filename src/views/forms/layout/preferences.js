const preferences = {
  items: [
    {
      id: 'item-ID-1234',
      title: 'Meu produto',
      currency_id: 'BRL',
      picture_url: 'https://www.mercadopago.com/org-img/MP3/home/logomp3.gif',
      description: 'Descrição do Item',
      category_id: 'art',
      quantity: 1,
      unit_price: 75.76,
    },
  ],
  payer: {
    name: 'João',
    surname: 'Silva',
    email: 'user@email.com',
  },
  back_urls: {
    success: 'https://www.localhost3000',
    failure: 'http://www.failure.com',
    pending: 'http://www.pending.com',
  },
  auto_return: 'approved',
  statement_descriptor: 'Mentos Pro',
  expires: true,
  expiration_date_from: '2016-02-01T12:00:00.000-04:00',
  expiration_date_to: '2026-02-28T12:00:00.000-04:00',
}

export default preferences
