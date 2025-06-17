gdjs.FirstCode = {};
gdjs.FirstCode.localVariables = [];
gdjs.FirstCode.GDGirlObjects1= [];
gdjs.FirstCode.GDGirlObjects2= [];
gdjs.FirstCode.GDGirlObjects3= [];
gdjs.FirstCode.GDGirlObjects4= [];
gdjs.FirstCode.GDNewSpriteObjects1= [];
gdjs.FirstCode.GDNewSpriteObjects2= [];
gdjs.FirstCode.GDNewSpriteObjects3= [];
gdjs.FirstCode.GDNewSpriteObjects4= [];
gdjs.FirstCode.GDplatObjects1= [];
gdjs.FirstCode.GDplatObjects2= [];
gdjs.FirstCode.GDplatObjects3= [];
gdjs.FirstCode.GDplatObjects4= [];
gdjs.FirstCode.GDNewTiledSpriteObjects1= [];
gdjs.FirstCode.GDNewTiledSpriteObjects2= [];
gdjs.FirstCode.GDNewTiledSpriteObjects3= [];
gdjs.FirstCode.GDNewTiledSpriteObjects4= [];
gdjs.FirstCode.GDGem1Objects1= [];
gdjs.FirstCode.GDGem1Objects2= [];
gdjs.FirstCode.GDGem1Objects3= [];
gdjs.FirstCode.GDGem1Objects4= [];
gdjs.FirstCode.GDGem2Objects1= [];
gdjs.FirstCode.GDGem2Objects2= [];
gdjs.FirstCode.GDGem2Objects3= [];
gdjs.FirstCode.GDGem2Objects4= [];
gdjs.FirstCode.GDFlyObjects1= [];
gdjs.FirstCode.GDFlyObjects2= [];
gdjs.FirstCode.GDFlyObjects3= [];
gdjs.FirstCode.GDFlyObjects4= [];
gdjs.FirstCode.GDScoreObjects1= [];
gdjs.FirstCode.GDScoreObjects2= [];
gdjs.FirstCode.GDScoreObjects3= [];
gdjs.FirstCode.GDScoreObjects4= [];
gdjs.FirstCode.GDFlatHeartBarObjects1= [];
gdjs.FirstCode.GDFlatHeartBarObjects2= [];
gdjs.FirstCode.GDFlatHeartBarObjects3= [];
gdjs.FirstCode.GDFlatHeartBarObjects4= [];
gdjs.FirstCode.GDCopperRedBarObjects1= [];
gdjs.FirstCode.GDCopperRedBarObjects2= [];
gdjs.FirstCode.GDCopperRedBarObjects3= [];
gdjs.FirstCode.GDCopperRedBarObjects4= [];
gdjs.FirstCode.GDRedFlameObjects1= [];
gdjs.FirstCode.GDRedFlameObjects2= [];
gdjs.FirstCode.GDRedFlameObjects3= [];
gdjs.FirstCode.GDRedFlameObjects4= [];
gdjs.FirstCode.GDRedExplosionObjects1= [];
gdjs.FirstCode.GDRedExplosionObjects2= [];
gdjs.FirstCode.GDRedExplosionObjects3= [];
gdjs.FirstCode.GDRedExplosionObjects4= [];
gdjs.FirstCode.GDEnemyObjects1= [];
gdjs.FirstCode.GDEnemyObjects2= [];
gdjs.FirstCode.GDEnemyObjects3= [];
gdjs.FirstCode.GDEnemyObjects4= [];


