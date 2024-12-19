import { doMockApi } from "./call";

// Types
export type ChangeData = {
  value: number;
  type: "increase" | "decrease";
};

export type MetricData = {
  value: string;
  change: ChangeData;
};

export type AtGlanceData = {
  consultations: MetricData;
  orders_placed: MetricData;
  conversion: MetricData;
  total_sales_value: MetricData;
  avg_order_value: MetricData;
  commission_paid: MetricData;
};

// Mock data
const MOCK_AT_GLANCE_DATA: Record<string, AtGlanceData> = {
  today: {
    consultations: {
      value: "24",
      change: { value: 15, type: "increase" }
    },
    orders_placed: {
      value: "12", 
      change: { value: 15, type: "decrease" }
    },
    conversion: {
      value: "30%",
      change: { value: 15, type: "decrease" }
    },
    total_sales_value: {
      value: "$100",
      change: { value: 15, type: "increase" }
    },
    avg_order_value: {
      value: "$24",
      change: { value: 15, type: "increase" }
    },
    commission_paid: {
      value: "$16",
      change: { value: 15, type: "increase" }
    }
  },
  "7 days": {
    consultations: {
      value: "24",
      change: { value: 15, type: "increase" }
    },
    orders_placed: {
      value: "12",
      change: { value: 15, type: "decrease" }
    },
    conversion: {
      value: "40%", 
      change: { value: 15, type: "decrease" }
    },
    total_sales_value: {
      value: "$2,400",
      change: { value: 15, type: "increase" }
    },
    avg_order_value: {
      value: "$240",
      change: { value: 15, type: "increase" }
    },
    commission_paid: {
      value: "$240",
      change: { value: 15, type: "increase" }
    }
  },
  "1 month": {
    consultations: {
      value: "24",
      change: { value: 15, type: "increase" }
    },
    orders_placed: {
      value: "12",
      change: { value: 15, type: "decrease" }
    },
    conversion: {
      value: "40%",
      change: { value: 15, type: "decrease" }
    },
    total_sales_value: {
      value: "$2,400",
      change: { value: 15, type: "increase" }
    },
    avg_order_value: {
      value: "$240",
      change: { value: 15, type: "increase" }
    },
    commission_paid: {
      value: "$240",
      change: { value: 15, type: "increase" }
    }
  }
};

// API Functions
export const getAtGlance = (filter: string) => {
  return doMockApi<AtGlanceData>(MOCK_AT_GLANCE_DATA[filter], "GET");
};

// Order Types
type OrderProduct = {
  name: string;
  image: string;
};

type OrderData = {
  id: number;
  product: OrderProduct;
  date: string;
  timeSpent: number;
  orderValue: number;
  commission: number;
  action: string;
};

type OrdersResponse = {
  totalPages: number;
  currentPage: number;
  totalOrders: number;
  orders: OrderData[];
};

