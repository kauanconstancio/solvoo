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
    console.error("Erro ao buscar serviços:", error);
    return NextResponse.json(
      { error: "Erro ao buscar serviços" },
      { status: 500 }
    );
  }
}

function validateServiceData(body: any): { isValid: boolean; error?: string } {
  if (!body.title || typeof body.title !== "string" || body.title.trim().length < 5) {
    return { isValid: false, error: "Título é obrigatório e deve ter no mínimo 5 caracteres" };
  }
  if (body.title.trim().length > 100) {
    return { isValid: false, error: "Título deve ter no máximo 100 caracteres" };
  }

  if (!body.description || typeof body.description !== "string" || body.description.trim().length < 20) {
    return { isValid: false, error: "Descrição é obrigatória e deve ter no mínimo 20 caracteres" };
  }
  if (body.description.trim().length > 500) {
    return { isValid: false, error: "Descrição deve ter no máximo 500 caracteres" };
  }

  if (!body.category || typeof body.category !== "string") {
    return { isValid: false, error: "Categoria é obrigatória e deve ser uma string" };
  }

  if (body.price === undefined || body.price === null || body.price === "") {
    return { isValid: false, error: "Preço é obrigatório" };
  }

  const priceNum = parseFloat(body.price);
  if (isNaN(priceNum)) {
    return { isValid: false, error: "Preço deve ser um número válido" };
  }
  if (priceNum <= 0) {
    return { isValid: false, error: "Preço deve ser maior que zero" };
  }
  if (priceNum > 1000000) {
    return { isValid: false, error: "Preço não pode ser maior que R$ 1.000.000,00" };
  }

  if (body.city && (typeof body.city !== "string" || body.city.trim().length < 2)) {
    return { isValid: false, error: "Cidade deve ser uma string com no mínimo 2 caracteres" };
  }

  if (body.estado && typeof body.estado !== "string") {
    return { isValid: false, error: "Estado deve ser uma string" };
  }

  return { isValid: true };
}

export async function POST(request: NextRequest) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error("Erro ao fazer parse do JSON:", parseError);
      return NextResponse.json(
        { error: "Formato de dados inválido. JSON malformado." },
        { status: 400 }
      );
    }

    const validation = validateServiceData(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const newService: Service = {
      id: Date.now().toString(),
      title: body.title.trim(),
      description: body.description.trim(),
      category: body.category.trim(),
      providerName: (body.providerName || "Usuário").trim(),
      providerAvatar: body.providerAvatar?.trim() || undefined,
      rating: 0,
      price: parseFloat(body.price),
      city: body.city?.trim() || "",
      estado: body.estado?.trim() || "",
      verified: false,
    };

    // TODO: Salvar no banco de dados
    // Por enquanto, apenas retorna o serviço criado
    return NextResponse.json(newService, { status: 201 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
    console.error("Erro ao criar serviço:", {
      message: errorMessage,
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
    });
    return NextResponse.json(
      { error: "Erro interno do servidor ao criar serviço" },
      { status: 500 }
    );
  }
}
