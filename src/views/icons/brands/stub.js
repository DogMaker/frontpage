const stub = {
  actions: [
    {
      actionName: 'Aprender conceitos Rest',
      actionContext: [
        {
          id: 'act-001',
          description: 'Ler fundamentos Http',
          completed: false,
        },
        {
          id: 'act-002',
          description: 'Ler fundamentos status code',
          completed: false,
        },
        {
          id: 'act-003',
          description: 'Ler sobre idempotency',
          completed: true,
        },
        {
          id: 'act-004',
          description: 'Entender sobre mircoserviços',
          completed: false,
        },
      ],
    },
    {
      actionName: 'Aprender sobre SQL',
      actionContext: [
        {
          id: 'act-003',
          description: 'Principais bancos de dados',
          completed: true,
        },
        {
          id: 'act-004',
          description: 'Diferenças entre SQL x NoSQL',
          completed: false,
        },
      ],
    },
  ],
}

export default stub
