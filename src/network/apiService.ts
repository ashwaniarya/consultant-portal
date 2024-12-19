import { doMockApi } from "./call";
export type AtGlanceData = {
  consultations: {
    value: string;
    change: {
      value: number;
      type: "increase" | "decrease";
    };
  };
  orders_placed: {
    value: string;
    change: {
      value: number;
      type: "increase" | "decrease";
    };
  };
  conversion: {
    value: string;
    change: {
      value: number;
      type: "increase" | "decrease";
    };
  };
  total_sales_value: {
    value: string;
    change: {
      value: number;
      type: "increase" | "decrease";
    };
  };
  avg_order_value: {
    value: string;
    change: {
      value: number;
      type: "increase" | "decrease";
    };
  };
  commission_paid: {
    value: string;
    change: {
      value: number;
      type: "increase" | "decrease";
    };
  };
};

const MOCK_AT_GLANCE_DATA: Record<string, AtGlanceData> = {
  today: {
    consultations: {
      value: "24",
      change: {
        value: 15,
        type: "increase",
      },
    },
    orders_placed: {
      value: "12",
      change: {
        value: 15,
        type: "decrease",
      },
    },
    conversion: {
      value: "$30",
      change: {
        value: 15,
        type: "decrease",
      },
    },
    total_sales_value: {
      value: "$100",
      change: {
        value: 15,
        type: "increase",
      },
    },
    avg_order_value: {
      value: "$24",
      change: {
        value: 15,
        type: "increase",
      },
    },
    commission_paid: {
      value: "$16",
      change: {
        value: 15,
        type: "increase",
      },
    },
  },
  "1 month": {
    consultations: {
      value: "24",
      change: {
        value: 15,
        type: "increase",
      },
    },
  orders_placed: {
    value: "12",
    change: {
      value: 15,
      type: "decrease",
    },
  },
  conversion: {
    value: "$50",
    change: {
      value: 15,
      type: "decrease",
    },
  },
  total_sales_value: {
    value: "$2,400",
    change: {
      value: 15,
      type: "increase",
    },
  },
    avg_order_value: {
      value: "$240",
      change: {
        value: 15,
        type: "increase",
      },
    },
    commission_paid: {
      value: "$240",
      change: {
        value: 15,
        type: "increase",
      },
    },
  },
};

export const getAtGlance = (filter: string) => {
  console.log(MOCK_AT_GLANCE_DATA[filter]);
  return doMockApi<AtGlanceData>(MOCK_AT_GLANCE_DATA[filter], "GET");
};




type OrderData = {
  id: number;
  product: {
    name: string;
    image: string;
  };
  date: string;
  timeSpent: number;
  orderValue: number;
  commission: number;
  action: string;
}

type OrdersResponse = {
  totalPages: number;
  currentPage: number;
  totalOrders: number;
  orders: OrderData[];
}

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
