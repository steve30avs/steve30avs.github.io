define({
  "taskUrl": "URL de Tarefa",
  "setTask": "Definir",
  "setTaskPopupTitle": "Definir Tarefa",
  "validate": "Definir",
  "inValidGPService": "Introduza um serviço de geoprocessamento válido.",
  "GPFeatureRecordSetLayerERR": "Introduza um serviço de geoprocessamento apenas com entradas do tipo 'GPFeatureRecordSetLayer'.",
  "invalidInputParameters": "O número de parâmetros de entrada é inferior a 1 ou superior a 3. Introduza um serviço de geoprocessamento válido.",
  "projectSetting": {
    "title": "Definições do Projeto",
    "note": "Nota: as Definições do Projeto são opcionais. Depois de configuradas, o utilizador pode armazenar o projeto nas camadas pretendidas do mapa web com a área de falha de rede e parâmetros de entrada. O utilizador pode guardar outros parâmetros de saída do grupo \"Saída\" no separador \"Entrada/Saída\".",
    "projectPolygonLayer": "Camada de polígonos do projeto",
    "outputParameterName": "Nome do parâmetro de saída",
    "projectPointLayer": "Camada de pontos do projeto",
    "selectLabel": "Seleccionar",
    "polygonLayerHelp": "<p>Será(ão) apresentada(s) a(s) camada(s) de polígonos com as seguintes condições:<br/><li>A camada deve ter capacidades de edição, nomeadamente \"Criar\", \"Eliminar\" e \"Atualizar\"</li><li>A camada deve ter 2 campos com o nome e tipo de dados exatos:</li><ul><li>nome (tipo de campo String)</li><li>globalid (tipo de campo GlobalID)</li></ul><p/>",
    "outputParameterHelp": "<p>Será(ão) apresentada(s) a(s) camada(s) de polígonos de saída do URL da tarefa<p/>",
    "pointLayerHelp": "<p>Será(ão) apresentada(s) a(s) camada(s) de pontos com as seguintes condições:<br/><li>A camada deve ter capacidades de edição, nomeadamente \"Criar\", \"Eliminar\" e \"Atualizar\"</li><li>A camada deve ter 2 campos com o nome e tipo de dados exatos:</li><ul><li>inputtype (tipo de campo String)</li><li>projectid (tipo de campo GUID)</li></ul><p/>"
  },
  "inputOutputTab": {
    "title": "Entrada/Saída",
    "inputSettingsLabel": "Definições de Entrada",
    "outputSettingsLabel": "Definições de Saída",
    "inputLabel": "Rótulo",
    "inputTooltip": "Conselho de Utilização",
    "symbol": "Símbolo",
    "typeText": "Tipo",
    "outputParametersText": "Parâmetros de Saída",
    "saveToLayerText": "Guardar na Camada (Opcional)",
    "skipText": "Pode ser ignorado",
    "visibilityText": "Visível",
    "exportToCsvText": "Exportar para CSV",
    "exportToCsvDisplayText": "CSV",
    "settitngstext": "Configurações",
    "addFieldTitle": "Adicionar Campo",
    "enterDisplayText": "Introduzir texto de apresentação",
    "setScale": "Definir Escala",
    "outputDisplay": "Texto de apresentação",
    "saveToLayerHelp": "<p>Será apresentada a camada com as seguintes condições:<br/><li>A camada deve ter capacidades de edição, nomeadamente \"Criar\", \"Eliminar\" e \"Atualizar\"</li><li>A camada deve ter dois campos com o nome e tipo de dados:</li><ul><li>parametername (tipo de campo String)</li><li>projectid (tipo de campo GUID)</li></ul><p/>"
  },
  "summaryTab": {
    "title": "Resumo",
    "summaryFieldsetText": "Definições de resumo",
    "inputOutput": "Entradas/Saídas",
    "field": "Campos",
    "operator": "Operdadores",
    "inputOperatorCountOption": "Contagem",
    "outputOperatorCountOption": "Contagem",
    "outputOperatorSkipCountOption": "Ignorar Contagem",
    "fieldOperatorSumOption": "Soma",
    "fieldOperatorMinOption": "Mín.",
    "fieldOperatorMaxOption": "Máx.",
    "fieldOperatorMeanOption": "Média",
    "expressionAddButtonText": "Adicionar",
    "expressionVerifyButtonText": "Verificar",
    "summaryEditorText": "Texto de resumo"
  },
  "generalSettings": {
    "title": "Configurações Gerais",
    "displayTextForButtonLegend": "Texto de apresentação para o botão \"Executar\"",
    "displayTextforButtonDefaultValue": "Executar",
    "displayTextForButton": "Texto de apresentação",
    "autoZoomAfterTrace": "Opções de zoom",
    "zoomText": "Zoom automático após rastreio"
  },
  "validationErrorMessage": {
    "webMapError": "Nenhuma camada disponível no mapa web. Selecione um mapa web válido.",
    "inputTypeFlagGreaterThanError": "A entrada do sinalizador de tipo não pode ser superior a uma.",
    "inputTypeFlagLessThanError": "É necessário pelo menos uma entrada do sinalizador de tipo.",
    "inputTypeBarrierErr": "A entrada da barreira de tipo não pode ser superior a uma.",
    "inputTypeSkipErr": "A entrada do salto de tipo não pode ser superior a uma.",
    "displayTextForButtonError": "Texto de apresentação para o botão \"Executar\" não pode estar vazio.",
    "UnableToLoadGeoprocessError": "Não foi possível carregar serviço de geoprocessamento.",
    "invalidSummaryExpression": "Expressão inválida.",
    "validSummaryExpression": "Bem-sucedido!",
    "invalidProjectSettings": "Definições do Projeto Inválidas.<br/> Selecione um valor válido em '${projectSetting}'."
  },
  "hintText": {
    "labelTextHint": "Dica: forneça um rótulo de apresentação para o painel de resultados do parâmetro de saída.",
    "displayTextHint": "Dica: isto será apresentado no painel de detalhes para este parâmetro de saída.",
    "inputTextHint": "Dica: crie a sua expressão em cima, selecionando os nomes de entrada, saída e campo.",
    "expressionHint": "Dica: selecione os itens e clique em adicionar para criar a expressão."
  }
});