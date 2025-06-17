gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDOrangeBubbleButtonObjects1= [];
gdjs.MainCode.GDOrangeBubbleButtonObjects2= [];


gdjs.MainCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OrangeBubbleButton"), gdjs.MainCode.GDOrangeBubbleButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDOrangeBubbleButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDOrangeBubbleButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDOrangeBubbleButtonObjects1[k] = gdjs.MainCode.GDOrangeBubbleButtonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDOrangeBubbleButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "First", false);
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDOrangeBubbleButtonObjects1.length = 0;
gdjs.MainCode.GDOrangeBubbleButtonObjects2.length = 0;

gdjs.MainCode.eventsList0(runtimeScene);
gdjs.MainCode.GDOrangeBubbleButtonObjects1.length = 0;
gdjs.MainCode.GDOrangeBubbleButtonObjects2.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