// Order Generation
const generateMockOrders = (page: number): OrdersResponse => {
  const itemsPerPage = 3;
  const totalOrders = 40;
  const totalPages = Math.ceil(totalOrders / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  
  const orders: OrderData[] = Array.from({ length: itemsPerPage }, (_, index) => {
    const id = startIndex + index + 1;
    return {
      id,
      product: {
        name: `Product ${id}`,
        image: "https://via.placeholder.com/150"
      },
      date: new Date(2024, 0, 14 + id).toISOString(),
      timeSpent: Math.floor(Math.random() * 20000) + 2000,
      orderValue: Math.floor(Math.random() * 1000) + 100,
      commission: Math.floor(Math.random() * 20) + 10,
      action: "View Chat"
    };
  });

  return {
    totalPages,
    currentPage: page,
    totalOrders,
    orders
  };
};

export const getOrders = (page: number = 1) => {
  return doMockApi<OrdersResponse>(generateMockOrders(page), "GET");
};

// Chat Types
type ChatMessage = {
  text: string;
  sender: 'user' | 'bot';
  timestamp: number;
};

type ChatResponse = {
  orderId: string;
  lastChattedOn: string;
  resolutionStatus: 'resolved' | 'pending' | 'in-progress';
  customerName: string;
  productName: string;
  messages: ChatMessage[];
};

// Chat Helper Functions
const generateRandomResponse = () => {
  const responses = [
    "I understand your concern. Let me help you with that.",
    "Thank you for reaching out. I'll look into this right away.",
    "I apologize for any inconvenience. Let me check this for you.",
    "I'll be happy to assist you with your query.",
    "Let me investigate this matter for you.",
    "I'm here to help. Could you provide more details?"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};

const getChatFromStorage = (slug: string): ChatResponse | null => {
  const stored = localStorage.getItem(`chat_${slug}`);
  return stored ? JSON.parse(stored) : null;
};

const saveChatToStorage = (chat: ChatResponse) => {
  localStorage.setItem(`chat_${chat.orderId}`, JSON.stringify(chat));
};

// Chat Generation
const generateMockChat = (slug: string): ChatResponse => {
  const storedChat = getChatFromStorage(slug);
  if (storedChat) return storedChat;

  const newChat: ChatResponse = {
    orderId: slug,
    lastChattedOn: new Date().toISOString(),
    resolutionStatus: 'pending',
    customerName: 'John Doe',
    productName: 'Product X',
    messages: [
      {
        text: 'Hello, I have a question about my order',
        sender: 'user',
        timestamp: Date.now() - 1000
      },
      {
        text: 'Hi there! How can I help you today?',
        sender: 'bot',
        timestamp: Date.now()
      }
    ]
  };

  saveChatToStorage(newChat);
  return newChat;
};

// Chat API Functions
export const getChat = (slug: string) => {
  return doMockApi<ChatResponse>(generateMockChat(slug), "GET");
};

export const continueChat = (slug: string, message: string) => {
  const currentChat = getChatFromStorage(slug) || generateMockChat(slug);
  
  currentChat.messages.push({
    text: message,
    sender: 'user',
    timestamp: Date.now()
  });

  const newBotMessage = {
    text: generateRandomResponse(),
    sender: 'bot',
    timestamp: Date.now() + 1000
  };

  currentChat.messages.push(newBotMessage);
  currentChat.lastChattedOn = new Date().toISOString();
  
  saveChatToStorage(currentChat);

  return doMockApi<ChatResponse>({
    ...currentChat,
    messages: [newBotMessage]
  }, "POST");
};

// Consultation Types
export type ConsultationsData = {
  categories: string[];
  consultations: {
    answered: number[];
    incoming: number[];
  };
  expertsOnline: number[];
};

export type PastPeriodData = {
  consultations: number[];
  orderClosed: number[];
};

// Consultation Mock Data
const MOCK_CONSULTATIONS_DATA: Record<string, ConsultationsData> = {
  today: {
    categories: ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm"],
    consultations: {
      answered: [10, 20, 10, 40, 30, 60, 70],
      incoming: [10, 20, 10, 40, 30, 60, 70],
    },
    expertsOnline: [10, 20, 10, 40, 30, 60, 70],
  },
  "7 days": {
    categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    consultations: {
      answered: [10, 20, 10, 40, 30, 60, 70],
      incoming: [10, 20, 10, 40, 30, 60, 70],
    },
    expertsOnline: [10, 20, 10, 40, 30, 60, 70],
  },
  "1 month": {
    categories: Array.from({length: 31}, (_, i) => String(i + 1)),
    consultations: {
      answered: [45, 23, 67, 89, 34, 56, 78, 91, 45, 67, 89, 120, 98, 145, 167, 134, 178, 156, 189, 167, 198, 234, 189, 245, 212, 267, 289, 245, 278, 301, 289],
      incoming: [34, 56, 78, 45, 67, 89, 123, 67, 89, 134, 156, 98, 145, 167, 189, 145, 167, 189, 212, 178, 234, 198, 245, 223, 256, 278, 245, 289, 267, 289, 312],
    },
    expertsOnline: Array.from({length: 31}, (_, i) => (i + 1) * 10),
  }
};

const MOCK_PAST_PERIOD_DATA: Record<string, PastPeriodData> = {
  today: {
    consultations: [120, 80],
    orderClosed: [100, 60]
  },
  "7 days": {
    consultations: [800, 650],
    orderClosed: [600, 450]
  },
  "1 month": {
    consultations: [3500, 2800],
    orderClosed: [2800, 2200]
  }
};

// Consultation API Functions
export const getConsultationsData = (filter: string) => {
  return doMockApi<ConsultationsData>(MOCK_CONSULTATIONS_DATA[filter], "GET");
};

export const getPastPeriodData = (filter: string) => {
  return doMockApi<PastPeriodData>(MOCK_PAST_PERIOD_DATA[filter], "GET");
};
