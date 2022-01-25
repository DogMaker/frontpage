const stub = {
  actions: [
    {
      actionName: 'Aprender conceitos Rest',
      actionContext: [
        {
          id: 'act1-001',
          description: 'Ler fundamentos Http',
          completed: true,
        },
        {
          id: 'act1-002',
          description: 'Ler fundamentos status code',
          completed: false,
        },
        {
          id: 'act1-003',
          description: 'Ler sobre idempotency',
          completed: false,
        },
        {
          id: 'act1-004',
          description: 'Entender sobre mircoserviços',
          completed: false,
        },
      ],
    },
    {
      actionName: 'Aprender sobre SQL',
      actionContext: [
        {
          id: 'act2-003',
          description: 'Principais bancos de dados',
          completed: false,
        },
        {
          id: 'act2-004',
          description: 'Diferenças entre SQL x NoSQL',
          completed: false,
        },
      ],
    },
  ],
}

export default stub