gdjs.FirstCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.FirstCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() < 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11989708);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.FirstCode.GDGirlObjects1 */
{for(var i = 0, len = gdjs.FirstCode.GDGirlObjects1.length ;i < len;++i) {
    gdjs.FirstCode.GDGirlObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.FirstCode.GDGirlObjects1.length ;i < len;++i) {
    gdjs.FirstCode.GDGirlObjects1[i].getBehavior("Animation").setAnimationName("Jump");
}
}}

}


};gdjs.FirstCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.FirstCode.GDGirlObjects2, gdjs.FirstCode.GDGirlObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FirstCode.GDGirlObjects3.length;i<l;++i) {
    if ( gdjs.FirstCode.GDGirlObjects3[i].getBehavior("PlatformerObject").getCurrentSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.FirstCode.GDGirlObjects3[k] = gdjs.FirstCode.GDGirlObjects3[i];
        ++k;
    }
}
gdjs.FirstCode.GDGirlObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FirstCode.GDGirlObjects3 */
{for(var i = 0, len = gdjs.FirstCode.GDGirlObjects3.length ;i < len;++i) {
    gdjs.FirstCode.GDGirlObjects3[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(gdjs.FirstCode.GDGirlObjects2, gdjs.FirstCode.GDGirlObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FirstCode.GDGirlObjects3.length;i<l;++i) {
    if ( gdjs.FirstCode.GDGirlObjects3[i].getBehavior("PlatformerObject").getCurrentSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.FirstCode.GDGirlObjects3[k] = gdjs.FirstCode.GDGirlObjects3[i];
        ++k;
    }
}
gdjs.FirstCode.GDGirlObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FirstCode.GDGirlObjects3 */
{for(var i = 0, len = gdjs.FirstCode.GDGirlObjects3.length ;i < len;++i) {
    gdjs.FirstCode.GDGirlObjects3[i].getBehavior("Flippable").flipX(true);
}
}}

}


{



}


{



}


};gdjs.FirstCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.FirstCode.GDGirlObjects1, gdjs.FirstCode.GDGirlObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FirstCode.GDGirlObjects2.length;i<l;++i) {
    if ( gdjs.FirstCode.GDGirlObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.FirstCode.GDGirlObjects2[k] = gdjs.FirstCode.GDGirlObjects2[i];
        ++k;
    }
}
gdjs.FirstCode.GDGirlObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FirstCode.GDGirlObjects2 */
{for(var i = 0, len = gdjs.FirstCode.GDGirlObjects2.length ;i < len;++i) {
    gdjs.FirstCode.GDGirlObjects2[i].getBehavior("Animation").setAnimationName("Run");
}
}
{ //Subevents
gdjs.FirstCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.FirstCode.GDGirlObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FirstCode.GDGirlObjects1.length;i<l;++i) {
    if ( !(gdjs.FirstCode.GDGirlObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.FirstCode.GDGirlObjects1[k] = gdjs.FirstCode.GDGirlObjects1[i];
        ++k;
    }
}
gdjs.FirstCode.GDGirlObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FirstCode.GDGirlObjects1 */
{for(var i = 0, len = gdjs.FirstCode.GDGirlObjects1.length ;i < len;++i) {
    gdjs.FirstCode.GDGirlObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


};gdjs.FirstCode.mapOfGDgdjs_9546FirstCode_9546GDGirlObjects1Objects = Hashtable.newFrom({"Girl": gdjs.FirstCode.GDGirlObjects1});
gdjs.FirstCode.mapOfGDgdjs_9546FirstCode_9546GDGem1Objects1ObjectsGDgdjs_9546FirstCode_9546GDGem2Objects1Objects = Hashtable.newFrom({"Gem1": gdjs.FirstCode.GDGem1Objects1, "Gem2": gdjs.FirstCode.GDGem2Objects1});
gdjs.FirstCode.mapOfGDgdjs_9546FirstCode_9546GDRedExplosionObjects1Objects = Hashtable.newFrom({"RedExplosion": gdjs.FirstCode.GDRedExplosionObjects1});
gdjs.FirstCode.mapOfGDgdjs_9546FirstCode_9546GDGem1Objects1ObjectsGDgdjs_9546FirstCode_9546GDGem2Objects1Objects = Hashtable.newFrom({"Gem1": gdjs.FirstCode.GDGem1Objects1, "Gem2": gdjs.FirstCode.GDGem2Objects1});
gdjs.FirstCode.mapOfGDgdjs_9546FirstCode_9546GDFlyObjects1Objects = Hashtable.newFrom({"Fly": gdjs.FirstCode.GDFlyObjects1});
gdjs.FirstCode.mapOfGDgdjs_9546FirstCode_9546GDGirlObjects1Objects = Hashtable.newFrom({"Girl": gdjs.FirstCode.GDGirlObjects1});
gdjs.FirstCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.FirstCode.GDGirlObjects1, gdjs.FirstCode.GDGirlObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FirstCode.GDGirlObjects2.length;i<l;++i) {
    if ( gdjs.FirstCode.GDGirlObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.FirstCode.GDGirlObjects2[k] = gdjs.FirstCode.GDGirlObjects2[i];
        ++k;
    }
}
gdjs.FirstCode.GDGirlObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.FirstCode.GDFlyObjects1, gdjs.FirstCode.GDFlyObjects2);

