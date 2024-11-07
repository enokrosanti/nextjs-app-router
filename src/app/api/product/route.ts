import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Sepatu Run 72",
    price: 1100000,
    image: "https://www.adidas.co.id/media/catalog/product/cache/da73f7d26ad11f1980ada40c1f6e78fa/i/h/ih8602_2_footwear_photography_side20lateral20view_grey.jpg",
  },
  {
    id: 2,
    title: "Sepatu SL 72 OG",
    price: 1600000,
    image: "https://www.adidas.co.id/media/catalog/product/cache/da73f7d26ad11f1980ada40c1f6e78fa/j/h/jh7394_2_footwear_photography_side20lateral20view_grey.jpg",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({ status: 200, message: "Success", data: detailProduct });
    } else {
      return NextResponse.json({ status: 404, message: "Not Found", data: {} });
    }
  }
  return NextResponse.json({ status: 200, message: "Success", data });
}
