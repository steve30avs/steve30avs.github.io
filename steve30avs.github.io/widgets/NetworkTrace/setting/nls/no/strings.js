﻿define({
  root: ({
    taskUrl: "Task URL",
    setTask: "Set",
    setTaskPopupTitle: "Set Task",
    validate: "Set",
    inValidGPService: "Please enter valid geoprocessing service.",
    GPFeatureRecordSetLayerERR: "Please enter a geoprocessing service with inputs of type 'GPFeatureRecordSetLayer' only.",
    invalidInputParameters: "Number of input parameters is either less than 1 or more than 3. Please enter a valid geoprocessing service.",
    //project setting tab
    projectSetting: {
      title: "Project Settings",
      note:"Note: Project Settings are optional, once configured user can store project in the desired webmap layers with network outage area and input parameters. User can store other output parameters from “Output” group in “Input/Output” tab.",
      projectPolygonLayer: "Project polygon layer",
      outputParameterName: "Output parameter name",
      projectPointLayer: "Project point layer",
      selectLabel : "Select",
      polygonLayerHelp: "<p>Polygon layer(s) with following conditions will be shown:<br/><li>Layer must have editing capabilities namely “Create”, “Delete” and “Update”</li><li>Layer must have 2 fields with exact name and data type:</li><ul><li>name (String type field)</li><li>globalid (GlobalID type field)</li></ul><p/>",
      outputParameterHelp: "<p>Output polygon layer(s) from the task URL will be shown<p/>",
      pointLayerHelp: "<p>Point layer(s) with following conditions will be shown: <br/><li>Layer must have editing capabilities namely “Create”, “Delete” and “Update”</li><li>Layer must have 2 fields with exact name and data type:</li><ul><li>inputtype (String type field)</li><li>projectid (GUID type field)</li></ul><p/>",
    },
    inputOutputTab: {
      title: "Input/Output",
      inputSettingsLabel: "Input Settings",
      outputSettingsLabel: "Output Settings",
      inputLabel: "Label",
      inputTooltip: "Tooltip",
      symbol: "Symbol",
      typeText: "Type",
      outputParametersText: "Output Parameters",
      saveToLayerText: "Save to Layer (Optional)",
      skipText: "Skippable",
      visibilityText: "Visible",
      exportToCsvText: "Export to CSV",
      exportToCsvDisplayText: "CSV",
      settitngstext: "Settings",
      addFieldTitle: "Add Field",
      enterDisplayText: "Enter display text",
      setScale: "Set Scale",
      outputDisplay: "Display text",
      saveToLayerHelp: "<p>Layer with following conditions will be shown:<br/><li>Layer must have editing capabilities namely “Create”, “Delete” and “Update”</li><li>Layer must have two fields with the name and data type:</li><ul><li>parametername (String type field)</li><li>projectid (Guid type field)</li></ul><p/>",
    },
    // Summary expression builder
    summaryTab: {
      title: "Summary",
      summaryFieldsetText: "Summary settings",
      inputOutput: "Inputs/Outputs",
      field: "Fields",
      operator: "Operators",
      inputOperatorCountOption: "Count",
      outputOperatorCountOption: "Count",
      outputOperatorSkipCountOption: "SkipCount",
      fieldOperatorSumOption: "Sum",
      fieldOperatorMinOption: "Min",
      fieldOperatorMaxOption: "Max",
      fieldOperatorMeanOption: "Mean",
      expressionAddButtonText: "Add",
      expressionVerifyButtonText: "Verify",
      summaryEditorText: "Summary text"
    },
    // Other details
    generalSettings: {
      title: "General Settings",
      displayTextForButtonLegend: "Display text for 'Run' button",
      displayTextforButtonDefaultValue: "Run",
      displayTextForButton: "Display text",
      autoZoomAfterTrace: "Zoom options",
      zoomText: "Auto zoom after trace"
    },
    // Validation messages
    validationErrorMessage: {
      webMapError: "No layers available in the webmap. Please select a valid webmap.",
      inputTypeFlagGreaterThanError: "Input of type flag cannot be more than one.",
      inputTypeFlagLessThanError: "At least one input of type flag is required.",
      inputTypeBarrierErr: "Input of type barrier cannot be more than one.",
      inputTypeSkipErr: "Input of type skip cannot be more than one.",
      displayTextForButtonError: "Display text for 'Run' button cannot be blank.",
      UnableToLoadGeoprocessError: "Unable to load geoprocessing service.",
      invalidSummaryExpression: "Invalid expression.",
      validSummaryExpression: "Success !",
      invalidProjectSettings: "Invalid Project Settings.<br/> Please select valid value in '${projectSetting}'."
    },
    // Hint text
    hintText: {
      labelTextHint: "Hint: Provide display label for result panel of output parameter.",
      displayTextHint: "Hint: This will be displayed in the details panel for this output parameter.",
      inputTextHint: "Hint: Build your expression above by selecting input, output, and field names.",
      expressionHint: "Hint: Select items and click add to build expression."
    }
  }),
  "ar": 0,
  "bs": 0,
  "ca": 0,
  "cs": 0,
  "da": 0,
  "de": 0,
  "el": 0,
  "es": 0,
  "et": 0,
  "fi": 0,
  "fr": 0,
  "he": 0,
  "hi": 0,
  "hr": 0,
  "hu": 0,
  "it": 0,
  "id": 0,
  "ja": 0,
  "ko": 0,
  "lt": 0,
  "lv": 0,
  "nb": 0,
  "nl": 0,
  "pl": 0,
  "pt-br": 0,
  "pt-pt": 0,
  "ro": 0,
  "ru": 0,
  "sl": 0,
  "sr": 0,
  "sv": 0,
  "th": 0,
  "tr": 0,
  "vi": 0,
  "zh-cn": 0,
  "zh-hk": 0,
  "zh-tw": 0
});