{for(var i = 0, len = gdjs.FirstCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.FirstCode.GDFlyObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(gdjs.FirstCode.GDGirlObjects1, gdjs.FirstCode.GDGirlObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FirstCode.GDGirlObjects2.length;i<l;++i) {
    if ( !(gdjs.FirstCode.GDGirlObjects2[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs.FirstCode.GDGirlObjects2[k] = gdjs.FirstCode.GDGirlObjects2[i];
        ++k;
    }
}
gdjs.FirstCode.GDGirlObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlatHeartBar"), gdjs.FirstCode.GDFlatHeartBarObjects2);
{for(var i = 0, len = gdjs.FirstCode.GDFlatHeartBarObjects2.length ;i < len;++i) {
    gdjs.FirstCode.GDFlatHeartBarObjects2[i].SetValue(gdjs.FirstCode.GDFlatHeartBarObjects2[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.FirstCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(3));
}}

}


};gdjs.FirstCode.asyncCallback11888196 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FirstCode.localVariables);

{ //Subevents
gdjs.FirstCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.FirstCode.localVariables.length = 0;
}
gdjs.FirstCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FirstCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/postscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(2)), "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.FirstCode.asyncCallback11888196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FirstCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(3));
}}

}


};gdjs.FirstCode.asyncCallback11025252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.FirstCode.localVariables);

{ //Subevents
gdjs.FirstCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.FirstCode.localVariables.length = 0;
}
gdjs.FirstCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.FirstCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/rank", "", "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.FirstCode.asyncCallback11025252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FirstCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.FirstCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.FirstCode.GDGirlObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FirstCode.GDGirlObjects1.length;i<l;++i) {
    if ( gdjs.FirstCode.GDGirlObjects1[i].getX() > 700 ) {
        isConditionTrue_0 = true;
        gdjs.FirstCode.GDGirlObjects1[k] = gdjs.FirstCode.GDGirlObjects1[i];
        ++k;
    }
}
gdjs.FirstCode.GDGirlObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11986068);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Layout1", 700, 0, 0);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.FirstCode.GDGirlObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.FirstCode.GDScoreObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.FirstCode.GDGirlObjects1.length === 0 ) ? 0 :gdjs.FirstCode.GDGirlObjects1[0].getPointX("")), 0.1), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.FirstCode.GDGirlObjects1.length === 0 ) ? 0 :gdjs.FirstCode.GDGirlObjects1[0].getPointY("")) - 100, "", 0);
}{for(var i = 0, len = gdjs.FirstCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.FirstCode.GDScoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("score"))));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.FirstCode.GDGirlObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FirstCode.GDGirlObjects1.length;i<l;++i) {
    if ( gdjs.FirstCode.GDGirlObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.FirstCode.GDGirlObjects1[k] = gdjs.FirstCode.GDGirlObjects1[i];
        ++k;
    }
}
gdjs.FirstCode.GDGirlObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FirstCode.GDGirlObjects1 */
{for(var i = 0, len = gdjs.FirstCode.GDGirlObjects1.length ;i < len;++i) {
    gdjs.FirstCode.GDGirlObjects1[i].getBehavior("Animation").setAnimationName("Jump");
}
}
{ //Subevents
gdjs.FirstCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.FirstCode.GDGirlObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FirstCode.GDGirlObjects1.length;i<l;++i) {
    if ( gdjs.FirstCode.GDGirlObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.FirstCode.GDGirlObjects1[k] = gdjs.FirstCode.GDGirlObjects1[i];
        ++k;
    }
}
gdjs.FirstCode.GDGirlObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{ //Subevents
gdjs.FirstCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Gem1"), gdjs.FirstCode.GDGem1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Gem2"), gdjs.FirstCode.GDGem2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.FirstCode.GDGirlObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FirstCode.mapOfGDgdjs_9546FirstCode_9546GDGirlObjects1Objects, gdjs.FirstCode.mapOfGDgdjs_9546FirstCode_9546GDGem1Objects1ObjectsGDgdjs_9546FirstCode_9546GDGem2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11999052);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.FirstCode.GDCopperRedBarObjects1);
/* Reuse gdjs.FirstCode.GDGem1Objects1 */
/* Reuse gdjs.FirstCode.GDGem2Objects1 */
gdjs.FirstCode.GDRedExplosionObjects1.length = 0;

