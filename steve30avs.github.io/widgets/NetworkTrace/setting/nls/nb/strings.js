define({
  "taskUrl": "Oppgave-URL",
  "setTask": "Angi",
  "setTaskPopupTitle": "Angi oppgave",
  "validate": "Angi",
  "inValidGPService": "Angi gyldig geoprosesseringstjeneste.",
  "GPFeatureRecordSetLayerERR": "Angi en geoprosesseringstjeneste med inndata bare av typen «GPFeatureRecordSetLayer».",
  "invalidInputParameters": "Antall inndataparametere er enten mindre enn 1 eller flere enn 3. Angi en gyldig geoprosesseringstjeneste.",
  "projectSetting": {
    "title": "Prosjektinnstillinger",
    "note": "Merk: Prosjektinnstillinger er valgfrie, når de først er konfigurert, kan brukeren lagre prosjektet i ønskede webkartlag med nettverkets område for nedetid og inndataparametere. Brukeren kan lagre andre utdataparametere fra gruppen Utdata i kategorien Inndata/utdata.",
    "projectPolygonLayer": "Prosjektets polygonlag",
    "outputParameterName": "Navn på utdataparameter",
    "projectPointLayer": "Prosjektets punktlag",
    "selectLabel": "Velg",
    "polygonLayerHelp": "<p>Polygonlag med følgende vilkår blir vist:<br/><li>Laget må ha redigeringsfunksjonene Opprett, Slett og Oppdater</li><li>Laget må ha to felt med eksakt navn og datatype:</li><ul><li>navn (felt av typen streng)</li><li>global-ID (felt av typen global ID )</li></ul><p/>",
    "outputParameterHelp": "<p>Polygonlag som utdata fra oppgave-URL-en vises<p/>",
    "pointLayerHelp": "<p>Punktlag med følgende vilkår blir vist: <br/><li>Laget må ha redigeringsfunksjonene Opprett, Slett og Oppdater</li><li>Laget må ha to felt med eksakt navn og datatype:</li><ul><li>inndatatype (felt av typen streng)</li><li>prosjekt-ID (felt av typen GUID )</li></ul><p/>"
  },
  "inputOutputTab": {
    "title": "Inndata/utdata",
    "inputSettingsLabel": "Innstillinger for inndata",
    "outputSettingsLabel": "Innstillinger for utdata",
    "inputLabel": "Etikett",
    "inputTooltip": "Verktøytips",
    "symbol": "Symbol",
    "typeText": "Type",
    "outputParametersText": "Parametere for utdata",
    "saveToLayerText": "Lagre i lag (valgfritt)",
    "skipText": "Kan hoppes over",
    "visibilityText": "Synlig",
    "exportToCsvText": "Eksporter til CSV",
    "exportToCsvDisplayText": "CSV",
    "settitngstext": "Innstillinger",
    "addFieldTitle": "Legg til felt",
    "enterDisplayText": "Skriv inn visningstekst",
    "setScale": "Angi målestokk",
    "outputDisplay": "Vis tekst",
    "saveToLayerHelp": "<p>Lag med følgende vilkår blir vist:<br/><li>Laget må ha redigeringsfunksjonene Opprett, Slett og Oppdater</li><li>Laget må ha to felt med eksakt navn og datatype:</li><ul><li>parameternavn (felt av typen streng)</li><li>prosjekt-ID (felt av typen GUID )</li></ul><p/>"
  },
  "summaryTab": {
    "title": "Sammendrag",
    "summaryFieldsetText": "Oversikt over innstillinger",
    "inputOutput": "Inndata/utdata",
    "field": "Felter",
    "operator": "Operatører",
    "inputOperatorCountOption": "Antall",
    "outputOperatorCountOption": "Antall",
    "outputOperatorSkipCountOption": "Hopp over antall",
    "fieldOperatorSumOption": "Sum",
    "fieldOperatorMinOption": "Min",
    "fieldOperatorMaxOption": "Maks",
    "fieldOperatorMeanOption": "Gjennomsnitt",
    "expressionAddButtonText": "Legg til",
    "expressionVerifyButtonText": "Bekreft",
    "summaryEditorText": "Tekstsammendrag"
  },
  "generalSettings": {
    "title": "Generelle innstillinger",
    "displayTextForButtonLegend": "Vis tekst for Kjør-knappen",
    "displayTextforButtonDefaultValue": "Kjør",
    "displayTextForButton": "Vis tekst",
    "autoZoomAfterTrace": "Zoomalternativer",
    "zoomText": "Automatisk zoom etter sporing"
  },
  "validationErrorMessage": {
    "webMapError": "Ingen lag er tilgjengelige i webkartet. Velg et gyldig webkart.",
    "inputTypeFlagGreaterThanError": "Inndata av typen flagg kan ikke være mer enn én.",
    "inputTypeFlagLessThanError": "Minst én inndata av typen flagg kreves.",
    "inputTypeBarrierErr": "Inndata av typen hindring kan ikke være mer enn én.",
    "inputTypeSkipErr": "Inndata av typen hopp over kan ikke være mer enn én.",
    "displayTextForButtonError": "Visningstekst for Kjør-knappen må være utfylt.",
    "UnableToLoadGeoprocessError": "Kan ikke laste geoprosesseringstjeneste.",
    "invalidSummaryExpression": "Ugyldig uttrykk.",
    "validSummaryExpression": "Vellykket!",
    "invalidProjectSettings": "Ugyldige prosjektinnstillinger.<br/> Velg en gyldig verdi i '${projectSetting}'."
  },
  "hintText": {
    "labelTextHint": "Tips: Opprett visningsetikett til resultatpanelet for utdataparameteren.",
    "displayTextHint": "Tips: Dette vises i detaljpanelet for denne utdataparameteren.",
    "inputTextHint": "Tips: Bygg uttrykket ovenfor ved å velge inndata, utdata og feltnavn.",
    "expressionHint": "Tips: Velg elementer og klikk på Legg til for å bygge uttrykk."
  }
});