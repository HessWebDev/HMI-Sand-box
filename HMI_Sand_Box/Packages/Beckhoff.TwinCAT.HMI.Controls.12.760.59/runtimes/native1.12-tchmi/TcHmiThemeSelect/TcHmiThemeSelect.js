var TcHmi;!function(TcHmi){!function(Controls){!function(Beckhoff){class TcHmiThemeSelect extends TcHmi.Controls.System.TcHmiControl{constructor(element,pcElement,attrs){super(element,pcElement,attrs),this.__themeChangeEventDestroyFunction=null,this.__onThemeDefinitionChangedDestroyFunction=null,this.__userInteractionFinishedEventDestroyFunction=null,this.__passThroughPropertyEventDestroyFunction=null,this.__onComboboxPropertyChanged=(event,data,...args)=>{["BackgroundColor","TextHorizontalAlignment","ContentPadding","DropDownHighlightColor","DropDownHighlightTextColor","DropDownToggleButtonBackgroundColor","DropDownToggleButtonArrowColor","TextColor","TextFontSize","TextFontSizeUnit","TextFontFamily","TextFontStyle","TextFontWeight","DataHeight","MaxListHeight","DropDownStyle","DropDownFontSize","DropDownFontSizeUnit","DropDownFontFamily","DropDownFontStyle","DropDownFontWeight","DropDownHorizontalAlignment","DropDownVerticalAlignment","DropDownTextColor","DropDownBackgroundColor"].includes(data.propertyName)&&TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",data,...args)}}__previnit(){super.__previnit(),this.__elementTemplateRoot=this.__element[0].getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiThemeSelect-template")[0];let combobox=Controls.get(this.getId()+"_TcHmiCombobox");if(!combobox||!this.__elementTemplateRoot)throw new Error("Invalid Template.html");this.__combobox=combobox,this.__passThroughPropertyEventDestroyFunction=TcHmi.EventProvider.register(`${this.__id}_TcHmiCombobox.onPropertyChanged`,this.__onComboboxPropertyChanged)}__init(){super.__init(),this.__displayThemes()}__attach(){super.__attach(),this.__selectActiveTheme(),this.__themeChangeEventDestroyFunction=TcHmi.EventProvider.register("onThemeDataChanged",this.__onThemeChanged()),this.__userInteractionFinishedEventDestroyFunction=TcHmi.EventProvider.register(this.__id+"_TcHmiCombobox.onUserInteractionFinished",this.__onUserInteractionFinished()),TCHMI_ENGINEERING&&(this.__onThemeDefinitionChangedDestroyFunction=TcHmi.EventProvider.register("onConfigChanged",((evt,param)=>{tchmi_equal(param.configNew.themes,param.configOld.themes)||this.__displayThemes()})))}__detach(){super.__detach(),this.__themeChangeEventDestroyFunction&&(this.__themeChangeEventDestroyFunction(),this.__themeChangeEventDestroyFunction=null),this.__userInteractionFinishedEventDestroyFunction&&(this.__userInteractionFinishedEventDestroyFunction(),this.__userInteractionFinishedEventDestroyFunction=null),TCHMI_ENGINEERING&&(this.__onThemeDefinitionChangedDestroyFunction?.(),this.__onThemeDefinitionChangedDestroyFunction=null)}destroy(){this.__keepAlive||(this.__passThroughPropertyEventDestroyFunction?.(),this.__passThroughPropertyEventDestroyFunction=null,super.destroy())}__displayThemes(){let themes=TcHmi.Theme.getRegisteredThemes(),themeData=[];themes.forEach(((theme,itemId)=>{let themeListItem={text:theme,id:itemId,value:theme};themeData.push(themeListItem)})),themeData.length>0&&this.__combobox.setSrcData(themeData)}__selectActiveTheme(){let theme=TcHmi.Theme.get(),srcData=this.__combobox.getSrcData();if(theme&&srcData?.length){for(let i=0;i<srcData.length;i++)if(srcData[i].value===theme){this.__combobox.setSelectedIndex(i);break}}else this.__combobox.setSelectedIndex(null)}__onThemeChanged(){return event=>{this.__selectActiveTheme()}}__onUserInteractionFinished(){return event=>{TcHmi.Theme.set(this.__combobox.getSelectedValue())}}
/**
                 * Sets the background value and calls the associated process function (processBackground).
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setBackgroundColor(valueNew){this.__combobox.setBackgroundColor(valueNew)}
/**
                 * Returns the current background value.
                 * @preserve (Part of the public API)
                 */getBackgroundColor(){return this.__combobox.getBackgroundColor()}setTextHorizontalAlignment(valueNew){this.__combobox.setTextHorizontalAlignment(valueNew)}getTextHorizontalAlignment(){return this.__combobox.getTextHorizontalAlignment()}setContentPadding(valueNew){this.__combobox.setContentPadding(valueNew)}getContentPadding(){return this.__combobox.getContentPadding()}setDropDownHighlightColor(valueNew){this.__combobox.setDropDownHighlightColor(valueNew)}getDropDownHighlightColor(){return this.__combobox.getDropDownHighlightColor()}setDropDownHighlightTextColor(valueNew){this.__combobox.setDropDownHighlightTextColor(valueNew)}getDropDownHighlightTextColor(){return this.__combobox.getDropDownHighlightTextColor()}setDropDownToggleButtonBackgroundColor(valueNew){this.__combobox.setDropDownToggleButtonBackgroundColor(valueNew)}getDropDownToggleButtonBackgroundColor(){return this.__combobox.getDropDownToggleButtonBackgroundColor()}setDropDownToggleButtonArrowColor(valueNew){this.__combobox.setDropDownToggleButtonArrowColor(valueNew)}getDropDownToggleButtonArrowColor(){return this.__combobox.getDropDownToggleButtonArrowColor()}setTextColor(valueNew){this.__combobox.setTextColor(valueNew)}getTextColor(){return this.__combobox.getTextColor()}setTextFontSize(valueNew){this.__combobox.setTextFontSize(valueNew)}getTextFontSize(){return this.__combobox.getTextFontSize()}setTextFontSizeUnit(valueNew){this.__combobox.setTextFontSizeUnit(valueNew)}getTextFontSizeUnit(){return this.__combobox.getTextFontSizeUnit()}setTextFontFamily(valueNew){this.__combobox.setTextFontFamily(valueNew)}getTextFontFamily(){return this.__combobox.getTextFontFamily()}setTextFontStyle(valueNew){this.__combobox.setTextFontStyle(valueNew)}getTextFontStyle(){return this.__combobox.getTextFontStyle()}setTextFontWeight(valueNew){this.__combobox.setTextFontWeight(valueNew)}getTextFontWeight(){return this.__combobox.getTextFontWeight()}setDataHeight(valueNew){this.__combobox.setDataHeight(valueNew)}getDataHeight(){return this.__combobox.getDataHeight()}setMaxListHeight(valueNew){this.__combobox.setMaxListHeight(valueNew)}getMaxListHeight(){return this.__combobox.getMaxListHeight()}setDropDownStyle(valueNew){this.__combobox.setDropDownStyle(valueNew)}getDropDownStyle(){return this.__combobox.getDropDownStyle()}setDropDownFontSize(valueNew){this.__combobox.setDropDownFontSize(valueNew)}getDropDownFontSize(){return this.__combobox.getDropDownFontSize()}setDropDownFontSizeUnit(valueNew){this.__combobox.setDropDownFontSizeUnit(valueNew)}getDropDownFontSizeUnit(){return this.__combobox.getDropDownFontSizeUnit()}setDropDownFontFamily(valueNew){this.__combobox.setDropDownFontFamily(valueNew)}getDropDownFontFamily(){return this.__combobox.getDropDownFontFamily()}setDropDownFontStyle(valueNew){this.__combobox.setDropDownFontStyle(valueNew)}getDropDownFontStyle(){return this.__combobox.getDropDownFontStyle()}setDropDownFontWeight(valueNew){this.__combobox.setDropDownFontWeight(valueNew)}getDropDownFontWeight(){return this.__combobox.getDropDownFontWeight()}setDropDownHorizontalAlignment(valueNew){this.__combobox.setDropDownHorizontalAlignment(valueNew)}getDropDownHorizontalAlignment(){return this.__combobox.getDropDownHorizontalAlignment()}setDropDownVerticalAlignment(valueNew){this.__combobox.setDropDownVerticalAlignment(valueNew)}getDropDownVerticalAlignment(){return this.__combobox.getDropDownVerticalAlignment()}setDropDownTextColor(valueNew){this.__combobox.setDropDownTextColor(valueNew)}getDropDownTextColor(){return this.__combobox.getDropDownTextColor()}setDropDownBackgroundColor(valueNew){this.__combobox.setDropDownBackgroundColor(valueNew)}getDropDownBackgroundColor(){return this.__combobox.getDropDownBackgroundColor()}}Beckhoff.TcHmiThemeSelect=TcHmiThemeSelect}(Controls.Beckhoff||(Controls.Beckhoff={}))}(TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("TcHmiThemeSelect","TcHmi.Controls.Beckhoff",TcHmi.Controls.Beckhoff.TcHmiThemeSelect);