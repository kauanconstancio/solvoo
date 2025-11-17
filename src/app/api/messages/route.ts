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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validação básica
    if (!body.content || !body.conversationId || !body.senderId) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    const newMessage = {
      id: Date.now().toString(),
      conversationId: body.conversationId,
      senderId: body.senderId,
      receiverId: body.receiverId,
      content: body.content,
      timestamp: new Date().toISOString(),
      read: false,
    };

    // TODO: Salvar no banco de dados
    // TODO: Enviar notificação em tempo real (WebSocket, etc.)

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem" },
      { status: 500 }
    );
  }
}
