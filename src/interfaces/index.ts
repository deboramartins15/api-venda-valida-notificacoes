export type vendaValidaRequest = {
  businessAPIUri?: string;
  businessId?: string;
  ticketId?: string;
  businessOrderId: string;
  customerDocument?: string;
  customerMobilePhone?: string;
  resultCode?: string;
  resultDetail?: string;
  suggestionCode?: string;
  suggestionProceed?: string;
  finalScore?: number;
  questions?: [
    {
      label?: string;
      text?: string
      answer?: string;
      isRegard?: boolean;
      score?: number;
      customerAnswer?:string;
      isCorrect?: boolean;
    }
  ];
  customFields?: {
    orderId?: string;
    sequence?: string;
    orderValue?: string;
    createdDate?: string;
    buyerName?: string;
    buyerFirstName?: string;
    email?: string;
    storeName?: string;
    paymentLink?: string;
    sellerName?: string;
    customerId?: string;
    noveVendedor?: string;
    productId?: string;
    items?: [
      {
        id?: string;
        name?: string;
        qty?: number;
        amount?: string;
        image?: string;
      }
    ];
    firstItem?: string;
    barCode?: string;
    address?: string;
    bitLy?: string;
  };
  flowIndex?: number;
  clicked?: boolean;
};
