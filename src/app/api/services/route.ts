import { NextRequest, NextResponse } from "next/server";
import { mockServices } from "@/lib/data";
import { Service } from "@/lib/types";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("category");
    const estado = searchParams.get("estado");

    let filteredServices = [...mockServices];

    if (category) {
      filteredServices = filteredServices.filter(
        (service) => service.category === category
      );
    }

    if (estado && estado !== "todos") {
      filteredServices = filteredServices.filter(
        (service) => service.estado === estado
      );
    }

    return NextResponse.json(filteredServices, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar serviços" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newService: Service = {
      id: Date.now().toString(),
      title: body.title,
      description: body.description,
      category: body.category,
      providerName: body.providerName || "Usuário",
      providerAvatar: body.providerAvatar,
      rating: 0,
      price: parseFloat(body.price),
      city: body.city,
      estado: body.estado,
      verified: false,
    };

    // TODO: Salvar no banco de dados
    // Por enquanto, apenas retorna o serviço criado
    return NextResponse.json(newService, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao criar serviço" },
      { status: 500 }
    );
  }
}

