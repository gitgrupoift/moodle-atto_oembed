YUI.add("moodle-atto_oembed-button",function(e,t){var n="atto_oembed",r="oembed_url",i="atto_oembed",s={INPUTSUBMIT:"atto_media_urlentrysubmit",INPUTCANCEL:"atto_media_urlentrycancel",MEDIAURL:"MEDIAURL"},o={MEDIAURL:".MEDIAURL"},u='<form class="atto_form"><div id="{{elementid}}_{{innerform}}" class="mdl-align"><label for="{{elementid}}_{{MEDIAURL}}">{{get_string "enterurl" component}}</label><input class="{{CSS.MEDIAURL}} id="{{elementid}}_{{MEDIAURL}}" name="{{elementid}}_{{MEDIAURL}}" value="{}" /><button class="{{CSS.INPUTSUBMIT}}">{{get_string "insert" component}}</button></div>icon: {{clickedicon}}</form>';e.namespace("M.atto_oembed").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){if(this.get("disabled"))return;var t=["insert_embed_media"];e.Array.each(t,function(e){this.addButton({icon:"ed/"+e,iconComponent:"atto_oembed",buttonName:e,callback:this._displayDialogue,callbackArgs:e})},this)},_getMEDIAURLName:function(){return this.get("host").get("elementid")+"_"+r},_displayDialogue:function(t,r){t.preventDefault();var i=400,s=this.getDialogue({headerContent:M.util.get_string("dialogtitle",n),width:i+"px",focusAfterHide:r});s.width!==i+"px"&&s.set("width",i+"px");var o=this._getFormContent(r),u=e.Node.create("<div></div>");u.append(o),s.set("bodyContent",u),s.show(),this.markUpdated()},_getFormContent:function(t){var i=e.Handlebars.compile(u),o=e.Node.create(i({elementid:this.get("host").get("elementid"),CSS:s,MEDIAURL:r,component:n,defaultflavor:this.get("defaultflavor"),clickedicon:t}));return this._form=o,this._form.one("."+s.INPUTSUBMIT).on("click",this._doInsert,this),o},_doInsert:function(t){t.preventDefault(),this.getDialogue({focusAfterHide:null}).hide();var n=this._form.one(o.MEDIAURL),r=M.cfg.wwwroot+"/lib/editor/atto/plugins/oembed/ajax2.php",i={sesskey:M.cfg.sesskey,action:"filtertext",text:n.get("value")},s=this,u=function(e){e.success||alert("Failed to do oembed"),s.editor.focus(),s.get("host").insertContentAtFocusPoint(e.htmloutput),s.markUpdated()},a=e.io(r,{sync:!0,data:i,method:"POST",on:{success:function(t,n){var r={};try{r=e.JSON.parse(n.responseText)}catch(i){alert("JSON Parse failed!");return}u(r)}}})}},{ATTRS:{disabled:{value:!1},usercontextid:{value:null},defaultflavor:{value:""}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});