{for(var i = 0, len = gdjs.FirstCode.GDGem1Objects1.length ;i < len;++i) {
    gdjs.FirstCode.GDGem1Objects1[i].getBehavior("Tween").addObjectOpacityTween2("GemAlpha", 0, "easeInOutQuad", 1, false);
}
for(var i = 0, len = gdjs.FirstCode.GDGem2Objects1.length ;i < len;++i) {
    gdjs.FirstCode.GDGem2Objects1[i].getBehavior("Tween").addObjectOpacityTween2("GemAlpha", 0, "easeInOutQuad", 1, false);
}
}{for(var i = 0, len = gdjs.FirstCode.GDGem1Objects1.length ;i < len;++i) {
    gdjs.FirstCode.GDGem1Objects1[i].getBehavior("Tween").addObjectPositionYTween2("GemY", (gdjs.FirstCode.GDGem1Objects1[i].getPointY("")) - 100, "linear", 1, true);
}
for(var i = 0, len = gdjs.FirstCode.GDGem2Objects1.length ;i < len;++i) {
    gdjs.FirstCode.GDGem2Objects1[i].getBehavior("Tween").addObjectPositionYTween2("GemY", (gdjs.FirstCode.GDGem2Objects1[i].getPointY("")) - 100, "linear", 1, true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\coin.wav", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("score").add(100);
}{for(var i = 0, len = gdjs.FirstCode.GDCopperRedBarObjects1.length ;i < len;++i) {
    gdjs.FirstCode.GDCopperRedBarObjects1[i].SetValue(gdjs.FirstCode.GDCopperRedBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (2), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.FirstCode.mapOfGDgdjs_9546FirstCode_9546GDRedExplosionObjects1Objects, (( gdjs.FirstCode.GDGem2Objects1.length === 0 ) ? (( gdjs.FirstCode.GDGem1Objects1.length === 0 ) ? 0 :gdjs.FirstCode.GDGem1Objects1[0].getPointX("")) :gdjs.FirstCode.GDGem2Objects1[0].getPointX("")), (( gdjs.FirstCode.GDGem2Objects1.length === 0 ) ? (( gdjs.FirstCode.GDGem1Objects1.length === 0 ) ? 0 :gdjs.FirstCode.GDGem1Objects1[0].getPointY("")) :gdjs.FirstCode.GDGem2Objects1[0].getPointY("")), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gem1"), gdjs.FirstCode.GDGem1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Gem2"), gdjs.FirstCode.GDGem2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FirstCode.GDGem1Objects1.length;i<l;++i) {
    if ( gdjs.FirstCode.GDGem1Objects1[i].getBehavior("Tween").exists("GemAlpha") ) {
        isConditionTrue_0 = true;
        gdjs.FirstCode.GDGem1Objects1[k] = gdjs.FirstCode.GDGem1Objects1[i];
        ++k;
    }
}
gdjs.FirstCode.GDGem1Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.FirstCode.GDGem2Objects1.length;i<l;++i) {
    if ( gdjs.FirstCode.GDGem2Objects1[i].getBehavior("Tween").exists("GemAlpha") ) {
        isConditionTrue_0 = true;
        gdjs.FirstCode.GDGem2Objects1[k] = gdjs.FirstCode.GDGem2Objects1[i];
        ++k;
    }
}
gdjs.FirstCode.GDGem2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12001204);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.FirstCode.GDGirlObjects1);
/* Reuse gdjs.FirstCode.GDGem1Objects1 */
/* Reuse gdjs.FirstCode.GDGem2Objects1 */
{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.FirstCode.mapOfGDgdjs_9546FirstCode_9546GDGem1Objects1ObjectsGDgdjs_9546FirstCode_9546GDGem2Objects1Objects, "Gem" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 2)), (( gdjs.FirstCode.GDGirlObjects1.length === 0 ) ? 0 :gdjs.FirstCode.GDGirlObjects1[0].getPointX("")) + 50, (( gdjs.FirstCode.GDGirlObjects1.length === 0 ) ? 0 :gdjs.FirstCode.GDGirlObjects1[0].getPointY("")) - 100, "");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.FirstCode.GDFlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.FirstCode.GDGirlObjects1);
{for(var i = 0, len = gdjs.FirstCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.FirstCode.GDFlyObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.FirstCode.GDGirlObjects1.length === 0 ) ? 0 :gdjs.FirstCode.GDGirlObjects1[0].getPointX("")), (( gdjs.FirstCode.GDGirlObjects1.length === 0 ) ? 0 :gdjs.FirstCode.GDGirlObjects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.FirstCode.GDFlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.FirstCode.GDGirlObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FirstCode.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.FirstCode.GDFlyObjects1[i].getX() > (( gdjs.FirstCode.GDGirlObjects1.length === 0 ) ? 0 :gdjs.FirstCode.GDGirlObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.FirstCode.GDFlyObjects1[k] = gdjs.FirstCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.FirstCode.GDFlyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FirstCode.GDFlyObjects1 */
{for(var i = 0, len = gdjs.FirstCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.FirstCode.GDFlyObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.FirstCode.GDFlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.FirstCode.GDGirlObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FirstCode.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.FirstCode.GDFlyObjects1[i].getX() < (( gdjs.FirstCode.GDGirlObjects1.length === 0 ) ? 0 :gdjs.FirstCode.GDGirlObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.FirstCode.GDFlyObjects1[k] = gdjs.FirstCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.FirstCode.GDFlyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FirstCode.GDFlyObjects1 */
{for(var i = 0, len = gdjs.FirstCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.FirstCode.GDFlyObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.FirstCode.GDFlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.FirstCode.GDGirlObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.FirstCode.mapOfGDgdjs_9546FirstCode_9546GDFlyObjects1Objects, gdjs.FirstCode.mapOfGDgdjs_9546FirstCode_9546GDGirlObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11882852);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FirstCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("RedFlame"), gdjs.FirstCode.GDRedFlameObjects1);
{for(var i = 0, len = gdjs.FirstCode.GDRedFlameObjects1.length ;i < len;++i) {
    gdjs.FirstCode.GDRedFlameObjects1[i].rotate(90, runtimeScene);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.FirstCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.FirstCode.GDGirlObjects1);
{for(var i = 0, len = gdjs.FirstCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.FirstCode.GDEnemyObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.FirstCode.GDGirlObjects1.length === 0 ) ? 0 :gdjs.FirstCode.GDGirlObjects1[0].getPointX("")), (( gdjs.FirstCode.GDGirlObjects1.length === 0 ) ? 0 :gdjs.FirstCode.GDGirlObjects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.FirstCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.FirstCode.GDGirlObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FirstCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.FirstCode.GDEnemyObjects1[i].getX() < (( gdjs.FirstCode.GDGirlObjects1.length === 0 ) ? 0 :gdjs.FirstCode.GDGirlObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.FirstCode.GDEnemyObjects1[k] = gdjs.FirstCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.FirstCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FirstCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.FirstCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.FirstCode.GDEnemyObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.FirstCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Girl"), gdjs.FirstCode.GDGirlObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FirstCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.FirstCode.GDEnemyObjects1[i].getX() > (( gdjs.FirstCode.GDGirlObjects1.length === 0 ) ? 0 :gdjs.FirstCode.GDGirlObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.FirstCode.GDEnemyObjects1[k] = gdjs.FirstCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.FirstCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FirstCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.FirstCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.FirstCode.GDEnemyObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11887884);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FirstCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10419060);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FirstCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.FirstCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FirstCode.GDGirlObjects1.length = 0;
gdjs.FirstCode.GDGirlObjects2.length = 0;
gdjs.FirstCode.GDGirlObjects3.length = 0;
gdjs.FirstCode.GDGirlObjects4.length = 0;
gdjs.FirstCode.GDNewSpriteObjects1.length = 0;
gdjs.FirstCode.GDNewSpriteObjects2.length = 0;
gdjs.FirstCode.GDNewSpriteObjects3.length = 0;
gdjs.FirstCode.GDNewSpriteObjects4.length = 0;
gdjs.FirstCode.GDplatObjects1.length = 0;
gdjs.FirstCode.GDplatObjects2.length = 0;
gdjs.FirstCode.GDplatObjects3.length = 0;
gdjs.FirstCode.GDplatObjects4.length = 0;
gdjs.FirstCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.FirstCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.FirstCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.FirstCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.FirstCode.GDGem1Objects1.length = 0;
gdjs.FirstCode.GDGem1Objects2.length = 0;
gdjs.FirstCode.GDGem1Objects3.length = 0;
gdjs.FirstCode.GDGem1Objects4.length = 0;
gdjs.FirstCode.GDGem2Objects1.length = 0;
gdjs.FirstCode.GDGem2Objects2.length = 0;
gdjs.FirstCode.GDGem2Objects3.length = 0;
gdjs.FirstCode.GDGem2Objects4.length = 0;
gdjs.FirstCode.GDFlyObjects1.length = 0;
gdjs.FirstCode.GDFlyObjects2.length = 0;
gdjs.FirstCode.GDFlyObjects3.length = 0;
gdjs.FirstCode.GDFlyObjects4.length = 0;
gdjs.FirstCode.GDScoreObjects1.length = 0;
gdjs.FirstCode.GDScoreObjects2.length = 0;
gdjs.FirstCode.GDScoreObjects3.length = 0;
gdjs.FirstCode.GDScoreObjects4.length = 0;
gdjs.FirstCode.GDFlatHeartBarObjects1.length = 0;
gdjs.FirstCode.GDFlatHeartBarObjects2.length = 0;
gdjs.FirstCode.GDFlatHeartBarObjects3.length = 0;
gdjs.FirstCode.GDFlatHeartBarObjects4.length = 0;
gdjs.FirstCode.GDCopperRedBarObjects1.length = 0;
gdjs.FirstCode.GDCopperRedBarObjects2.length = 0;
gdjs.FirstCode.GDCopperRedBarObjects3.length = 0;
gdjs.FirstCode.GDCopperRedBarObjects4.length = 0;
gdjs.FirstCode.GDRedFlameObjects1.length = 0;
gdjs.FirstCode.GDRedFlameObjects2.length = 0;
gdjs.FirstCode.GDRedFlameObjects3.length = 0;
gdjs.FirstCode.GDRedFlameObjects4.length = 0;
gdjs.FirstCode.GDRedExplosionObjects1.length = 0;
gdjs.FirstCode.GDRedExplosionObjects2.length = 0;
gdjs.FirstCode.GDRedExplosionObjects3.length = 0;
gdjs.FirstCode.GDRedExplosionObjects4.length = 0;
gdjs.FirstCode.GDEnemyObjects1.length = 0;
gdjs.FirstCode.GDEnemyObjects2.length = 0;
gdjs.FirstCode.GDEnemyObjects3.length = 0;
gdjs.FirstCode.GDEnemyObjects4.length = 0;

gdjs.FirstCode.eventsList9(runtimeScene);
gdjs.FirstCode.GDGirlObjects1.length = 0;
gdjs.FirstCode.GDGirlObjects2.length = 0;
gdjs.FirstCode.GDGirlObjects3.length = 0;
gdjs.FirstCode.GDGirlObjects4.length = 0;
gdjs.FirstCode.GDNewSpriteObjects1.length = 0;
gdjs.FirstCode.GDNewSpriteObjects2.length = 0;
gdjs.FirstCode.GDNewSpriteObjects3.length = 0;
gdjs.FirstCode.GDNewSpriteObjects4.length = 0;
gdjs.FirstCode.GDplatObjects1.length = 0;
gdjs.FirstCode.GDplatObjects2.length = 0;
gdjs.FirstCode.GDplatObjects3.length = 0;
gdjs.FirstCode.GDplatObjects4.length = 0;
gdjs.FirstCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.FirstCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.FirstCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.FirstCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.FirstCode.GDGem1Objects1.length = 0;
gdjs.FirstCode.GDGem1Objects2.length = 0;
gdjs.FirstCode.GDGem1Objects3.length = 0;
gdjs.FirstCode.GDGem1Objects4.length = 0;
gdjs.FirstCode.GDGem2Objects1.length = 0;
gdjs.FirstCode.GDGem2Objects2.length = 0;
gdjs.FirstCode.GDGem2Objects3.length = 0;
gdjs.FirstCode.GDGem2Objects4.length = 0;
gdjs.FirstCode.GDFlyObjects1.length = 0;
gdjs.FirstCode.GDFlyObjects2.length = 0;
gdjs.FirstCode.GDFlyObjects3.length = 0;
gdjs.FirstCode.GDFlyObjects4.length = 0;
gdjs.FirstCode.GDScoreObjects1.length = 0;
gdjs.FirstCode.GDScoreObjects2.length = 0;
gdjs.FirstCode.GDScoreObjects3.length = 0;
gdjs.FirstCode.GDScoreObjects4.length = 0;
gdjs.FirstCode.GDFlatHeartBarObjects1.length = 0;
gdjs.FirstCode.GDFlatHeartBarObjects2.length = 0;
gdjs.FirstCode.GDFlatHeartBarObjects3.length = 0;
gdjs.FirstCode.GDFlatHeartBarObjects4.length = 0;
gdjs.FirstCode.GDCopperRedBarObjects1.length = 0;
gdjs.FirstCode.GDCopperRedBarObjects2.length = 0;
gdjs.FirstCode.GDCopperRedBarObjects3.length = 0;
gdjs.FirstCode.GDCopperRedBarObjects4.length = 0;
gdjs.FirstCode.GDRedFlameObjects1.length = 0;
gdjs.FirstCode.GDRedFlameObjects2.length = 0;
gdjs.FirstCode.GDRedFlameObjects3.length = 0;
gdjs.FirstCode.GDRedFlameObjects4.length = 0;
gdjs.FirstCode.GDRedExplosionObjects1.length = 0;
gdjs.FirstCode.GDRedExplosionObjects2.length = 0;
gdjs.FirstCode.GDRedExplosionObjects3.length = 0;
gdjs.FirstCode.GDRedExplosionObjects4.length = 0;
gdjs.FirstCode.GDEnemyObjects1.length = 0;
gdjs.FirstCode.GDEnemyObjects2.length = 0;
gdjs.FirstCode.GDEnemyObjects3.length = 0;
gdjs.FirstCode.GDEnemyObjects4.length = 0;


return;

}

gdjs['FirstCode'] = gdjs.FirstCode;
