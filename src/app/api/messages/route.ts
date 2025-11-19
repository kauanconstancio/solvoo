import { NextRequest, NextResponse } from "next/server";

type Message = {
  id: string;
  conversationId: string;
  senderId: string;
  receiverId?: string;
  content: string;
  timestamp: string;
  read: boolean;
};

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const conversationId = searchParams.get("conversationId");
    const userId = searchParams.get("userId");

    // TODO: Buscar mensagens do banco de dados
    // Por enquanto, retorna array vazio
    const messages: Message[] = [];

    if (conversationId) {
      // Buscar mensagens de uma conversa específica
      // messages = await getMessagesByConversationId(conversationId);
    } else if (userId) {
      // Buscar todas as conversas do usuário
      // messages = await getConversationsByUserId(userId);
    }

    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar mensagens:", error);
    return NextResponse.json(
      { error: "Erro ao buscar mensagens" },
      { status: 500 }
    );
  }
}

function validateMessageData(body: any): { isValid: boolean; error?: string } {
  if (!body.content || typeof body.content !== "string") {
    return { isValid: false, error: "Conteúdo da mensagem é obrigatório e deve ser uma string" };
  }

  const trimmedContent = body.content.trim();
  if (trimmedContent.length === 0) {
    return { isValid: false, error: "Conteúdo da mensagem não pode estar vazio" };
  }
  if (trimmedContent.length > 1000) {
    return { isValid: false, error: "Mensagem deve ter no máximo 1000 caracteres" };
  }

  if (!body.conversationId || typeof body.conversationId !== "string") {
    return { isValid: false, error: "ID da conversa é obrigatório e deve ser uma string" };
  }

  if (!body.senderId || typeof body.senderId !== "string") {
    return { isValid: false, error: "ID do remetente é obrigatório e deve ser uma string" };
  }

  if (body.receiverId && typeof body.receiverId !== "string") {
    return { isValid: false, error: "ID do destinatário deve ser uma string" };
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

    const validation = validateMessageData(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      conversationId: body.conversationId.trim(),
      senderId: body.senderId.trim(),
      receiverId: body.receiverId?.trim() || undefined,
      content: body.content.trim(),
      timestamp: new Date().toISOString(),
      read: false,
    };

    // TODO: Salvar no banco de dados
    // TODO: Enviar notificação em tempo real (WebSocket, etc.)

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
    console.error("Erro ao enviar mensagem:", {
      message: errorMessage,
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
    });
    return NextResponse.json(
      { error: "Erro interno do servidor ao enviar mensagem" },
      { status: 500 }
    );
  }
}
