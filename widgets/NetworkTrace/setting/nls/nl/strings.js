define({
  "taskUrl": "Taak-URL",
  "setTask": "Instellen",
  "setTaskPopupTitle": "Taak instellen",
  "validate": "Instellen",
  "inValidGPService": "Voer geldige geoprocessing service in.",
  "GPFeatureRecordSetLayerERR": "Voer alleen een geoprocessing service in met inputs van het type 'GPFeatureRecordSetLayer'.",
  "invalidInputParameters": "Het aantal inputparameters is minder dan 1 of meer dan 3. Voer een geldige geoprocessing service in.",
  "projectSetting": {
    "title": "Projectinstellingen",
    "note": "Opmerking: Projectinstellingen zijn optioneel, zodra ze zijn ingesteld kan de gebruiker een project opslaan in de gewenste webmaplagen met netwerkuitvalgebied en inputparameters. Gebruiker kan outputparameters uit de \"Output\"-groep opslaan op het tabblad \"Input/output\".",
    "projectPolygonLayer": "Project-polygoonlaag",
    "outputParameterName": "Naam outputparameter",
    "projectPointLayer": "Project-puntlaag",
    "selectLabel": "Selecteren",
    "polygonLayerHelp": "<p>Polygoonla(a)g(en) die voldoen aan de volgende voorwaarden zullen worden weergegeven:<br/><li>Laag moet bewerkingsfuncties hebben, namelijk \"Creëren\", \"Verwijderen\" en \"Bijwerken\"</li><li>Laag moet 2 velden hebben met exacte naam en gegevenstype:</li><ul><li>naam (String-veldtype)</li><li>globalid (GlobalID-veldtype)</li></ul><p/>",
    "outputParameterHelp": "<p>Output-polygoonla(a)g(en) uit de taak-URL worden weergegeven<p/>",
    "pointLayerHelp": "<p>Puntla(a)g(en) die voldoen aan de volgende voorwaarden zullen worden weergegeven:<br/><li>Laag moet bewerkingsfuncties hebben, namelijk \"Creëren\", \"Verwijderen\" en \"Bijwerken\"</li><li>Laag moet 2 velden hebben met exacte naam en gegevenstype:</li><ul><li>inputtype (String-veldtype)</li><li>projectid (GUID-veldtype)</li></ul><p/>"
  },
  "inputOutputTab": {
    "title": "Input/output",
    "inputSettingsLabel": "Inputinstellingen",
    "outputSettingsLabel": "Outputinstellingen",
    "inputLabel": "Label",
    "inputTooltip": "Knopinfo",
    "symbol": "Symbool",
    "typeText": "Type",
    "outputParametersText": "Outputparameters",
    "saveToLayerText": "Opslaan in laag (optioneel)",
    "skipText": "Kan worden overgeslagen",
    "visibilityText": "Zichtbaar",
    "exportToCsvText": "Export to CSV",
    "exportToCsvDisplayText": "CSV",
    "settitngstext": "Instellingen",
    "addFieldTitle": "Veld toevoegen",
    "enterDisplayText": "Displaytekst invoeren",
    "setScale": "Schaal instellen",
    "outputDisplay": "Displaytekst",
    "saveToLayerHelp": "<p>Laag die voldoet aan de volgende voorwaarden zal worden weergegeven:<br/><li>Laag moet bewerkingsfuncties hebben, namelijk \"Creëren\", \"Verwijderen\" en \"Bijwerken\"</li><li>Laag moet twee velden hebben met naam en gegevenstype:</li><ul><li>parameternaam (String-veldtype)</li><li>projectid (Guid-veldtype)</li></ul><p/>"
  },
  "summaryTab": {
    "title": "Samenvatting",
    "summaryFieldsetText": "Samenvattingsinstellingen",
    "inputOutput": "Inputs/outputs",
    "field": "Velden",
    "operator": "Operatoren",
    "inputOperatorCountOption": "Aantal",
    "outputOperatorCountOption": "Aantal",
    "outputOperatorSkipCountOption": "TellingOverslaan",
    "fieldOperatorSumOption": "Som",
    "fieldOperatorMinOption": "Min",
    "fieldOperatorMaxOption": "Max",
    "fieldOperatorMeanOption": "Mediaan",
    "expressionAddButtonText": "Toevoegen",
    "expressionVerifyButtonText": "Verifiëren",
    "summaryEditorText": "Samenvattingstekst"
  },
  "generalSettings": {
    "title": "Algemene instellingen",
    "displayTextForButtonLegend": "Displaytekst voor 'Uitvoeren'-knop",
    "displayTextforButtonDefaultValue": "Uitvoeren",
    "displayTextForButton": "Displaytekst",
    "autoZoomAfterTrace": "Zoomopties",
    "zoomText": "Autozoom na tracering"
  },
  "validationErrorMessage": {
    "webMapError": "Geen lagen beschikbaar in de webmap. Selecteer een geldige webmap.",
    "inputTypeFlagGreaterThanError": "Input van typevlag kan niet meer dan één zijn.",
    "inputTypeFlagLessThanError": "Ten minste één input van typevlag vereist.",
    "inputTypeBarrierErr": "Input van typebarrière kan niet meer dan één zijn.",
    "inputTypeSkipErr": "Input van type overslaan kan niet meer dan één zijn.",
    "displayTextForButtonError": "Displaytekst voor 'Uitvoeren'-knop kan niet leeg zijn.",
    "UnableToLoadGeoprocessError": "Niet in staat geoprocessing service te laden.",
    "invalidSummaryExpression": "Ongeldige expressie.",
    "validSummaryExpression": "Succes!",
    "invalidProjectSettings": "Ongeldige projectinstellingen.<br/> Selecteer een geldige waarde in '${projectSetting}'."
  },
  "hintText": {
    "labelTextHint": "Hint: Verschaf een displaylabel voor resultaatdeelvenster van outputparameter.",
    "displayTextHint": "Hint: Dit zal worden weergegeven in het detailsdeelvenster voor deze outputparameter.",
    "inputTextHint": "Hint: Stel uw expressie hierboven samen door input, output en veldnamen te kiezen.",
    "expressionHint": "Hint: Selecteer items en klik op Toevoegen om een expressie samen te stellen."
  }
});