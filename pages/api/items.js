// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: 'Producto 1',
      price: 5000,
      img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/271/738/products/96ff0cc5-0894-4661-b22d-1ad9379928931-a2e6942257c4fef4a016299069438104-480-0.jpeg',
      desc: 'Hecho a mano',
    },
    {
      id: 2,
      title: 'Producto 2',
      price: 5000,
      img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/271/738/products/ca81ea17-581f-41f4-a0c2-56c2a822f9031-f63bc9d570bbccf03616265583848113-480-0.jpeg',
      desc: 'Hecho a mano',
    },
    {
      id: 3,
      title: 'Producto 3',
      price: 5000,
      img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/271/738/products/ea0154f5-1d5a-42b2-b7db-9ab0bcd4d8371-4f0bb0f161ca54071b16565397151884-480-0.jpeg',
      desc: 'Hecho a mano',
    },
    {
      id: 4,
      title: 'Producto 4',
      price: 5000,
      img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/271/738/products/dd694ec0-9871-43c5-ab5c-3fcda869c7371-e377c8e1ae15a6ad6016461741581348-480-0.jpeg',
      desc: 'Hecho a mano',
    },
    {
      id: 5,
      title: 'Producto 5',
      price: 5000,
      img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/271/738/products/ecfebb5c-a13e-412f-bcb6-9b85abc87acc1-7b6f6b2ec7c475ffb016345070701421-480-0.jpeg',
      desc: 'Hecho a mano',
    }
  ])
}
