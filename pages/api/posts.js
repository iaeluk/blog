import { GoogleSpreadsheet } from 'google-spreadsheet'

export default async function(req, res) {

  const doc = new GoogleSpreadsheet('1X5sqIVtub0P396pkZyG2LEI4GE-uw9MVvoP4J920QAU');

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  });

  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  const rows =  await sheet.getRows()

  const posts = rows.map(({titulo, postagem, data, img}) =>{
    return {
      titulo,
      postagem,
      data,
      img
    }
  })

  res.send({
      title: doc.title,
      posts
  })
}
