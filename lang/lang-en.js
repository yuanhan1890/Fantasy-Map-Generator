// Source translation file for FMG. This file is only used as a reference for tranlation. Version 0.01a
window.translation = {
  titleFull: "Azgaar's Fantasy Map Generator",
  titleName: "Azgaar's",
  title: "Fantasy Map Generator",
  version: "v. ",
  loading: "Loading",
  newMap: "New Map!",
  layers: "Layers",
  style: "Style",
  options: "Options",
  tools: "Tools",
  about: "About",
  tipOptionsTrigger: "Click to show options pane. Shortcut: Tab",
  tipRegenerate: "Click to generate a new map. Shortcut: F2",
  optionsDragTrigger: "Drag to move options pane",
  optionsHide: "Click to hide options pane. Shortcut: Tab to close this or Esc to close all dialogs",
  layersTab: "Click to change map layers",
  styleTab: "Click to open style editor",
  optionsTab: "Click to change generation and UI options",
  toolsTab: "Click to open tools menu",
  aboutTab: "Click to see Generator info"
};

return;
// list of tooltips from init DOM (dynamically added elements are not icluded)
const sourceDataForReference = {
  optionsTrigger: "Click to show options pane. Shortcut: Tab",
  NeedToAdd!: "Drag to move options pane",
  optionsHide: "Click to hide options pane. Shortcut: Tab to close this or Esc to close all dialogs",
  NeedToAdd!: "Select a map layers preset",
  savePresetButton: "Click to save displayed layers as a new preset",
  removePresetButton: "Click to remove current custom preset",
  NeedToAdd!: "Click to toggle a layer, drag to raise or lower a layer. Ctrl + click to edit layer style",
  toggleRulers: "Rulers: click to toggle, drag to move, click on label to delete. Ctrl + click to edit layer style. Shortcut: = (equal)",
  toggleScaleBar: "Scale Bar: click to toggle. Ctrl + click to edit style. Shortcut: - (minus)",
  viewStandard: "Standard view mode that allows to edit the map",
  viewMesh: "Map presentation in 3D scene. Works best for heightmap. Cannot be used for editing",
  viewGlobe: "Project map on globe. Cannot be used for editing",
  NeedToAdd!: "Select a style preset",
  addStyleButton: "Click to save current style as a new preset",
  removeStyleButton: "Click to remove current custom style preset",
  NeedToAdd!: "Select an element to edit its style",
  styleIsOff: "The selected layer is not visible. See the buttons above to toggle it on",
  NeedToAdd!: "Click and provide a URL to image to be set as a texture",
  styleTextureShiftX: "Shift texture by x axis in pixels",
  styleTextureShiftY: "Shift texture by y axis in pixels",
  styleGridSizeFriendly: "Distance between two adjacent cells in map scale",
  styleShiftX: "Shift by x axis in pixels",
  styleShiftY: "Shift by y axis in pixels",
  styleCompassShiftX: "Shift by x axis in pixels",
  styleCompassShiftY: "Shift by y axis in pixels",
  styleInputFont: "Provide a link to @font-face declaration or type Google font name",
  styleFontAdd: "Add custom font from the web",
  styleFontPlus: "Multiply font size by 1.1",
  styleFontMinus: "Multiply font size by 0.9",
  styleRadiusPlus: "Multiply radius by 1.1",
  styleRadiusMinus: "Multiply radius by 1.1",
  styleIconSizePlus: "Multiply size by 1.1",
  styleIconSizeMinus: "Multiply size by 1.1",
  NeedToAdd!: "Allow system to hide labels if their size in too small or too big on that scale",
  NeedToAdd!: "Map generation settings. Generate a new map to apply the settings",
  toggleFullscreen: "Toggle between screen size and initial canvas size",
  optionsSeedGenerate: "Click to generate a map for this seed",
  optionsMapHistory: "Show seed history to apply a previous seed",
  optionsCopySeed: "Copy map seed as URL. It will produce the same map only if options are default or the same",
  NeedToAdd!: "Regenerate map name",
  NeedToAdd!: "Tool settings that don't affect maps. Changes are getting applied immediately",
  NeedToAdd!: "Mimimal possible zoom level (should be > 0)",
  zoomExtentMin: "Mimimal possible zoom level (should be > 0)",
  NeedToAdd!: "Maximal possible zoom level (should be > 1)",
  zoomExtentMax: "Maximal possible zoom level (should be > 1)",
  zoomExtentDefault: "Restore default [1, 20] zoom extent",
  configureWorld: "Click to open world configurator to setup map position on Globe and World climate",
  optionsReset: "Click to restore default options (page will be reloaded)",
  editHeightmapButton: "Click to open Heightmap customization menu. Shortcut: Shift + H",
  editBiomesButton: "Click to open Biomes Editor. Shortcut: Shift + B",
  editStatesButton: "Click to open States Editor. Shortcut: Shift + S",
  editProvincesButton: "Click to open Provinces Editor. Shortcut: Shift + P",
  editDiplomacyButton: "Click to open Diplomatical relationships Editor. Shortcut: Shift + D",
  editCulturesButton: "Click to open Cultures Editor. Shortcut: Shift + C",
  editNamesBaseButton: "Click to open Namesbase Editor. Shortcut: Shift + N",
  editZonesButton: "Click to open Zones Editor. Shortcut: Shift + Z",
  editReligions: "Click to open Religions Editor. Shortcut: Shift + R",
  editUnitsButton: "Click to open Units Editor. Shortcut: Shift + Q",
  editNotesButton: "Click to open Notes Editor. Shortcut: Shift + O",
  overviewBurgsButton: "Click to open Burgs Overview. Shortcut: Shift + T",
  overviewRiversButton: "Click to open Rivers Overview. Shortcut: Shift + V",
  overviewMilitaryButton: "Click to open Military Forces Overview. Shortcut: Shift + M",
  overviewCellsButton: "Click to open Cell details view. Shortcut: Shift + E",
  regenerateStateLabels: "Click to update state labels placement based on current borders",
  regenerateReliefIcons: "Click to regenerate all relief icons based on current cell biome and elevation",
  regenerateRoutes: "Click to regenerate all routes",
  regenerateRivers: "Click to regenerate all rivers (restore default state)",
  regeneratePopulation: "Click to recalculate rural and urban population",
  regenerateBurgs: "Click to regenerate all burgs and routes. States will remain as they are",
  regenerateStates: "Click to select new capitals and regenerate states. Burgs will remain as they are",
  regenerateProvinces: "Click to regenerate provinces. States will remain as they are",
  regenerateReligions: "Click to regenerate religions",
  regenerateMarkers: "Click to regenerate markers. Hold Ctrl and click to set markers number multiplier",
  regenerateZones: "Click to regenerate zones. Hold Ctrl and click to set zones number multiplier",
  addBurgTool: "Click on map to place a burg. Hold Shift to add multiple. Shortcut: Shift + 1",
  addLabel: "Click on map to place label. Hold Shift to add multiple. Shortcut: Shift + 2",
  addRiver: "Click on map to place a river. Hold Shift to add multiple. Shortcut: Shift + 3",
  addRoute: "Click on map to place a route. Shortcut: Shift + 4",
  addMarker: "Click on map to place a marker. Hold Shift to add multiple. Shortcut: Shift + 5",
  paintBrushes: "Display brushes panel",
  applyTemplate: "Open template editor",
  convertImage: "Open Image Converter",
  heightmapPreview: "Render heightmap data as a small monochrome image",
  heightmap3DView: "Preview heightmap in 3D scene",
  NeedToAdd!: "Click to see supporters names",
  newMapButton: "Generate a new map based on options. Shortcut: F2",
  saveButton: "Select format to save map",
  loadButton: "Load fully functional map in a .map format",
  zoomReset: "Reset map zoom. Shortcut: 0",
  finalizeHeightmap: "Finalize the heightmap and exit the edit mode",
  NeedToAdd!: "Length of Meridian. Almost half of the equator length",
  meridianLength: "Length of Meridian in pixels",
  meridianLengthFriendly: "Length of Meridian is friendly units (depends on user configuration)",
  meridianLengthEarth: "Fantasy world Meridian length relative to real-world Earth (20k km)",
  labelGroupShow: "Show the group selection",
  labelGroupHide: "Hide the group selection",
  labelGroupSelect: "Select a group for this label",
  labelGroupInput: "Provide a name for the new group",
  labelGroupNew: "Create new group for this label",
  labelGroupRemove: "Remove the Group with all labels",
  labelTextShow: "Show the edit label text section",
  labelTextHide: "Hide the edit label text section",
  labelText: "Type to change the label. Enter "|" to move to a new line",
  labelTextRandom: "Generate random name",
  labelEditStyle: "Edit label group style in Style Editor",
  labelSizeShow: "Show the font size section",
  labelSizeHide: "Hide the font size section",
  labelStartOffset: "Set starting offset for the particular label",
  labelRelativeSize: "Set relative size for the particular label",
  labelAlign: "Turn text path into a straight line",
  labelLegend: "Edit free text notes (legend) for this label",
  labelRemoveSingle: "Remove the label. Shortcut: Delete",
  riverNameShow: "Show river name section",
  riverNameHide: "Hide the river name section",
  riverName: "Change river proper name",
  riverType: "Change river type name",
  riverNameCulture: "Generate culture-specific name for the river",
  riverNameRandom: "Generate random name for the river",
  riverWidthShow: "Show river width and widening change section",
  riverWidthHide: "Hide the river width and widening change section",
  riverWidthInput: "Change river width",
  riverIncrement: "Change river bed increment (widening speed)",
  riverEditStyle: "Edit style for all rivers in Style Editor",
  riverLength: "River length in selected units",
  riverNew: "Create new river clicking on map",
  riverLegend: "Edit free text notes (legend) for the river",
  riverRemove: "Remove river. Shortcut: Delete",
  routeGroupsShow: "Show the group selection",
  routeGroupsHide: "Hide the group section",
  routeGroup: "Select a group for this route",
  routeGroupName: "Provide a name for the new group",
  routeGroupAdd: "Create new group for this route",
  routeGroupRemove: "Remove all routes of this group",
  routeEditStyle: "Edit route group style in Style Editor",
  routeLength: "Route length in selected units",
  routeSplit: "Click on a control point to split the route",
  routeLegend: "Edit free text notes (legend) for the route",
  routeNew: "Create new route clicking on map",
  routeRemove: "Remove route. Shortcut: Delete",
  lakeGroupsShow: "Show the group selection",
  lakeGroupsHide: "Hide the group section",
  lakeGroup: "Select a group for this lake",
  lakeGroupName: "Provide a name for the new group",
  lakeGroupAdd: "Create new group for this lake",
  lakeGroupRemove: "Remove the group",
  lakeEditStyle: "Edit lake group style in Style Editor",
  lakeArea: "Lake area in selected units",
  lakeLegend: "Edit free text notes (legend) for the lake",
  coastlineGroupsShow: "Show the group selection",
  coastlineGroupsHide: "Hide the group section",
  coastlineGroup: "Select a group for this coastline",
  coastlineGroupName: "Provide a name for the new group",
  coastlineGroupAdd: "Create new group for this coastline",
  coastlineGroupRemove: "Remove the group",
  coastlineEditStyle: "Edit coastline group style in Style Editor",
  coastlineArea: "Lake area in selected units",
  reliefIndividual: "Edit individual selected icon",
  reliefBulkAdd: "Place icons in a bulk",
  reliefBulkRemove: "Remove icons in a bulk",
  reliefEditStyle: "Edit Relief Icons style in Style Editor",
  reliefCopy: "Copy selected relief icon",
  reliefMoveFront: "Move selected relief icon to front",
  reliefMoveBack: "Move selected relief icon back",
  reliefRemove: "Remove selected relief icon. Shortcut: Delete",
  burgName: "Type to rename the burg",
  burgNameReCulture: "Generate culture-specific name for the burg",
  burgNameReRandom: "Generate random name for the burg",
  burgPopulation: "Set burg population",
  burgCapital: "Shows whether the burg is a state capital. Click to toggle",
  burgPort: "Shows whether the burg is a port. Click to toggle",
  burgCitadel: "Shows whether the burg has a citadel (castle). Click to toggle",
  burgWalls: "Shows whether the burg is walled. Click to toggle",
  burgPlaza: "Shows whether the burg is a trade center (has big marketplace). Click to toggle",
  burgTemple: "Shows whether the burg is a religious center. Click to toggle",
  burgShanty: "Shows whether the burg has a shanty town. Click to toggle",
  burgGroupShow: "Show group change section",
  burgGroupHide: "Hide group change section",
  burgSelectGroup: "Select a group for this burg",
  burgInputGroup: "Create new Group for the Burg",
  burgAddGroup: "Create new group for the burg",
  burgRemoveGroup: "Remove selected burg group",
  burgStyleShow: "Show style edit section",
  burgStyleHide: "Hide style edit section",
  burgEditLabelStyle: "Edit label style for burg group in Style Editor",
  burgEditIconStyle: "Edit icon style for burg group in Style Editor",
  burgEditAnchorStyle: "Edit port icon (anchor) style for burg group in Style Editor",
  burgSeeInMFCG: "Open burg in the Medieval Fantasy City Generator by Watabou. Ctrl + click to change the seed",
  burgOpenCOA: "Open burg's COA in the Iron Arachne Heraldry Generator. Ctrl + click to change the seed",
  burgRelocate: "Relocate burg",
  burglLegend: "Edit free text notes (legend) for this burg",
  burgRemove: "Remove non-capital burg. Shortcut: Delete",
  markerGroup: "Change marker type",
  markerSelectGroup: "Select type for the selected marker",
  markerInputGroup: "Create new type for selected marker",
  markerAddGroup: "Create new markers type",
  markerRemoveGroup: "Remove all markers of that type",
  markerIcon: "Change marker icon and edit positioning",
  NeedToAdd!: "Change marker icon size",
  markerIconSize: "Change marker icon size",
  NeedToAdd!: "Change marker horizontal shift",
  markerIconShiftX: "Change icon horizontal shift",
  NeedToAdd!: "Change marker vertical shift",
  markerIconShiftY: "Change vertical shift",
  NeedToAdd!: "Paste custom unicode symbol to use as icon",
  markerIconCustom: "Paste custom unicode symbol to use as icon",
  markerStyle: "Change marker size and colors",
  NeedToAdd!: "Change marker base (pin) style",
  markerSize: "Change marker size",
  markerBaseStroke: "Change pin stroke color",
  markerBaseFill: "Change pin fill color",
  NeedToAdd!: "Change marker icon style",
  markerIconStrokeWidth: "Change icon stroke width",
  markerIconStroke: "Change icon stroke color. Ensure icon stroke width is non-zero",
  markerIconFill: "Change icon fill color",
  markerToggleBubble: "Toggle pin (bubble) display",
  markerLegendButton: "Edit place legend (free text notes)",
  markerAdd: "Add additional marker of that type",
  markerRemove: "Remove the marker. Shortcut: Delete",
  undo: "Undo the latest action (Ctrl + Z)",
  redo: "Redo the action (Ctrl + Y)",
  rescaleShow: "Show rescaler slider",
  rescaleCondShow: "Rescaler: change height if condition is fulfilled",
  smoothHeights: "Smooth all heights a bit",
  disruptHeights: "Disrupt (randomize) heights a bit",
  brushClear: "Set height for all cells to 0 (erase the map)",
  rescaleHide: "Hide rescaler slider",
  rescaler: "Change height for all cells",
  rescaleCondHide: "Hide rescaler",
  rescaleExecute: "Click to perform an operation",
  templateHill: "Hill: small blob",
  templatePit: "Pit: round depression",
  templateRange: "Range: elongated elevation",
  templateTrough: "Trough: elongated depression",
  templateStrait: "Strait: centered vertical or horizontal depression",
  templateAdd: "Add or subtract value from all heights in range",
  templateMultiply: "Multiply all heights in range by factor",
  templateSmooth: "Smooth the map replacing cell heights by an average values of its neighbors",
  NeedToAdd!: "Click to skip the step",
  NeedToAdd!: "Remove the step",
  NeedToAdd!: "Drag to reorder",
  NeedToAdd!: "Placement range percentage along Y axis (minY-maxY)",
  NeedToAdd!: "Placement range percentage along X axis (minX-maxX)",
  NeedToAdd!: "Blob maximum height, use hyphen to get a random number in range",
  NeedToAdd!: "Blobs to add, use hyphen to get a random number in range",
  templateRun: "Apply current template",
  templateUndo: "Undo the latest action",
  templateRedo: "Redo the action",
  templateSave: "Download the template as a text file",
  templateLoad: "Open previously downloaded template",
  templateCA: "Find or share custom template on Cartography Assets portal",
  templateTutorial: "Open Template Editor Tutorial",
  convertImageLoad: "Load image to convert",
  convertAutoLum: "Auto-assign colors based on liminosity (good to monochrome images)",
  convertAutoHue: "Auto-assign colors based on hue (good to colored images)",
  convertColorsButton: "Set number of colors",
  convertComplete: "Complete the assignment. All unassigned colors will be considered as ocean",
  NeedToAdd!: "Click to sort by biome name",
  NeedToAdd!: "Click to sort by biome habitability",
  NeedToAdd!: "Click to sort by biome cells number",
  NeedToAdd!: "Click to sort by biome area",
  NeedToAdd!: "Click to sort by biome population",
  biomesEditorRefresh: "Refresh the Editor",
  biomesEditStyle: "Edit biomes style in Style Editor",
  biomesLegend: "Toggle Legend box",
  biomesPercentage: "Toggle percentage / absolute values views",
  biomesManually: "Manually re-assign biomes to not follow the default moisture/temperature pattern",
  biomesManuallyApply: "Apply current assignment",
  biomesManuallyCancel: "Cancel assignment",
  biomesAdd: "Add a custom biome",
  biomesRestore: "Restore the defaults and re-define biomes based on current moisture and temperature",
  biomesRegenerateReliefIcons: "Regenerate relief icons based on current biomes and elevation",
  biomesExport: "Save biomes-related data as a text file (.csv)",
  NeedToAdd!: "Click to sort by state name",
  NeedToAdd!: "Click to sort by state form name",
  NeedToAdd!: "Click to sort by capital name",
  NeedToAdd!: "Click to sort by state dominant culture",
  NeedToAdd!: "Click to sort by state burgs count",
  NeedToAdd!: "Click to sort by state area",
  NeedToAdd!: "Click to sort by state population",
  NeedToAdd!: "Click to sort by state type",
  NeedToAdd!: "Click to sort by state expansion value",
  NeedToAdd!: "Click to sort by state cells count",
  statesEditorRefresh: "Refresh the Editor",
  statesEditStyle: "Edit states style in Style Editor",
  statesLegend: "Toggle Legend box",
  statesPercentage: "Toggle percentage / absolute values views",
  statesChart: "Show states bubble chart",
  statesRegenerate: "Show the regeneration menu and more data",
  statesRegenerateBack: "Hide the regeneration menu",
  statesRandomize: "Randomize states Expansion value and re-calculate states and provinces",
  statesRecalculate: "Recalculate states based on current values of growth-related attributes",
  statesManually: "Manually re-assign states",
  statesManuallyApply: "Apply assignment",
  statesManuallyCancel: "Cancel assignment",
  statesAdd: "Add a new state. Hold Shift to add multiple",
  statesExport: "Save state-related data as a text file (.csv)",
  NeedToAdd!: "State short name",
  stateNameEditorShort: "Type to change the short name",
  stateNameEditorShortCulture: "Generate culture-specific name",
  stateNameEditorShortRandom: "Generate random name",
  NeedToAdd!: "State form name",
  stateNameEditorCustomForm: "Create custom state form name",
  stateNameEditorAddForm: "Click to add custom state form name to the list",
  NeedToAdd!: "State full name",
  stateNameEditorFull: "Type to change the full name",
  stateNameEditorFullRegenerate: "Click to re-generate full name",
  NeedToAdd!: "Click to sort by province name",
  NeedToAdd!: "Click to sort by province form name",
  NeedToAdd!: "Click to sort by province capital",
  NeedToAdd!: "Click to sort by province owner",
  NeedToAdd!: "Click to sort by province area",
  NeedToAdd!: "Click to sort by province population",
  provincesEditorRefresh: "Refresh the Editor",
  provincesEditStyle: "Edit provinces style in Style Editor",
  provincesPercentage: "Toggle percentage / absolute values views",
  provincesChart: "Show provinces chart",
  provincesToggleLabels: "Toggle province labels",
  provincesExport: "Save provinces-related data as a text file (.csv)",
  provincesManually: "Manually re-assign provinces",
  provincesManuallyApply: "Apply assignment",
  provincesManuallyCancel: "Cancel assignment",
  provincesAdd: "Add a new province. Hold Shift to add multiple",
  provincesRemoveAll: "Remove all provinces. States will remain as they are",
  NeedToAdd!: "Click to sort by state name",
  NeedToAdd!: "Click to sort by diplomatical relations",
  NeedToAdd!: "Ally means states formed a defensive pact and will protect each other in case of third party aggression",
  NeedToAdd!: "State is friendly to anouther state when they share some common interests",
  NeedToAdd!: "Neutral means states relations are neither positive nor negative",
  NeedToAdd!: "Suspicion means shate has a cautious distrust of another state",
  NeedToAdd!: "Enemies are states at war with each other",
  NeedToAdd!: "Relations are unknown if states do not have enough information about each other",
  NeedToAdd!: "Rivalry is a state of competing for dominance in the region",
  NeedToAdd!: "Vassal is a state having obligation to its suzerain",
  NeedToAdd!: "Suzerain is a state having some control over its vassals",
  diplomacyEditorRefresh: "Refresh the Editor",
  diplomacyEditStyle: "Edit states (including diplomacy view) style in Style Editor",
  diplomacyRegenerate: "Regenerate diplomatical relations",
  diplomacyHistory: "Show relations history",
  diplomacyMatrix: "Show relations matrix",
  diplomacyExport: "Save state relations matrix as a text file (.csv)",
  NeedToAdd!: "Province short name",
  provinceNameEditorShort: "Type to change the short name",
  provinceNameEditorShortCulture: "Generate culture-specific name",
  provinceNameEditorShortRandom: "Generate random name",
  NeedToAdd!: "Province form name",
  provinceNameEditorCustomForm: "Create custom province form name",
  provinceNameEditorAddForm: "Click to add custom province form name to the list",
  NeedToAdd!: "Province full name",
  provinceNameEditorFull: "Type to change the full name",
  provinceNameEditorFullRegenerate: "Click to re-generate full name",
  NeedToAdd!: "Click to sort by culture name",
  NeedToAdd!: "Click to sort by culture cells count",
  NeedToAdd!: "Click to sort by expansionism",
  NeedToAdd!: "Click to sort by type",
  NeedToAdd!: "Click to sort by culture area",
  NeedToAdd!: "Click to sort by culture population",
  NeedToAdd!: "Click to sort by culture namesbase",
  culturesEditorRefresh: "Refresh the Editor",
  culturesEditStyle: "Edit cultures style in Style Editor",
  culturesLegend: "Toggle Legend box",
  culturesPercentage: "Toggle percentage / absolute values display mode",
  culturesHeirarchy: "Show cultures hierarchy tree",
  culturesManually: "Manually re-assign cultures",
  culturesManuallyApply: "Apply assignment",
  culturesManuallyCancel: "Cancel assignment",
  culturesEditNamesBase: "Edit a database used for names generation",
  culturesAdd: "Add a new culture. Hold Shift to add multiple",
  culturesExport: "Download cultures-related data",
  culturesRecalculate: "Recalculate cultures based on current values of growth-related attributes",
  namesbaseSelect: "Select base to edit",
  namesbaseTextarea: "Names data: a comma separated list of source names used for names generation",
  namesbaseName: "Type to change a base name",
  namesbaseMin: "Recommended minimum name length",
  namesbaseMax: "Recommended maximum name length",
  namesbaseDouble: "Populate with letters that can used twice in a row",
  namesbaseMulti: "Multi-word names rate. 1 - allow all multi-word names, 0 - all names should spelled as a single word",
  namesbaseExamples: "Examples. Click to re-generate",
  namesbaseUpdateExamples: "Re-generate examples based on provided data",
  namesbaseAdd: "Add new namesbase",
  namesbaseDefault: "Restore default namesbase",
  namesbaseDownload: "Download namesbase to PC",
  namesbaseUpload: "Upload a namesbase from PC",
  namesbaseCA: "Find or share custom namesbase on Cartography Assets portal",
  NeedToAdd!: "Zone description",
  NeedToAdd!: "Zone cells count",
  NeedToAdd!: "Zone area",
  NeedToAdd!: "Zone population",
  zonesEditorRefresh: "Refresh the Editor",
  zonesEditStyle: "Edit zones style in Style Editor",
  zonesLegend: "Toggle Legend box",
  zonesPercentage: "Toggle percentage / absolute values views",
  zonesManually: "Re-assign zones",
  zonesManuallyApply: "Apply assignment",
  zonesManuallyCancel: "Cancel assignment",
  zonesRemove: "Click to toggle the removal mode on brush dragging. Shortcut: ctrl",
  zonesAdd: "Add a new zone layer",
  zonesExport: "Download zones-related data",
  notesSelect: "Select object",
  notesName: "Type to change object name",
  notesText: "Type object description",
  notesFocus: "Focus on selected object",
  notesDownload: "Download notes to PC",
  notesUpload: "Upload notes from PC",
  notesRemove: "Remove this note",
  NeedToAdd!: "Click to sort by religion name",
  NeedToAdd!: "Click to sort by religion type",
  NeedToAdd!: "Click to sort by religion form",
  NeedToAdd!: "Click to sort by supreme deity",
  NeedToAdd!: "Click to sort by religion area",
  NeedToAdd!: "Click to sort by number of believers (religion area population)",
  religionsEditorRefresh: "Refresh the Editor",
  religionsEditStyle: "Edit religions style in Style Editor",
  religionsLegend: "Toggle Legend box",
  religionsPercentage: "Toggle percentage / absolute values display mode",
  religionsHeirarchy: "Show religions hierarchy tree",
  religionsExtinct: "Show/hide extinct religions (religions without cells)",
  religionsManually: "Manually re-assign religions",
  religionsManuallyApply: "Apply assignment",
  religionsManuallyCancel: "Cancel assignment",
  religionsAdd: "Add a new religion. Hold Shift to add multiple",
  religionsExport: "Download religions-related data",
  addLinearRuler: "Click to place a linear measurer (ruler)",
  addOpisometer: "Drag to measure a curve length (opisometer)",
  addPlanimeter: "Drag to measure a polygon area (planimeter)",
  removeRulers: "Remove all rulers from the map. Click on ruler label to remove a ruler separately",
  unitsRestore: "Restore default units settings",
  NeedToAdd!: "Click to sort by burg name",
  NeedToAdd!: "Click to sort by province name",
  NeedToAdd!: "Click to sort by state name",
  NeedToAdd!: "Click to sort by culture name",
  NeedToAdd!: "Click to sort by burg population",
  NeedToAdd!: "Click to sort by burg type",
  burgsOverviewRefresh: "Refresh the Editor",
  burgsChart: "Show burgs bubble chart",
  regenerateBurgNames: "Regenerate burg names based on assigned culture",
  addNewBurg: "Add a new burg. Hold Shift to add multiple",
  burgsExport: "Save burgs-related data as a text file (.csv)",
  burgNamesImport: "Rename burgs in bulk",
  burgsRemoveAll: "Remove all burgs except for capitals. To remove a capital remove its state first",
  NeedToAdd!: "Click to sort by river name",
  NeedToAdd!: "Click to sort by river type name",
  NeedToAdd!: "Click to sort by river length",
  NeedToAdd!: "Click to sort by river basin",
  riversOverviewRefresh: "Refresh the Editor",
  addNewRiver: "Add a new river. Hold Shift to add multiple",
  riversBasinHighlight: "Toggle basin highlight mode",
  riversExport: "Save rivers-related data as a text file (.csv)",
  riversRemoveAll: "Remove all rivers",
  NeedToAdd!: "State name. Click to sort",
  militaryTotal: "Total military personnel (considering crew). Click to sort",
  NeedToAdd!: "State population. Click to sort",
  NeedToAdd!: "Military personnel rate (% of state population). Depends on war alert. Click to sort",
  NeedToAdd!: "War Alert. Modifier to military forces number, depends of political situation. Click to sort",
  militaryOverviewRefresh: "Refresh the Editor",
  militaryOptionsButton: "Military options. Click to customize units",
  militaryOverviewRecalculate: "Recalculate military forces based on current options",
  militaryExport: "Save military-related data as a text file (.csv)",
  militaryVisualize: "Show armies on the map",
  NeedToAdd!: "Unit name. If name is changed for existing unit, old unit will be replaced",
  NeedToAdd!: "Conscription percentage for rural population",
  NeedToAdd!: "Conscription percentage for urban population",
  NeedToAdd!: "Average number of people in crew",
  NeedToAdd!: "Unit type to apply special rules on forces recalculation",
  styleSaverName: "Enter style preset name",
  styleSaverTip: "Shows whether there is already a preset with this name",
  styleSaverJSON: "Style JSON is getting formed based the current settings, but can be entered manually",
  styleSaverSave: "Save current JSON as a new style preset",
  styleSaverDownload: "Download the style as a .json file (can be opened in any text editor)",
  styleSaverLoad: "Open previously downloaded style file",
  styleSaverCA: "Find or share custom style preset on Cartography Assets portal",
  NeedToAdd!: "Equirectangular projection is used: distortion is maximum on poles. Use map with aspect ratio 2:1 for best result",
  options3dUpdate: "Update the scene",
  NeedToAdd!: "Configure world and map size and climate settings",
  options3dSave: "Save screenshot of the 3d scene",
  NeedToAdd!: "Download the map as fully-functional .map file to your machine",
  NeedToAdd!: "Download the map as vector image (open in browser or Inkscape)",
  NeedToAdd!: "Download visible part of the map as .png (lossless compressed)",
  NeedToAdd!: "Download visible part of the map as .jpeg (lossy compressed) image",
  NeedToAdd!: "Download map data in GeoJSON format",
  NeedToAdd!: "Save fully-functional map to browser storage. Shortcut: F6",
  NeedToAdd!: "Load .map file from local disk",
  NeedToAdd!: "Load .map file from URL (server should allow CORS)",
  NeedToAdd!: "Load map from browser storage (if saved before)"
};