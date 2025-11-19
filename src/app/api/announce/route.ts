import { NextRequest, NextResponse } from "next/server";

type Announcement = {
  id: string;
  title: string;
  description: string;
  category: string;
  estado?: string;
  cidade?: string;
  price: number;
  createdAt: string;
  userId: string;
};

function validateAnnouncementData(body: any): { isValid: boolean; error?: string } {
  // Validar campos obrigatórios
  if (!body.title || typeof body.title !== "string") {
    return { isValid: false, error: "Título é obrigatório e deve ser uma string" };
  }

  if (!body.description || typeof body.description !== "string") {
    return { isValid: false, error: "Descrição é obrigatória e deve ser uma string" };
  }

  if (!body.category || typeof body.category !== "string") {
    return { isValid: false, error: "Categoria é obrigatória e deve ser uma string" };
  }

  if (body.price === undefined || body.price === null || body.price === "") {
    return { isValid: false, error: "Preço é obrigatório" };
  }

  // Validar tamanhos
  const trimmedTitle = body.title.trim();
  if (trimmedTitle.length < 5) {
    return { isValid: false, error: "Título deve ter no mínimo 5 caracteres" };
  }
  if (trimmedTitle.length > 60) {
    return { isValid: false, error: "Título deve ter no máximo 60 caracteres" };
  }

  const trimmedDescription = body.description.trim();
  if (trimmedDescription.length < 20) {
    return { isValid: false, error: "Descrição deve ter no mínimo 20 caracteres" };
  }
  if (trimmedDescription.length > 200) {
    return { isValid: false, error: "Descrição deve ter no máximo 200 caracteres" };
  }

  // Validar preço
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

  // Validar cidade se fornecida
  if (body.cidade) {
    if (typeof body.cidade !== "string") {
      return { isValid: false, error: "Cidade deve ser uma string" };
    }
    const trimmedCidade = body.cidade.trim();
    if (trimmedCidade.length < 2) {
      return { isValid: false, error: "Cidade deve ter no mínimo 2 caracteres" };
    }
    if (trimmedCidade.length > 50) {
      return { isValid: false, error: "Cidade deve ter no máximo 50 caracteres" };
    }
  }

  // Validar estado se fornecido
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

    // Validação robusta
    const validation = validateAnnouncementData(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const newAnnounce: Announcement = {
      id: Date.now().toString(),
      title: body.title.trim(),
      description: body.description.trim(),
      category: body.category.trim(),
      estado: body.estado?.trim() || undefined,
      cidade: body.cidade?.trim() || undefined,
      price: parseFloat(body.price),
      createdAt: new Date().toISOString(),
      userId: body.userId || "1", // TODO: Pegar do contexto de autenticação
    };

    // TODO: Salvar no banco de dados
    // Por enquanto, apenas retorna o anúncio criado
    return NextResponse.json(newAnnounce, { status: 201 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
    console.error("Erro ao criar anúncio:", {
      message: errorMessage,
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
    });
    return NextResponse.json(
      { error: "Erro interno do servidor ao criar anúncio" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get("userId");

    // TODO: Buscar anúncios do banco de dados
    // Por enquanto, retorna array vazio
    const announcements: Announcement[] = [];

    if (userId) {
      // Filtrar por usuário se fornecido
      // announcements = await getAnnouncementsByUserId(userId);
    }

    return NextResponse.json(announcements, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar anúncios:", error);
    return NextResponse.json(
      { error: "Erro ao buscar anúncios" },
      { status: 500 }
    );
  }
}
