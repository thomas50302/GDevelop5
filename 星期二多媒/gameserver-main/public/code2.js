gdjs.PhysicCode = {};
gdjs.PhysicCode.localVariables = [];
gdjs.PhysicCode.GDFloorObjects1= [];
gdjs.PhysicCode.GDFloorObjects2= [];
gdjs.PhysicCode.GDNewSpriteObjects1= [];
gdjs.PhysicCode.GDNewSpriteObjects2= [];


gdjs.PhysicCode.mapOfGDgdjs_9546PhysicCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.PhysicCode.GDNewSpriteObjects1});
gdjs.PhysicCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.PhysicCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PhysicCode.mapOfGDgdjs_9546PhysicCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.PhysicCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.PhysicCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.PhysicCode.GDNewSpriteObjects1[i].getBehavior("Physics2").addMouseJoint(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 500, 10, 1, runtimeScene.getScene().getVariables().get("MJ"));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "R");
}}

}


};gdjs.PhysicCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11963164);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.PhysicCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.PhysicCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.PhysicCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.PhysicCode.GDNewSpriteObjects1[i].getBehavior("Physics2").removeJoint(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("MJ")));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.PhysicCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.PhysicCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.PhysicCode.GDNewSpriteObjects1[i].getBehavior("Physics2").setMouseJointTarget(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("MJ")), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "R") >= 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.PhysicCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.PhysicCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.PhysicCode.GDNewSpriteObjects1[i].getBehavior("Physics2").removeJoint(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("MJ")));
}
}}

}


};

gdjs.PhysicCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PhysicCode.GDFloorObjects1.length = 0;
gdjs.PhysicCode.GDFloorObjects2.length = 0;
gdjs.PhysicCode.GDNewSpriteObjects1.length = 0;
gdjs.PhysicCode.GDNewSpriteObjects2.length = 0;

gdjs.PhysicCode.eventsList1(runtimeScene);
gdjs.PhysicCode.GDFloorObjects1.length = 0;
gdjs.PhysicCode.GDFloorObjects2.length = 0;
gdjs.PhysicCode.GDNewSpriteObjects1.length = 0;
gdjs.PhysicCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['PhysicCode'] = gdjs.PhysicCode;
