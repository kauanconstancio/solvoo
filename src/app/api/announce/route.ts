import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validação básica
    if (!body.title || !body.description || !body.category || !body.price) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    const newAnnounce = {
      id: Date.now().toString(),
      title: body.title,
      description: body.description,
      category: body.category,
      estado: body.estado,
      cidade: body.cidade,
      price: parseFloat(body.price),
      createdAt: new Date().toISOString(),
      userId: body.userId || "1", // TODO: Pegar do contexto de autenticação
    };

    // TODO: Salvar no banco de dados
    // Por enquanto, apenas retorna o anúncio criado
    return NextResponse.json(newAnnounce, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao criar anúncio" },
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
    const announcements = [];

    if (userId) {
      // Filtrar por usuário se fornecido
      // announcements = await getAnnouncementsByUserId(userId);
    }

    return NextResponse.json(announcements, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar anúncios" },
      { status: 500 }
    );
  }
}

